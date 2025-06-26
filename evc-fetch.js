// Global variables
let map, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // handle address form
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    geocodeAndFetchEVC();
  });

  // close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // email button → show plants
  document.getElementById("email-submit").addEventListener("click", () => {
    displayPlants();
  });
});

function geocodeAndFetchEVC() {
  const address = document.getElementById("address-input").value;
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => r.json())
    .then(res => {
      if (!res.length) throw "Address not found";
      const lat = +res[0].lat, lon = +res[0].lon;
      openModal(lat, lon);
    })
    .catch(err => alert(err));
}

function openModal(lat, lon) {
  // show modal
  document.getElementById("evc-modal").style.display = "flex";

  // init modal map once
  if (!map) {
    map = L.map("modal-map").setView([lat, lon], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);
  } else {
    map.setView([lat, lon], 12);
    if (marker) map.removeLayer(marker);
  }
  marker = L.marker([lat, lon]).addTo(map);

  // fetch EVC data
  fetchEVCData(lat, lon);
}

function fetchEVCData(lat, lon) {
  const size = 0.02;
  const bbox = [lon - size, lat - size, lon + size, lat + size].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?
    service=WFS&version=1.0.0&request=GetFeature
    &typeName=open-data-platform:nv2005_evcbcs
    &bbox=${bbox},EPSG:4326
    &outputFormat=application/json`.replace(/\s+/g,"");

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features.length) throw "No EVC here";
      const pt = turf.point([lon, lat]);
      let feat = data.features.find(f =>
        f.geometry.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const p = feat.properties;
      showEVC(p.x_evcname, p.evc, p.evc_bcs_desc, p.bioregion);
    })
    .catch(err => {
      alert("Error retrieving EVC data.");
      console.error(err);
    });
}

function showEVC(name, code, status, region) {
  currentEvcCode = code;
  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;
  document.getElementById("modal-evc-description").textContent = "";
  document.getElementById("modal-plants").innerHTML = "";
}

function displayPlants() {
  // Replace with actual plant-list generation
  document.getElementById("modal-plants").innerHTML =
    `<div class="layer"><h3>Plants for EVC ${currentEvcCode}</h3>
      <ul><li>Sample Plant 1</li><li>Sample Plant 2</li></ul>
     </div>`;
}
