// evc-fetch.js

// — your curated‐plants lookup (abbreviated) —
const curatedPlants = {
  "175": {
    description: "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall...range of geologies.",
    recommendations: [ /* … */ ]
  },
  "47": { /* … */ },
  "55": { /* … */ },
  "180": { /* … */ }
};

let map, marker;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize the map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Hook the form
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) {
      alert("Please enter an address.");
      return;
    }
    geocodeAddress(addr);
  });

  // 3) Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
});

function geocodeAddress(address) {
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  )
    .then(res => res.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const lat = parseFloat(results[0].lat);
      const lon = parseFloat(results[0].lon);
      map.setView([lat, lon], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch(err => {
      console.error(err);
      alert(err.message);
    });
}

function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`;
  const url =
    `https://opendata.maps.vic.gov.au/geoserver/wfs` +
    `?service=WFS` +
    `&version=1.0.0` +
    `&request=GetFeature` +
    `&typeName=open-data-platform:nv2005_evcbcs` +
    `&bbox=${bbox},EPSG:4326` +
    `&outputFormat=application/json`;

  fetch(url)
    .then(res => res.text())
    .then(text => {
      // If it comes back as HTML/XML, abort gracefully
      if (text.trim().startsWith("<")) {
        console.error("EVC WFS returned HTML:", text.slice(0, 200));
        throw new Error("Error retrieving EVC data. Please try again later.");
      }
      return JSON.parse(text);
    })
    .then(data => {
      if (!data.features || !data.features.length) {
        throw new Error("No EVC data found for this location.");
      }
      // pick the first polygon containing our point, or fallback to the first feature
      const pt = turf.point([lon, lat]);
      const feat =
        data.features.find(f =>
          f.geometry?.type === "Polygon" &&
          turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
        ) || data.features[0];

      const p = feat.properties;
      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc);
    })
    .catch(err => {
      console.error(err);
      alert(err.message);
    });
}

function displayModal(name, status, region, code) {
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent =
    status || "Not specified";
  document.getElementById("modal-evc-region").textContent =
    region || "Not specified";

  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // Populate plant layers if any
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info?.recommendations) {
    info.recommendations.forEach(layerObj => {
      const row = document.createElement("div");
      row.className = "layer";
      const h3 = document.createElement("h3");
      h3.textContent = layerObj.layer + ".";
      row.appendChild(h3);
      const ul = document.createElement("ul");
      layerObj.plants.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        ul.appendChild(li);
      });
      row.appendChild(ul);
      plantsDiv.appendChild(row);
    });
    plantsDiv.style.display = "block";
  } else {
    plantsDiv.style.display = "none";
  }

  document.getElementById("evc-modal").style.display = "flex";
}
