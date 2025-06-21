// evc-fetch.js

let modalMap, marker, currentEvcCode, currentAddress;

document.addEventListener("DOMContentLoaded", () => {
  // initialize map for modal
  modalMap = L.map("modal-map", { zoomControl: false })
    .setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  // address form submit
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    currentAddress = addr;
    searchEVC(addr);
  });

  // close modal
  document.getElementById("modal-close")
    .addEventListener("click", () => {
      document.getElementById("evc-modal").style.display = "none";
    });
});

/**
 * Geocode & fetch EVC
 */
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
        f.geometry?.type==="Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const { x_evcname, evc_bcs_desc, bioregion, evc } = feat.properties;
      currentEvcCode = evc || "";
      showModal(x_evcname, evc_bcs_desc, bioregion, evc, lat, lon);
    })
    .catch(err => alert(err.message));
}

function showModal(name, status, bioregion, code, lat, lon) {
  // ensure trailing period
  const dispName = name.endsWith('.') ? name : name + '.';
  document.getElementById("modal-evc-name").textContent   = dispName;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = bioregion;

  // description from curated-plants.json
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      document.getElementById("modal-evc-description").textContent =
        json[code]?.description || "";
    });

  // populate hidden form fields
  document.getElementById("gf-address").value  = currentAddress;
  document.getElementById("gf-evcCode").value  = currentEvcCode;

  // draw modal map marker
  modalMap.setView([lat, lon], 12);
  if (marker) modalMap.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(modalMap);

  // clear previous plant list
  document.getElementById("modal-plants").innerHTML = "";

  // show the modal
  document.getElementById("evc-modal").style.display = "flex";
}

document.getElementById("gf-form")?.addEventListener("submit", () => {
  // once form submits to Google, load plant list underneath
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      const entry = json[currentEvcCode];
      const container = document.getElementById("modal-plants");
      entry?.recommendations.forEach(layer => {
        const div = document.createElement("div");
        div.className = "layer";
        div.innerHTML = `
          <h3>${layer.layer}</h3>
          <ul>${layer.plants.map(p=>`<li>${p}</li>`).join("")}</ul>
        `;
        container.appendChild(div);
      });
    });
});
