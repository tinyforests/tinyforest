// evc-fetch.js

let modalMap, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the modal map
  modalMap = L.map("modal-map", { zoomControl: false }).setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  // Address form submit
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    searchEVC();
  });

  // Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // Download list button
  document.getElementById("modal-download").addEventListener("click", () => {
    if (currentEvcCode) {
      window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(currentEvcCode)}`;
    }
  });
});

function searchEVC() {
  const addr = document.getElementById("address-input").value.trim();
  if (!addr) return alert("Please enter an address.");

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}`;
  fetch(url)
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

      const { x_evcname, evc, evc_bcs_desc, bioregion } = feat.properties;
      currentEvcCode = evc || "";
      showModal(x_evcname, evc_bcs_desc, bioregion, evc, lat, lon);
    })
    .catch(err => {
      console.error(err);
      alert(err.message || "Error retrieving EVC data.");
    });
}

function showModal(name, status, bioregion, code, lat, lon) {
  // Populate text fields
  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = bioregion;
  document.getElementById("modal-evc-code").textContent = code;

  // Load description from curated-plants.json
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      const desc = json[code]?.description || "";
      document.getElementById("modal-evc-description").textContent = desc;
    })
    .catch(err => {
      console.error("Could not load description:", err);
      document.getElementById("modal-evc-description").textContent = "";
    });

  // Update and show modal map
  modalMap.setView([lat, lon], 12);
  if (marker) modalMap.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(modalMap);

  // Show modal
  document.getElementById("evc-modal").style.display = "flex";
}
