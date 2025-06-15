// evc-fetch.js

let map, marker, modalMap, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize inline map (unused), and modal map placeholder
  modalMap = L.map("modal-map").setView([-37.8136,144.9631],8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  // Form submit
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    searchEVC();
  });

  // Modal close
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // Download button in modal
  document.getElementById("modal-download").addEventListener("click", () => {
    if (currentEvcCode) {
      window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(currentEvcCode)}`;
    }
  });
});

function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  if (!address) return alert("Please enter an address.");

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) return alert("Address not found.");
      const { lat, lon } = results[0];
      fetchEVCData(+lat, +lon);
    })
    .catch(err => {
      console.error(err);
      alert("Error finding that address.");
    });
}

function fetchEVCData(lat, lon) {
  const d=0.02;
  const bbox = [lon-d,lat-d,lon+d,lat+d].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features.length) throw new Error("No EVC data");
      const pt = turf.point([lon,lat]);
      const feat = data.features.find(f =>
        f.geometry?.type==="Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const { x_evcname, evc, evc_bcs_desc, bioregion } = feat.properties;
      currentEvcCode = evc || "";
      showModal(x_evcname, evc_bcs_desc, bioregion, evc, lat, lon);
    })
    .catch(err => {
      console.error(err);
      alert("Error retrieving EVC data.");
    });
}

function showModal(name, description, regionDesc, code, lat, lon) {
  // Populate modal fields
  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-description").textContent = description;
  document.getElementById("modal-evc-code").textContent = code;
  document.getElementById("modal-evc-status").textContent = regionDesc;
  document.getElementById("modal-evc-region").textContent = ""; // if separate

  // Move modal map to new center
  modalMap.setView([lat, lon], 12);
  if (marker) modalMap.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(modalMap);

  // Show the modal
  document.getElementById("evc-modal").style.display = "flex";
}
