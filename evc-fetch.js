// evc-fetch.js

// — curated plant & description data —
const curatedPlants = {
  "175": {
    description: "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
    recommendations: [
      { layer: "Tree Canopy", plants: ["Eucalyptus radiata s.l. (Narrow-leaf Peppermint)", "Eucalyptus melliodora (Yellow Box)", "Eucalyptus microcarpa (Grey Box)"] },
      { layer: "Understorey Tree / Large Shrub", plants: ["Acacia mearnsii (Black Wattle)", "Allocasuarina littoralis (Black Sheoak)", "Exocarpos cupressiformis (Cherry Ballart)"] },
      /* …etc… */
    ]
  },
  "47": { /* … */ },
  "55": { /* … */ },
  "180": { /* … */ }
};

let map, marker;

function initEvcFetch() {
  console.log("🗺️  evc-fetch initialized");

  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    searchEVC();
  });
  document.getElementById("search-button").addEventListener("click", e => {
    e.preventDefault();
    searchEVC();
  });

  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEvcFetch);
} else {
  initEvcFetch();
}

function searchEVC() {
  console.log("🔍 searchEVC()");
  const addr = document.getElementById("address-input").value.trim();
  if (!addr) {
    alert("Please enter an address.");
    return;
  }
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}`)
    .then(r => r.json())
    .then(res => {
      if (!res.length) throw new Error("Address not found.");
      const { lat, lon } = res[0];
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
  console.log("🛰️ fetchEVCData()", lat, lon);
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features || !data.features.length) {
        throw new Error("No EVC data found.");
      }
      const pt = turf.point([lon, lat]);
      const feat = data.features.find(f =>
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
  console.log("📋 displayModal()", name, status, region, code);
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "Not specified";
  document.getElementById("modal-evc-region").textContent = region || "Not specified";

  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent =
    info ? info.description : "No description available.";

  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info?.recommendations) {
    info.recommendations.forEach(layerObj => {
      const row = document.createElement("div");
      row.className = "layer";
      const h3 = document.createElement("h3");
      h3.textContent = layerObj.layer;
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
