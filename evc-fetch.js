let map, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // initialize map (hidden behind modal or placed later)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // search button
  document.getElementById("search-button")
    .addEventListener("click", searchEVC);

  // modal close
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

  // geocode
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const lat = +results[0].lat, lon = +results[0].lon;
      showOnMap(lat, lon);
      fetchEVCData(lat, lon);
    })
    .catch(err => alert(err.message));
}

function showOnMap(lat, lon) {
  map.setView([lat, lon], 12);
  if (marker) map.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(map);
}

function fetchEVCData(lat, lon) {
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
    .then(r => r.json())
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
      displayEVCInfo(
        p.x_evcname,
        p.evc,
        p.evc_bcs_desc,
        p.bioregion
      );
    })
    .catch(err => alert(err.message));
}

function displayEVCInfo(name, code, status, region) {
  document.getElementById("modal-evc-name").textContent   = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "Not specified";
  document.getElementById("modal-evc-region").textContent = region || "Not specified";
  document.getElementById("modal-evc-description").textContent =
    getDescription(code);

  fillPlantList(code);

  // show modal
  modal().style.display = "flex";
}

function getDescription(code) {
  const desc = {
    "175": "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
    "47": "Valley Grassy Forest occurs under moderate rainfall regimes of 700–800 mm per annum on fertile well-drained colluvial or alluvial soils on gently undulating lower slopes and valley floors. …",
    "FPW": "A tall eucalypt woodland found along riverbanks and floodplains. It features shrubs and a mix of wetland herbs and sedges in the ground layer. …"
    // add more as needed
  };
  return desc[code] || "Description not available.";
}

function fillPlantList(code) {
  const lists = {
    "175": [
      { layer: "Tree Canopy", plants: ["Eucalyptus tereticornis …"] },
      // etc…
    ],
    "47": [
      { layer: "Tree Canopy", plants: ["Eucalyptus radiata", "E. leucoxylon", "E. melliodora", "E. rubida"] },
      // etc…
    ],
    "FPW": [
      { layer: "Tree Canopy", plants: ["Eucalyptus camaldulensis", "E. tereticornis ssp. mediana", "E. ovata"] },
      // etc…
    ]
  };

  const container = document.getElementById("modal-plants");
  container.innerHTML = "";
  const recs = lists[code];
  if (!recs) {
    container.innerHTML = "<p>No plant list available.</p>";
    return;
  }

  recs.forEach(section => {
    const div = document.createElement("div");
    div.className = "layer";
    div.innerHTML = `<h3>${section.layer}</h3><ul>${section.plants.map(p=>`<li>${p}</li>`).join("")}</ul>`;
    container.appendChild(div);
  });
}
