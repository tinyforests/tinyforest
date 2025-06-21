// evc-fetch.js

let modalMap, marker, currentEvcCode, currentAddress;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize the modal’s Leaflet map
  modalMap = L.map("modal-map", { zoomControl: false })
    .setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  // 2) Address‐lookup form
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    currentAddress = addr;
    searchEVC(addr);
  });

  // 3) Close the modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
    // clear out any previously rendered plant list
    document.getElementById("modal-plants").innerHTML = "";
  });

  // 4) “Display plant list” button → fetch & render plants
  const gfForm = document.getElementById("gf-form");
  if (gfForm) {
    gfForm.addEventListener("submit", e => {
      // allow the form POST to Google to go through,
      // then fetch + render the plants
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

function searchEVC(address) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const { lat, lon } = results[0];
      fetchEVCData(+lat, +lon);
    })
    .catch(err => alert(err.message));
}

function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = [lon-d, lat-d, lon+d, lat+d].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(r => r.json())
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

function showModal(name, status, bioregion, code, lat, lon) {
  // 1) Header info
  const dispName = name.endsWith('.') ? name : name + '.';
  document.getElementById("modal-evc-name").textContent   = dispName;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = bioregion;

  // 2) Description only
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      const entry = json[code];
      document.getElementById("modal-evc-description").textContent =
        entry?.description || "No description available.";
    })
    .catch(err => {
      console.error("Error loading descriptions:", err);
      document.getElementById("modal-evc-description").textContent =
        "Error loading description.";
    });

  // 3) Populate hidden form fields
  const addrF = document.getElementById("gf-address");
  if (addrF) addrF.value = currentAddress;
  const codeF = document.getElementById("gf-evcCode");
  if (codeF) codeF.value = currentEvcCode;

  // 4) Draw the marker in the modal map
  modalMap.setView([lat, lon], 12);
  if (marker) modalMap.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(modalMap);

  // 5) Show the modal
  document.getElementById("modal-plants").innerHTML = "";
  document.getElementById("evc-modal").style.display = "flex";
}
