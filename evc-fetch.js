// evc-fetch.js

let map, marker;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize Leaflet map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Submit handler
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) {
      alert("Please enter an address.");
      return;
    }
    geocodeAddress(addr);
  });

  // 3) Modal close
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
});

function geocodeAddress(address) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => {
      if (!r.ok) throw new Error(`Geocode failed (${r.status})`);
      return r.json();
    })
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
    .then(r => {
      if (!r.ok) throw new Error(`EVC request failed (${r.status})`);
      return r.json();
    })
    .then(data => {
      if (!data.features || !data.features.length) {
        throw new Error("No EVC data found for this location.");
      }
      const props = data.features[0].properties;
      showModal(
        props.x_evcname,
        props.evc_bcs_desc,
        props.bioregion
      );
    })
    .catch(err => {
      console.error(err);
      alert(err.message);
    });
}

function showModal(name, status, region) {
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "Not specified";
  document.getElementById("modal-evc-region").textContent = region || "Not specified";

  // Hide any old plant lists
  document.getElementById("modal-plants").innerHTML = "";

  // Finally, show the modal
  document.getElementById("evc-modal").style.display = "flex";
}
