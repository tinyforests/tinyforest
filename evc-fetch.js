// evc-fetch.js

let modalMap, marker, currentEvcCode, currentAddress;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize the Leaflet map in the modal
  modalMap = L.map("modal-map", { zoomControl: false })
    .setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  // 2) Handle address submission
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    currentAddress = addr;
    searchEVC(addr);
  });

  // 3) Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
    document.getElementById("modal-plants").innerHTML = "";
  });

  // 4) Display plant list only after email form is submitted
  const gfForm = document.getElementById("gf-form");
  if (gfForm) {
    gfForm.addEventListener("submit", () => {
      // let the POST go through, then render plants
      setTimeout(() => {
        fetch("curated-plants.json")
          .then(r => r.json())
          .then(json => {
            const entry = json[currentEvcCode];
            if (!entry) {
              console.error("No entry for EVC code:", currentEvcCode);
              return;
            }
            const container = document.getElementById("modal-plants");
            container.innerHTML = "";
            entry.recommendations.forEach(layer => {
              const div = document.createElement("div");
              div.className = "layer";
              div.innerHTML = `
                <h3>${layer.layer}</h3>
                <ul>${layer.plants.map(p => `<li>${p}</li>`).join("")}</ul>
              `;
              container.appendChild(div);
            });
          })
          .catch(err => console.error("Error loading plant list:", err));
      }, 500);
    });
  }
});

/**
 * Geocode the address and fetch EVC
 */
function searchEVC(address) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const { lat, lon } = results[0];
      fetchEVCData(+lat, +lon);
    })
    .catch(err => alert(err.message));
}

/**
 * Fetch EVC data from Victorian Gov WFS
 */
function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features?.length) throw new Error("No EVC data.");
      const pt = turf.point([lon, lat]);
      const feat = data.features.find(f =>
        f.geometry?.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const { x_evcname, evc_bcs_desc, bioregion, evc } = feat.properties;
      currentEvcCode = String(evc).trim();
      showModal(x_evcname, evc_bcs_desc, bioregion, currentEvcCode, lat, lon);
    })
    .catch(err => alert(err.message));
}

/**
 * Populate & open the modal with EVC info + map + description
 */
function showModal(name, status, bioregion, code, lat, lon) {
  // EVC name (with trailing period)
  const dispName = name.endsWith('.') ? name : name + '.';
  document.getElementById("modal-evc-name").textContent = dispName;

  // Status & Bioregion
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = bioregion;

  // Load description from JSON
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      const entry = json[code];
      document.getElementById("modal-evc-description").textContent =
        entry?.description || "No description available.";
    })
    .catch(err => {
      console.error("Error loading description:", err);
      document.getElementById("modal-evc-description").textContent =
        "Error loading description.";
    });

  // Populate hidden form fields
  const addrF = document.getElementById("gf-address");
  if (addrF) addrF.value = currentAddress;
  const codeF = document.getElementById("gf-evcCode");
  if (codeF) codeF.value = currentEvcCode;

  // Draw marker
  modalMap.setView([lat, lon], 12);
  if (marker) modalMap.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(modalMap);

  // Show modal
  document.getElementById("evc-modal").style.display = "flex";
}
