// evc-fetch.js

// — Curated plants data (add your four-layer structure here) —
const curatedPlants = {
  "47": {
    description:
      "Valley Grassy Forest occurs under moderate rainfall regimes of 700–800 mm per annum on fertile, well-drained colluvial or alluvial soils on gently undulating lower slopes and valley floors. Open forest to 20 m tall that may carry a variety of eucalypts over a sparse shrub cover. In season, a rich array of herbs, lilies, grasses and sedges dominate the ground layer.",
    // re-categorized into 4 layers:
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Allocasuarina verticillata (Drooping Sheoak)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Allocasuarina littoralis (Black Sheoak)",
          "Exocarpos cupressiformis (Cherry Ballart)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Leptospermum continentale (Prickly Tea-tree)",
          "Epacris impressa (Common Heath)",
          "Cassinia aculeata (Common Cassinia)",
          "Acacia paradoxa (Hedge Wattle)",
          "Pimelea humilis (Common Rice-flower)",
          "Hibbertia riparia (Erect Guinea-flower)",
          "Bossiaea prostrata (Creeping Bossiaea)",
          "Astroloma humifusum (Cranberry Heath)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Pterostylis longifolia s.l. (Tall Greenhood)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Dichondra repens (Kidney-weed)",
          "Opercularia varia (Variable Stinkweed)",
          "Drosera whittakeri ssp. aberrans (Scented Sundew)",
          "Deyeuxia quadriseta (Reed Bent-grass)",
          "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Themeda triandra (Kangaroo Grass)",
          "Poa sieberiana (Grey Tussock-grass)",
          "Lepidosperma laterale (Variable Sword-sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Pteridium esculentum (Austral Bracken)",
          "Comesperma volubile (Love Creeper)",
          "Billardiera scandens (Common Apple-berry)"
        ]
      }
    ]
  },

  // …you can add more EVC codes here…
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize hidden main map (for legacy)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Hook up address form
  document.getElementById("address-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) {
      alert("Please enter an address.");
      return;
    }
    geocodeAddress(addr);
  });

  // 3) Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
});

// helper to turn a plant name into a URL-friendly slug
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function geocodeAddress(address) {
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Geocode failed (${res.status})`);
      return res.json();
    })
    .then((results) => {
      if (!results.length) throw new Error("Address not found.");
      const lat = +results[0].lat;
      const lon = +results[0].lon;
      map.setView([lat, lon], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch((err) => {
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
    .then((res) => res.text())
    .then((text) => {
      if (text.trim().startsWith("<")) {
        console.error("EVC WFS returned HTML:", text.slice(0, 200));
        throw new Error("Error retrieving EVC data. Please try again later.");
      }
      return JSON.parse(text);
    })
    .then((data) => {
      if (!data.features?.length) {
        throw new Error("No EVC data found for this location.");
      }
      const pt = turf.point([lon, lat]);
      const feat =
        data.features.find(
          (f) =>
            f.geometry?.type === "Polygon" &&
            turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
        ) || data.features[0];

      const p = feat.properties;
      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
    })
    .catch((err) => {
      console.error(err);
      alert(err.message);
    });
}

function displayModal(name, status, region, code, lat, lon) {
  // --- Populate text ---
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent =
    status || "Not specified";
  document.getElementById("modal-evc-region").textContent =
    region || "Not specified";

  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // --- Build plant list with Add buttons ---
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info?.recommendations) {
    info.recommendations.forEach((layerObj) => {
      const section = document.createElement("div");
      section.className = "layer";

      const h3 = document.createElement("h3");
      h3.textContent = layerObj.layer + ".";
      section.appendChild(h3);

      const ul = document.createElement("ul");
      layerObj.plants.forEach((p) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = p;
        li.appendChild(span);

        const btn = document.createElement("button");
        btn.className = "add-btn";
        btn.textContent = "Add to Forest";
        btn.dataset.plant = p;
        btn.dataset.layer = layerObj.layer;
        btn.addEventListener("click", () => {
          const forest = JSON.parse(localStorage.getItem("myForest") || "[]");
          forest.push({
            slug: slugify(p),
            label: p,
            layer: layerObj.layer
          });
          localStorage.setItem("myForest", JSON.stringify(forest));
          btn.textContent = "Added";
          btn.disabled = true;
        });

        li.appendChild(btn);
        ul.appendChild(li);
      });

      section.appendChild(ul);
      plantsDiv.appendChild(section);
    });
    plantsDiv.style.display = "block";
  } else {
    plantsDiv.style.display = "none";
  }

  // --- Initialize in-modal map ---
  if (modalMap) {
    modalMap.remove();
  }
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // --- Show modal and fix Leaflet sizing ---
  const modal = document.getElementById("evc-modal");
  modal.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
