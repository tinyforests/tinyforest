// evc-fetch.js
let modalMap, marker, currentEvcCode, currentAddress;

// Updated Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5lI0vJONS4RiQfpquUP1PVbEWiIgt-IZXSD3HWIgkeemyxb2i4O5ugSRsgVX57dHW5g/exec";

document.addEventListener("DOMContentLoaded", () => {
  modalMap = L.map("modal-map", { zoomControl: false }).setView([-37.8136,144.9631],8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    currentAddress = addr;
    searchEVC(addr);
  });

  document.getElementById("email-submit").addEventListener("click", () => {
    const email = document.getElementById("email-input").value.trim();
    if (!email) return alert("Please enter an email address.");
    recordSubmission(currentAddress, currentEvcCode, email);
    loadPlantList();
  });

  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
});

function searchEVC(address) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const { lat, lon } = results[0];
      fetchEVCData(+lat, +lon);
    })
    .catch(err => {
      console.error("Geocode error:", err);
      alert(err.message);
    });
}

function fetchEVCData(lat, lon) {
  const delta = 0.02;
  const bbox = [lon - delta, lat - delta, lon + delta, lat + delta].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features?.length) throw new Error("No EVC data.");
      const pt = turf.point([lon, lat]);
      const f = data.features.find(f =>
        f.geometry?.type==="Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];
      const { x_evcname, evc_bcs_desc, bioregion, evc } = f.properties;
      currentEvcCode = evc || "";
      showModal(x_evcname, evc_bcs_desc, bioregion, evc, lat, lon);
    })
    .catch(err => {
      console.error("EVC fetch error:", err);
      alert(err.message);
    });
}

function showModal(name, status, bioregion, code, lat, lon) {
  const displayName = name.endsWith('.') ? name : name + '.';
  document.getElementById("modal-evc-name").textContent = displayName;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = bioregion;
  document.getElementById("modal-plants").innerHTML = "";
  document.getElementById("email-input").value = "";

  fetch("curated-plants.json")
    .then(r => r.json())
    .then(json => {
      document.getElementById("modal-evc-description").textContent = json[code]?.description || "";
    })
    .catch(console.error);

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
        div.innerHTML = `<h3>${layer.layer}</h3><ul>${layer.plants.map(p=>`<li>${p}</li>`).join("")}</ul>`;
        container.appendChild(div);
      });
    })
    .catch(console.error);
}

function recordSubmission(address, evcCode, email) {
  fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address, evcCode, email })
  })
  .then(r => r.json())
  .then(json => { if (!json.success) console.error("Submit error", json.error); })
  .catch(console.error);
}
