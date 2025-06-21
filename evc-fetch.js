let currentEvcCode;
let modalMap;     // Leaflet map instance inside the modal
let modalMarker;  // marker in the modal map

document.addEventListener("DOMContentLoaded", () => {
  // Wire up Find My Garden
  document.getElementById("search-button")
    .addEventListener("click", searchEVC);

  // Modal close handlers
  document.getElementById("modal-close")
    .addEventListener("click", () => modal().style.display = "none");
  document.getElementById("evc-modal")
    .addEventListener("click", e => {
      if (e.target.id === "evc-modal") modal().style.display = "none";
    });
});

function modal() {
  return document.getElementById("evc-modal");
}

function searchEVC() {
  const addr = document.getElementById("address-input").value.trim();
  if (!addr) {
    alert("Please enter an address.");
    return;
  }

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const lat = +results[0].lat, lon = +results[0].lon;
      fetchEVCData(lat, lon, addr);
    })
    .catch(err => {
      alert(err.message);
    });
}

function fetchEVCData(lat, lon, address) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url = [
    "https://opendata.maps.vic.gov.au/geoserver/wfs",
    "?service=WFS",
    "&version=1.0.0",
    "&request=GetFeature",
    "&typeName=open-data-platform:nv2005_evcbcs",
    `&bbox=${bbox},EPSG:4326`,
    "&outputFormat=application/json"
  ].join("");

  fetch(url)
    .then(r => {
      if (!r.ok) throw new Error(`WFS error ${r.status}`);
      return r.json();
    })
    .then(data => {
      if (!data.features || !data.features.length) {
        throw new Error("No EVC data found.");
      }
      const pt = turf.point([lon, lat]);
      let feat = data.features.find(f =>
        f.geometry.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const p = feat.properties;
      displayEVCInfo(p.x_evcname, p.evc, p.evc_bcs_desc, p.bioregion, lat, lon);
    })
    .catch(err => {
      alert(err.message);
    });
}

function displayEVCInfo(name, code, status, region, lat, lon) {
  currentEvcCode = code;
  document.getElementById("modal-evc-name").textContent   = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "Not specified";
  document.getElementById("modal-evc-region").textContent = region || "Not specified";
  document.getElementById("modal-evc-description").textContent =
    getDescription(code);

  fillPlantList(code);

  // Initialize (or reset) the modal map
  if (modalMap) {
    modalMap.remove();  // clear previous instance
  }
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  if (modalMarker) {
    modalMap.removeLayer(modalMarker);
  }
  modalMarker = L.marker([lat, lon]).addTo(modalMap);

  // Show the modal
  modal().style.display = "flex";
}

function getDescription(code) {
  const desc = {
    "175": "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
    "47": "Valley Grassy Forest occurs under moderate rainfall regimes of 700–800 mm per annum on fertile, well-drained colluvial or alluvial soils on gently undulating lower slopes and valley floors. Open forest to 20 m tall that may carry a variety of eucalypts, usually species which prefer more moist or more fertile conditions, over a sparse shrub cover. …",
    "FPW": "A tall eucalypt woodland found along riverbanks and floodplains. It features shrubs and a mix of wetland herbs and sedges in the ground layer. Grows in fertile soils that flood from time to time, in low-lying areas with modest rainfall."
    // add other codes & descriptions here
  };
  return desc[code] || "No description available for this EVC.";
}

function fillPlantList(code) {
  const lists = {
    "175": [
      { layer: "Understorey Tree / Large Shrub", plants: ["Acacia mearnsii", "Allocasuarina littoralis", "Exocarpos cupressiformis"] },
      // …etc…
    ],
    "47": [
      { layer: "Tree Canopy", plants: ["Eucalyptus radiata", "E. leucoxylon", "E. melliodora", "E. rubida"] },
      // …etc…
    ],
    "FPW": [
      { layer: "Tree Canopy", plants: ["Eucalyptus camaldulensis", "E. tereticornis ssp. mediana", "E. ovata"] },
      // …etc…
    ]
  };

  const container = document.getElementById("modal-plants");
  container.innerHTML = "";
  const recs = lists[code];
  if (!recs) {
    container.innerHTML = "<p>No curated plant list available.</p>";
    return;
  }

  recs.forEach(section => {
    const div = document.createElement("div");
    div.className = "layer";
    div.innerHTML = `
      <h3>${section.layer}</h3>
      <ul>
        ${section.plants.map(p => `<li>${p}</li>`).join("")}
      </ul>`;
    container.appendChild(div);
  });
}
