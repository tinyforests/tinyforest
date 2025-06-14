// evc-fetch.js

let map, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Leaflet
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Form submit replaces button click
  document.getElementById("address-form")
    .addEventListener("submit", e => {
      e.preventDefault();
      searchEVC();
    });

  // Curated-plants redirect button
  const plantBtn = document.getElementById("download-button");
  plantBtn.addEventListener("click", () => {
    if (!currentEvcCode) {
      return alert("Please search for an address first.");
    }
    window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(currentEvcCode)}`;
  });
});

function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  if (!address) {
    alert("Please enter an address.");
    return;
  }

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) {
        alert("Address not found.");
        return;
      }
      const { lat, lon } = results[0];
      updateMap(+lat, +lon);
      fetchEVCData(+lat, +lon);
    })
    .catch(err => {
      console.error("Geocode error:", err);
      alert("Error finding that address.");
    });
}

function updateMap(lat, lon) {
  map.setView([lat, lon], 12);
  if (marker) map.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(map);
}

function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features.length) {
        throw new Error("No EVC data for this location");
      }
      const pt = turf.point([lon, lat]);
      const feat = data.features.find(f =>
        f.geometry?.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const { x_evcname, evc, evc_bcs_desc, bioregion } = feat.properties;
      displayEVCInfo(
        x_evcname || "Unknown",
        evc || "Unknown",
        evc_bcs_desc || "Not Specified",
        bioregion || "Not Specified"
      );
    })
    .catch(err => {
      console.error("EVC fetch error:", err);
      document.getElementById("evc-details").innerHTML =
        "<p>Error retrieving EVC data.</p>";
      document.getElementById("download-button").style.display = "none";
      document.getElementById("evc-description").textContent = "";
    });
}

function displayEVCInfo(name, code, status, region) {
  currentEvcCode = code;

  // 1) populate EVC core info
  document.getElementById("evc-name").textContent = name;
  document.getElementById("evc-code").textContent = code;
  document.getElementById("evc-status").textContent = status;
  document.getElementById("evc-region").textContent = region;

  // 2) show the button
  document.getElementById("download-button").style.display = "inline-block";

  // 3) fetch and display the curated-plants description
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      const entry = json[code];
      document.getElementById("evc-description").textContent =
        entry?.description || "";
    })
    .catch(err => {
      console.error("Error loading curated-plants.json:", err);
      document.getElementById("evc-description").textContent = "";
    });
}
