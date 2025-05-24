// evc-fetch.js

let map;
let marker;
let currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  document.getElementById("search-button").addEventListener("click", searchEVC);
});

function searchEVC() {
  const addr = document.getElementById("address-input").value.trim();
  if (!addr) return alert("Please enter an address.");

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) return alert("Address not found.");
      const { lat, lon } = results[0];
      updateMap(parseFloat(lat), parseFloat(lon));
      fetchEVCData(parseFloat(lat), parseFloat(lon));
    })
    .catch(() => alert("Error finding that address."));
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
      if (!data.features || !data.features.length) {
        document.getElementById("evc-details").innerHTML = "<p>No EVC data found.</p>";
        document.getElementById("download-button").style.display = "none";
      } else {
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
      }
    })
    .catch(() => {
      document.getElementById("evc-details").innerHTML = "<p>Error retrieving EVC data.</p>";
      document.getElementById("download-button").style.display = "none";
    });
}

function displayEVCInfo(name, code, status, region) {
  currentEvcCode = code;

  document.getElementById("evc-details").innerHTML = `
    <p><strong>Your EVC:</strong> ${name}</p>
    <p><strong>EVC Code:</strong> ${code}</p>
    <p><strong>Conservation Status:</strong> ${status}</p>
    <p><strong>Bioregion:</strong> ${region}</p>
  `;

  const btn = document.getElementById("download-button");
  btn.style.display = "inline-block";
  btn.onclick = () => {
    window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(currentEvcCode)}`;
  };
}
