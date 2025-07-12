// evc-fetch.js

// — Curated plants data —
const curatedPlants = {
  // EVC 55 – Plains Grassy Woodland
  "55": {
    description:
      "Plains Grassy Woodland is an open, sunlit woodland once widespread across the heavy basalt clays of western Victoria. Scattered River Red Gums and Gippsland Red Gums form a broad canopy over a ground layer rich with kangaroo grass, native lilies, wildflowers, and seasonal herbs. This EVC thrives where seasonal waterlogging and cracking clays occur, shaped by Aboriginal fire practices and deep time. Today, less than 3% remains, making it one of the most threatened ecosystems yet vital for biodiversity and cultural continuity.",
    recommendations: [
      {
        layer: "Tree Canopy (20% cover)",
        plants: [
          "Eucalyptus tereticornis ssp. mediana (Gippsland Red-gum)",
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer: "Immature Canopy Tree (5% cover)",
        plants: []
      },
      {
        layer: "Understorey Tree / Large Shrub (5% cover)",
        plants: [
          "Allocasuarina littoralis (Black Sheoak)",
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Medium Shrub (10% cover)",
        plants: ["Kunzea ericoides (Burgan)"]
      },
      {
        layer: "Small Shrub (1% cover)",
        plants: ["Pimelea humilis (Common Rice-flower)"]
      },
      {
        layer: "Prostrate Shrub (1% cover)",
        plants: ["Bossiaea prostrata (Creeping Bossiaea)"]
      },
      {
        layer: "Medium Herb (20% cover)",
        plants: [
          "Hypericum gramineum (Small St John's Wort)",
          "Oxalis perennans (Grassland Wood-sorrel)"
        ]
      },
      {
        layer: "Small or Prostrate Herb (5% cover)",
        plants: [
          "Dichondra repens (Kidney-weed)",
          "Poranthera microphylla (Small Poranthera)"
        ]
      },
      {
        layer: "Large Tufted Graminoid (5% cover)",
        plants: ["Austrostipa rudis (Veined Spear-grass)"]
      },
      {
        layer: "Large Non-tufted Graminoid (10% cover)",
        plants: ["Gahnia radula (Thatch Saw-sedge)"]
      },
      {
        layer: "Medium–Small Tufted Graminoid (35% cover)",
        plants: [
          "Themeda triandra (Kangaroo Grass)",
          "Carex breviculmis (Common Grass-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Schoenus apogon (Common Bog-sedge)"
        ]
      },
      {
        layer: "Medium–Tiny Non-tufted Graminoid (10% cover)",
        plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"]
      },
      {
        layer: "Bryophytes/Lichens (10% cover)",
        plants: []
      }
    ]
  },

  // EVC 43 – Shrubby Foothill Forest
  "43": {
    description:
      "Shrubby Foothill Forest is a tall eucalypt forest that grows on upper slopes and ridges, typically featuring a canopy of Messmate and Broad-leaved Peppermint above a dense and diverse shrubby understorey of wattles, peas, and tea-trees. The ground layer includes ferns, lilies, and native grasses, forming a structurally rich habitat that supports birds, insects, and small mammals. It responds well to low-intensity fire and forms part of a mosaic with both dry and wet forest types across foothill landscapes.",
    recruitment: "Episodic/Fire (ideal fire interval ~30 years)",
    organicLitter: "40% cover",
    logs: "20 m per 0.1 ha",
    recommendations: [
      {
        layer: "Tree Canopy (40% cover)",
        plants: [
          "Eucalyptus obliqua (Messmate Stringybark)",
          "Eucalyptus radiata ssp. radiata (Narrow-leaf Peppermint)",
          "Eucalyptus dives (Broad-leaved Peppermint)",
          "Eucalyptus rubida (Candlebark)"
        ]
      },
      {
        layer: "Understorey Tree / Large Shrub (5% cover)",
        plants: ["Exocarpos cupressiformis (Cherry Ballart)"]
      },
      {
        layer: "Medium Shrub (20% cover)",
        plants: [
          "Epacris impressa (Common Heath)",
          "Acacia mucronata ssp. longifolia (Narrow-leaf Wattle)",
          "Acacia verticillata (Prickly Moses)",
          "Pultenaea gunnii (Golden Bush-pea)"
        ]
      },
      {
        layer: "Small Shrub (10% cover)",
        plants: [
          "Olearia erubescens (Moth Daisy-bush)",
          "Pultenaea muelleri var. reflexifolia (Mueller’s Bush-pea)",
          "Acacia aculeatissima (Thin-leaf Wattle)",
          "Dillwynia cinerascens s.l. (Grey Parrot-pea)"
        ]
      },
      {
        layer: "Prostrate Shrub (5% cover)",
        plants: [
          "Acrotriche serrulata (Honey-pots)",
          "Acrotriche prostrata (Trailing Ground-berry)"
        ]
      },
      {
        layer: "Medium Herb (15% cover)",
        plants: [
          "Gonocarpus tetragynus (Common Raspwort)",
          "Viola hederacea (Ivy-leaf Violet)",
          "Hydrocotyle hirta (Hairy Pennywort)"
        ]
      },
      {
        layer: "Large Tufted Graminoid (5% cover)",
        plants: [
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Gahnia sieberiana (Red-fruit Saw-sedge)"
        ]
      },
      {
        layer: "Large Non-tufted Graminoid (15% cover)",
        plants: ["Tetrarrhena juncea (Forest Wire-grass)"]
      },
      {
        layer: "Medium–Small Tufted Graminoid (20% cover)",
        plants: [
          "Poa sieberiana (Grey Tussock-grass)",
          "Joycea pallida (Silvertop Wallaby-grass)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Dianella tasmanica (Tasman Flax-lily)"
        ]
      },
      {
        layer: "Tiny/Non-tufted Graminoid (5% cover)",
        plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"]
      },
      {
        layer: "Ground Fern (10% cover)",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler/Climber (1% cover)",
        plants: ["Billardiera scandens (Common Apple-berry)"]
      }
    ]
  },

  // EVC 175 – Grassy Woodland
  "175": {
    description:
      "Grassy Woodland is a scattered open woodland found on gentle slopes and undulating plains, typically with a sparse canopy of Grey Box, Yellow Box, or Red Gum over a species-rich ground layer of grasses, lilies, and wildflowers. The shrub layer is usually sparse, giving way to a light-filled understorey dominated by Themeda triandra (Kangaroo Grass) and seasonal herbs. Once widespread across the Victorian Volcanic Plain, this community has been heavily cleared, with remnants now vital for supporting threatened woodland birds and grassland invertebrates.",
    recruitment: "Continuous",
    organicLitter: "20% cover",
    logs: "15 m per 0.1 ha",
    recommendations: [
      {
        layer: "Tree Canopy (15% cover)",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Allocasuarina verticillata (Drooping Sheoak)"
        ]
      },
      {
        layer: "Immature Canopy Tree (5% cover)",
        plants: []
      },
      {
        layer: "Understorey Tree / Large Shrub (10% cover)",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Allocasuarina littoralis (Black Sheoak)",
          "Exocarpos cupressiformis (Cherry Ballart)"
        ]
      },
      {
        layer: "Medium Shrub (15% cover)",
        plants: [
          "Leptospermum continentale (Prickly Tea-tree)",
          "Epacris impressa (Common Heath)",
          "Cassinia aculeata (Common Cassinia)",
          "Acacia paradoxa (Hedge Wattle)"
        ]
      },
      {
        layer: "Small Shrub (5% cover)",
        plants: [
          "Pimelea humilis (Common Rice-flower)",
          "Hibbertia riparia (Erect Guinea-flower)"
        ]
      },
      {
        layer: "Prostrate Shrub (1% cover)",
        plants: [
          "Bossiaea prostrata (Creeping Bossiaea)",
          "Astroloma humifusum (Cranberry Heath)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Large Herb (5% cover)",
        plants: ["Pterostylis longifolia s.l. (Tall Greenhood)"]
      },
      {
        layer: "Medium Herb (10% cover)",
        plants: [
          "Gonocarpus tetragynus (Common Raspwort)",
          "Drosera peltata ssp. auriculata (Tall Sundew)"
        ]
      },
      {
        layer: "Small or Prostrate Herb (5% cover)",
        plants: [
          "Dichondra repens (Kidney-weed)",
          "Opercularia varia (Variable Stinkweed)",
          "Drosera whittakeri ssp. aberrans (Scented Sundew)"
        ]
      },
      {
        layer: "Large Tufted Graminoid (10% cover)",
        plants: [
          "Deyeuxia quadriseta (Reed Bent-grass)",
          "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
          "Lomandra longifolia (Spiny-headed Mat-rush)"
        ]
      },
      {
        layer: "Large Non-tufted Graminoid (10% cover)",
        plants: ["Gahnia radula (Thatch Saw-sedge)"]
      },
      {
        layer: "Medium–Small Tufted Graminoid (20% cover)",
        plants: [
          "Lomandra filiformis (Wattle Mat-rush)",
          "Themeda triandra (Kangaroo Grass)",
          "Poa sieberiana (Grey Tussock-grass)",
          "Lepidosperma laterale (Variable Sword-sedge)"
        ]
      },
      {
        layer: "Medium–Tiny Non-tufted Graminoid (10% cover)",
        plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"]
      },
      {
        layer: "Ground Fern (5% cover)",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler or Climber (5% cover)",
        plants: [
          "Comesperma volubile (Love Creeper)",
          "Billardiera scandens (Common Apple-berry)"
        ]
      },
      {
        layer: "Bryophytes/Lichens (10% cover)",
        plants: []
      }
    ]
  }

  // …add further EVCs here…
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize hidden main map (legacy)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Address lookup
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // 3) Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // 4) Email gate: reveal plants on submit
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    const plantsDiv = document.getElementById("modal-plants");
    plantsDiv.style.display = "block";
    const btn = e.target.querySelector("button");
    btn.textContent = "Plants Shown";
    btn.disabled = true;
    // TODO: integrate with your backend or form service
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
      if (marker) map.removeLayer(marker);
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
          data.features.find(
            f =>
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
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent =
    status || "Not specified";
  document.getElementById("modal-evc-region").textContent =
    region || "Not specified";

  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info?.recommendations) {
    info.recommendations.forEach(sec => {
      const row = document.createElement("div");
      row.className = "layer";
      const h3 = document.createElement("h3");
      h3.textContent = sec.layer;
      row.appendChild(h3);
      const ul = document.createElement("ul");
      sec.plants.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        ul.appendChild(li);
      });
      row.appendChild(ul);
      plantsDiv.appendChild(row);
    });
    plantsDiv.style.display = "none"; // hidden until email gate
  }

  if (modalMap) modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  document.getElementById("evc-modal").style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
