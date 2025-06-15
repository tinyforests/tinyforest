// evc-fetch.js

let modalMap, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize modal map
  modalMap = L.map("modal-map", { zoomControl: false }).setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  // Search form
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    searchEVC();
  });

  // Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // Email form
  document.getElementById("email-form").addEventListener("submit", e => {
    e.preventDefault();
    loadPlantList();
  });
});

function searchEVC() {
  const addr = document.getElementById("address-input").value.trim();
  if (!addr) return alert("Please enter an address.");

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const { lat, lon } = results[0];
      fetchEVCData(+lat, +lon);
    })
    .catch(err => {
      console.error(err);
      alert(err.message || "Error finding that address.");
    });
}

function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features.length) throw new Error("No EVC data for this location.");
      const pt = turf.point([lon, lat]);
      const feat = data.features.find(f =>
        f.geometry?.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const { x_evcname, evc_bcs_desc, bioregion, evc } = feat.properties;
      currentEvcCode = evc || "";
      showModal(x_evcname, evc_bcs_desc, bioregion, evc, lat, lon);
    })
    .catch(err => {
      console.error(err);
      alert(err.message || "Error retrieving EVC data.");
    });
}

function showModal(name, status, bioregion, code, lat, lon) {
  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = bioregion;
  document.getElementById("modal-plants").innerHTML = "";  // clear old list
  document.getElementById("email-input").value = "";

  // Load description
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      document.getElementById("modal-evc-description").textContent = json[code]?.description || "";
    })
    .catch(err => {
      console.error("Could not load description:", err);
      document.getElementById("modal-evc-description").textContent = "";
    });

  // Center map
  modalMap.setView([lat, lon], 12);
  if (marker) modalMap.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(modalMap);

  document.getElementById("evc-modal").style.display = "flex";
}

function loadPlantList() {
  if (!currentEvcCode) return;
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      const entry = json[currentEvcCode];
      const container = document.getElementById("modal-plants");
      container.innerHTML = ""; 
      entry.recommendations.forEach(layer => {
        const div = document.createElement("div");
        div.className = "layer";
        const h3 = document.createElement("h3");
        h3.textContent = layer.layer;
        div.appendChild(h3);
        const ul = document.createElement("ul");
        layer.plants.forEach(p => {
          const li = document.createElement("li");
          li.textContent = p;
          ul.appendChild(li);
        });
        div.appendChild(ul);
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Failed to load plant list:", err);
    });
}
