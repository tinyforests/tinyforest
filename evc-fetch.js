// evc-fetch.js

let modalMap, marker, currentEvcCode, currentAddress;

// Your updated Apps Script endpoint for centralized logging
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyZa9YlObZ5IbIqOzxIOzK0c5z3O5r2VkL3w_Esp-GDB7mQwMdsycahNh-ShfvTa2H-/exec";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the modal map
  modalMap = L.map("modal-map", { zoomControl: false }).setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  // Address lookup form
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    currentAddress = addr;
    searchEVC(addr);
  });

  // “Send List” button
  document.getElementById("email-submit").addEventListener("click", () => {
    const email = document.getElementById("email-input").value.trim();
    if (!email) return alert("Please enter an email address.");
    recordSubmission(currentAddress, currentEvcCode, email);
    loadPlantList();
  });

  // Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
});

/**
 * Geocode the address and trigger EVC fetch
 */
function searchEVC(address) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const { lat, lon } = results[0];
      fetchEVCData(+lat, +lon);
    })
    .catch(err => {
      console.error("Geocode error:", err);
      alert(err.message || "Error finding that address.");
    });
}

/**
 * Fetch EVC polygon data and show the modal
 */
function fetchEVCData(lat, lon) {
  const delta = 0.02;
  const bbox = [lon - delta, lat - delta, lon + delta, lat + delta].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features?.length) throw new Error("No EVC data for this location.");
      const pt = turf.point([lon, lat]);
      const feature = data.features.find(f =>
        f.geometry?.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const { x_evcname, evc_bcs_desc, bioregion, evc } = feature.properties;
      currentEvcCode = evc || "";
      showModal(x_evcname, evc_bcs_desc, bioregion, evc, lat, lon);
    })
    .catch(err => {
      console.error("EVC fetch error:", err);
      alert(err.message || "Error retrieving EVC data.");
    });
}

/**
 * Populate and display the modal
 * Appends a period to the EVC name if missing
 */
function showModal(name, status, bioregion, code, lat, lon) {
  // Ensure trailing period on the EVC name
  const displayName = name.endsWith('.') ? name : name + '.';
  document.getElementById("modal-evc-name").textContent = displayName;

  // Status & Bioregion now directly under name
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = bioregion;

  document.getElementById("modal-plants").innerHTML = "";   // clear previous list
  document.getElementById("email-input").value = "";        // clear email field

  // Load description from curated-plants.json
  fetch("curated-plants.json")
    .then(res => res.json())
    .then(json => {
      const desc = json[code]?.description || "";
      document.getElementById("modal-evc-description").textContent = desc;
    })
    .catch(err => {
      console.error("Description load error:", err);
      document.getElementById("modal-evc-description").textContent = "";
    });

  // Center marker on modal map
  modalMap.setView([lat, lon], 12);
  if (marker) modalMap.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(modalMap);

  // Show the modal
  document.getElementById("evc-modal").style.display = "flex";
}

/**
 * Load and render the curated plant list inside the modal
 */
function loadPlantList() {
  if (!currentEvcCode) return;

  fetch("curated-plants.json")
    .then(res => res.json())
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
        layer.plants.forEach(plant => {
          const li = document.createElement("li");
          li.textContent = plant;
          ul.appendChild(li);
        });
        div.appendChild(ul);
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Plant list load error:", err);
    });
}

/**
 * Save address + EVC code + email to Google Sheet via Apps Script
 */
function recordSubmission(address, evcCode, email) {
  const payload = { address, evcCode, email };
  fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(json => {
    if (!json.success) console.error('Submit error', json.error);
  })
  .catch(err => console.error('Network error', err));
}
