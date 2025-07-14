// evc-fetch.js

// — Curated plants data for each EVC code (sorted ascending) —
const curatedPlants = {
  // Valley Grassy Forest (EVC 47)
  "47": {
    description:
      "Valley Grassy Forest is a species-rich open forest that occurs on lower slopes, valleys, and gentle rises, where soils are fertile and rainfall moderate. It typically features a tall but scattered canopy of Candlebark, Swamp Gum, or Messmate, over a diverse ground layer of tussock grasses, lilies, orchids, and herbs. Shrubs are generally sparse, allowing for a light-filled understory that bursts into colour in spring. Once common across central and eastern Victoria, this forest type is now vulnerable due to agriculture, weed pressure, and soil disturbance.",
    recommendations: [
      {
        layer: "Canopy Layer (dominant eucalypts)",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Eucalyptus leucoxylon (Yellow Gum)",
          "Eucalyptus melliodora (Yellow Box)",
          "Eucalyptus rubida (Candlebark)"
        ]
      },
      {
        layer: "Sub-Canopy & Shrub Layer",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Myoporum sp. (Sticky Boobialla)",
          "Acacia pycnantha (Golden Wattle)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)"
        ]
      },
      {
        layer: "Herb & Graminoid Layer",
        plants: [
          "Veronica gracilis (Slender Speedwell)",
          "Poranthera microphylla (Small Poranthera)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Austrostipa rudis (Veined Spear-grass)",
          "Austrostipa mollis (Supple Spear-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Themeda triandra (Kangaroo Grass)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Microlaena stipoides var. stipoides (Weeping Grass)"
        ]
      }
    ]
  },

  // Swamp Scrub (EVC 53)
  "53": {
    description:
      "Swamp Scrub is a dense, wetland-edge vegetation community found across the low-lying floodplains, soaks, and swamp margins of the Gippsland Plain. It’s dominated by thickets of woolly tea-tree, swamp paperbark, and coastal bottlebrush, often growing around permanent or seasonal wetlands. Beneath the tangled canopy, the ground is cool and shaded, supporting sedges, mosses, and ferns adapted to waterlogged soils. These scrubs play a vital role in water purification, erosion control, and wildlife habitat. Once common across Gippsland, Swamp Scrub is now classified as endangered, with most remnants surviving in small, fragmented pockets near creeks, estuaries, and floodplain depressions.",
    recommendations: [
      {
        layer: "Canopy Layer (tea-trees & paperbarks)",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Melaleuca ericifolia (Swamp Paperbark)",
          "Callistemon sieberi (River Bottlebrush)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Coprosma quadrifida (Prickly Currant-bush)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)"
        ]
      },
      {
        layer: "Herb & Graminoid Layer",
        plants: [
          "Lycopus australis (Australian Gipsywort)",
          "Persicaria praetermissa (Spotted Knotweed)",
          "Hydrocotyle pterocarpa (Wing Pennywort)",
          "Juncus procerus (Tall Rush)",
          "Poa labillardierei (Common Tussock-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Phragmites australis (Common Reed)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Eleocharis acuta (Common Spike-sedge)",
          "Blechnum cartilagineum (Gristle Fern)"
        ]
      }
    ]
  },

  // Plains Grassy Woodland (EVC 55)
  "55": {
    description:
      "A scattered woodland on fertile plains, typically with River Red Gum, Yellow Box, or Grey Box above a grassy and herb-rich ground layer. Often lacks a dense shrub layer, allowing high light penetration that supports a wide variety of native wildflowers.",
    recommendations: [
      {
        layer: "Canopy Layer (tall trees)",
        plants: [
          "Eucalyptus tereticornis ssp. mediana (Gippsland Red-gum)",
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer: "Sub-Canopy & Shrub Layer",
        plants: [
          "Allocasuarina littoralis (Black Sheoak)",
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)",
          "Kunzea ericoides (Burgan)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Pimelea humilis (Common Rice-flower)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Hypericum gramineum (Small St John’s Wort)",
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Dichondra repens (Kidney-weed)",
          "Poranthera microphylla (Small Poranthera)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Austrostipa rudis (Veined Spear-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Themeda triandra (Kangaroo Grass)",
          "Carex breviculmis (Common Grass-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Schoenus apogon (Common Bog-sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)"
        ]
      }
    ]
  },

  // Floodplain Riparian Woodland (EVC 56)
  "56": {
    description:
      "Floodplain Riparian Woodland occurs on the seasonally flooded river flats and lower terraces of large watercourses, often forming a transition between wetland and drier woodland types. It is typically dominated by River Red Gum (Eucalyptus camaldulensis) with a sparse to moderate shrub layer of Blackwood, River Bottlebrush, or Sweet Bursaria, and a diverse understorey of grasses, sedges, and herbs. These woodlands are crucial for bank stability, flood mitigation, and as faunal corridors, but have been heavily impacted by river regulation, weed invasion, and grazing.",
    recommendations: [
      {
        layer: "Canopy Layer (river red-gums)",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)",
          "Eucalyptus tereticornis ssp. mediana (Gippsland Red Gum)",
          "Eucalyptus ovata (Swamp Gum)"
        ]
      },
      {
        layer: "Sub-Canopy & Shrub Layer",
        plants: [
          "Acacia implexa (Lightwood)",
          "Acacia melanoxylon (Blackwood)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)"
        ]
      },
      {
        layer: "Herb & Graminoid Layer",
        plants: [
          "Urtica incisa (Scrub Nettle)",
          "Persicaria subsessilis (Hairy Knotweed)",
          "Senecio quadridentatus (Cottony Fireweed)",
          "Carex appressa (Tall Sedge)",
          "Poa labillardierei (Common Tussock-grass)",
          "Phragmites australis (Common Reed)",
          "Juncus amabilis (Hollow Rush)",
          "Cyperus spp. (Flat-sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Eleocharis acuta (Common Spike-sedge)"
        ]
      }
    ]
  },

  // Grassy Woodland (EVC 175)
  "175": {
    description:
      "Grassy Woodland is a scattered open woodland found on gentle slopes and undulating plains, typically with a sparse canopy of Grey Box, Yellow Box, or Red Gum over a species-rich ground layer of grasses, lilies, and wildflowers. The shrub layer is usually sparse, giving way to a light-filled understorey dominated by Themeda triandra (Kangaroo Grass) and seasonal herbs. Once widespread across the Victorian Volcanic Plain, this community has been heavily cleared, with remnants now vital for supporting threatened woodland birds and grassland invertebrates.",
    recommendations: [
      {
        layer: "Canopy Layer (tall eucalypts providing shade and structure)",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Allocasuarina verticillata (Drooping Sheoak)"
        ]
      },
      {
        layer: "Sub-Canopy & Shrub Layer",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Allocasuarina littoralis (Black Sheoak)",
          "Exocarpos cupressiformis (Cherry Ballart)"
        ]
      },
      {
        layer: "Shrub Layer (habitat shrubs and seasonal food)",
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
        layer: "Herb & Graminoid Layer",
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

  // Brackish Grassland (EVC 934)
  "934": {
    description:
      "Brackish Grassland is a salt-tolerant grassy ecosystem found in low-lying areas of the Gippsland Plain, where saline groundwater or estuarine flooding influences the soil. These open, wind-exposed grasslands are dominated by saltbushes, low sedges, and halophytic herbs, with few or no trees. Though sparse in appearance, this EVC supports high biodiversity, including rare orchids, seasonal wetland species, and migratory bird habitat. Brackish Grassland is highly threatened, with much of its extent cleared, drained, or grazed.",
    recommendations: [
      {
        layer: "Shrub & Succulent Layer",
        plants: [
          "Sarcocornia quinqueflora (Beaded Glasswort)",
          "Samolus repens (Creeping Brookweed)",
          "Sebaea albidiflora (White Sebaea)",
          "Calocephalus lacteus (Milky Beauty-heads)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Senecio glomeratus (Annual Fireweed)",
          "Selliera radicans (Shiny Swamp-mat)",
          "Utricularia tenella (Pink Bladderwort)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Gahnia filum (Chaffy Saw-sedge)",
          "Gahnia trifida (Coast Saw-sedge)",
          "Poa labillardierei (Common Tussock-grass)",
          "Poa poiformis (Blue Tussock-grass)",
          "Schoenus apogon (Common Bog-sedge)",
          "Austrodanthonia geniculata (Kneed Wallaby-grass)",
          "Distichlis distichophylla (Australian Salt-grass)"
        ]
      }
    ]
  }
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // Legacy main map (hidden by CSS)
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
  });

  // 3) Email gate: reveal plants on submit
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    const plantsDiv = document.getElementById("modal-plants");
    plantsDiv.style.display = "block";
    const btn = e.target.querySelector("button");
    btn.textContent = "Plants Shown";
    btn.disabled = true;
    // TODO: hook into backend/Google Form later
  });
});

function geocodeAddress(address) {
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Geocode failed (${res.status})`);
      return res.json();
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
  const d    = 0.02,
        bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`,
        url  =
          "https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature" +
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
      const pt   = turf.point([lon, lat]),
            feat = data.features.find(
              f =>
                f.geometry.type === "Polygon" &&
                turf.booleanPointInPolygon(
                  pt,
                  turf.polygon(f.geometry.coordinates)
                )
            ) || data.features[0],
            p    = feat.properties;
      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  // Populate header
  document.getElementById("modal-evc-name").textContent   = name || "Unknown";
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
  if (modalMap) modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // Show modal & fix map sizing
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
