// evc-fetch.js

// — Curated plants data (add all your EVC entries here) —
const curatedPlants = {
  // … your other EVCs (2,3,6,6_61,47,53,55_61,56,175,641,851,934…) …

  // EVC 8 – Wet Heathland
  "8": {
    description:
      "This EVC occupies poorly drained sandy soils and peaty flats. Dominated by swamp-loving heath species, sedges, and tea-trees, it supports diverse flora including orchids and carnivorous plants. Often waterlogged in winter and dry in summer.",
    recommendations: [
      {
        layer: "Shrub Layer (woody heath species)",
        plants: [
          "Melaleuca squarrosa (Scented Paperbark)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)"
        ]
      },
      {
        layer: "Herb Layer (forbs, orchids & sundews)",
        plants: [
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Acianthus spp. (Mosquito Orchid)",
          "Wahlenbergia gracilis (Sprawling Bluebell)",
          "Goodenia lanata (Trailing Goodenia)"
        ]
      },
      {
        layer: "Graminoid Layer (sedges & rushes)",
        plants: [
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Gymnoschoenus sphaerocephalus (Button Grass)",
          "Gahnia sieberiana (Red-fruit Saw-sedge)",
          "Lomandra longifolia (Spiny-headed Mat-rush)"
        ]
      },
      {
        layer: "Fern & Ground Layer",
        plants: [
          "Lindsaea linearis (Screw Fern)",
          "Pteridium esculentum (Austral Bracken)",
          "Lycopodium deuterodensum (Bushy Clubmoss)"
        ]
      }
    ]
  },

  // EVC 9 – Coastal Saltmarsh
  "9": {
    description:
      "Located in the intertidal zone, Coastal Saltmarsh is dominated by succulent herbs and salt-tolerant shrubs. It forms vital shorebird habitat and tidal filtration systems, but is highly sensitive to hydrological change.",
    recommendations: [
      {
        layer: "Shrub Layer (salt-tolerant shrubs)",
        plants: [
          "Sarcocornia quinqueflora (Beaded Glasswort)",
          "Suaeda australis (Austral Seablite)",
          "Tecticornia arbuscula (Shrubby Glasswort)"
        ]
      },
      {
        layer: "Herb Layer (succulent herbs)",
        plants: [
          "Atriplex prostrata ssp. prostrata (Spear Saltbush)",
          "Triglochin procerum (Water Ribbons)"
        ]
      },
      {
        layer: "Graminoid Layer (sedges & rushes)",
        plants: [
          "Juncus kraussii (Sea Rush)",
          "Phragmites australis (Common Reed)"
        ]
      },
      {
        layer: "Groundcover",
        plants: [
          "Salicornia blackii (Black Glasswort)",
          "Suaeda australis (Austral Seablite)"
        ]
      }
    ]
  }
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // Legacy map (hidden via CSS)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 1) Address lookup
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // 2) Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
    // reset plant-gate
    const plantsDiv = document.getElementById("modal-plants");
    plantsDiv.style.display = "none";
    const btn = document.querySelector("#gf-form button");
    btn.textContent = "Display plant list";
    btn.disabled = false;
  });

  // 3) Email gate: reveal plants on submit
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    const plantsDiv = document.getElementById("modal-plants");
    plantsDiv.style.display = "block";
    const btn = e.target.querySelector("button");
    btn.textContent = "Plants Shown";
    btn.disabled = true;
    // TODO: wire this into your backend or Google Form
  });
});

function geocodeAddress(address) {
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  )
    .then(r => {
      if (!r.ok) throw new Error(`Geocode failed (${r.status})`);
      return r.json();
    })
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const lat = +results[0].lat,
            lon = +results[0].lon;
      map.setView([lat, lon], 12);
      marker && map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch(err => alert(err.message));
}

function fetchEVCData(lat, lon) {
  const d = 0.02,
        bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`,
        url =
          "https://opendata.maps.vic.gov.au/geoserver/wfs" +
          "?service=WFS&version=1.0.0&request=GetFeature" +
          "&typeName=open-data-platform:nv2005_evcbcs" +
          `&bbox=${bbox},EPSG:4326` +
          "&outputFormat=application/json";

  fetch(url)
    .then(r => r.text())
    .then(txt => {
      if (txt.trim().startsWith("<"))
        throw new Error("EVC service error. Try again later.");
      return JSON.parse(txt);
    })
    .then(data => {
      if (!data.features?.length)
        throw new Error("No EVC data found for this location.");
      const pt = turf.point([lon, lat]),
            feat =
              data.features.find(f =>
                f.geometry.type === "Polygon" &&
                turf.booleanPointInPolygon(
                  pt,
                  turf.polygon(f.geometry.coordinates)
                )
              ) || data.features[0],
            p = feat.properties;

      displayModal(
        p.x_evcname,
        p.evc_bcs_desc,
        p.bioregion,
        p.evc,
        lat,
        lon
      );
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  // Header text
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

  // Description
  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // Build & hide plant list
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info?.recommendations) {
    info.recommendations.forEach(sec => {
      const wr = document.createElement("div");
      wr.className = "layer";
      wr.innerHTML =
        `<h3>${sec.layer}</h3>` +
        "<ul>" +
        sec.plants.map(p => `<li>${p}</li>`).join("") +
        "</ul>";
      plantsDiv.appendChild(wr);
    });
  }
  plantsDiv.style.display = "none";

  // In-modal map
  modalMap && modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // Show modal
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
