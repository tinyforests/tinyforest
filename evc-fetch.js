// evc-fetch.js

let map, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  console.log("⚙️ DOM loaded, initializing map + form");

  // Initialize Leaflet
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Form submit handler
  const form = document.getElementById("address-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("🔍 Form submitted, calling searchEVC()");
    searchEVC();
  });

  // Plant-list button
  const plantBtn = document.getElementById("download-button");
  plantBtn.addEventListener("click", () => {
    if (!currentEvcCode) {
      alert("Please search for an address first.");
      return;
    }
    window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(currentEvcCode)}`;
  });
});

function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  console.log("🔍 searchEVC() got address:", address);
  if (!address) {
    return alert("Please enter an address.");
  }

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
  console.log("🔍 Fetching geocode:", url);

  fetch(url)
    .then(res => res.json())
    .then(results => {
      console.log("✅ Geocode results:", results);
      if (!results.length) {
        alert("Address not found.");
        return;
      }
      const { lat, lon } = results[0];
      updateMap(+lat, +lon);
      fetchEVCData(+lat, +lon);
    })
    .catch(err => {
      console.error("❌ Geocode fetch error:", err);
      alert("Error finding that address.");
    });
}

function updateMap(lat, lon) {
  console.log(`📍 updateMap to [${lat}, ${lon}]`);
  map.setView([lat, lon], 12);
  if (marker) map.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(map);
}

function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;
  console.log("🔍 Fetching EVC data:", url);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("✅ EVC data:", data);
      if (!data.features || !data.features.length) {
        throw new Error("No features returned");
      }
      const pt = turf.point([lon, lat]);
      const feature =
        data.features.find(f =>
          f.geometry?.type === "Polygon" &&
          turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
        ) || data.features[0];

      const { x_evcname, evc, evc_bcs_desc, bioregion } = feature.properties;
      displayEVCInfo(
        x_evcname || "Unknown",
        evc || "Unknown",
        evc_bcs_desc || "Not Specified",
        bioregion || "Not Specified"
      );
    })
    .catch(err => {
      console.error("❌ EVC fetch error:", err);
      document.getElementById("evc-details").innerHTML =
        "<p>Error retrieving EVC data.</p>";
      document.getElementById("download-button").style.display = "none";
    });
}

function displayEVCInfo(name, code, status, region) {
  console.log("✅ displayEVCInfo:", { name, code, status, region });
  currentEvcCode = code;
  document.getElementById("evc-details").innerHTML = `
    <p><strong>Your EVC:</strong> ${name}</p>
    <p><strong>Code:</strong> ${code}</p>
    <p><strong>Status:</strong> ${status}</p>
    <p><strong>Bioregion:</strong> ${region}</p>
  `;
  document.getElementById("download-button").style.display = "inline-block";
}
