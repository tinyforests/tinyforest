// evc-fetch.js

// — Curated plants data for all discussed EVCs —
const curatedPlants = {
  // Coast Banksia Woodland (EVC 2)
  "2": {
    description:
      "Coast Banksia Woodland grows on coastal dunes and sandy flats, where Banksia integrifolia forms a patchy canopy over native grasses, salt-tolerant herbs, and occasional eucalypts. Found along Victoria’s southern coastlines, this EVC is shaped by salt-laden winds, sandy soils, and low nutrient levels. Once widespread, it is now heavily fragmented due to coastal development and weed invasion.",
    recommendations: [
      {
        layer:
          "Canopy Layer (tall, mature trees providing shade, temperature regulation, and habitat)",
        plants: [
          "Banksia integrifolia (Coast Banksia)",
          "Eucalyptus botryoides (Bangalay)"
        ]
      },
      {
        layer:
          "Sub-Canopy Layer (shorter trees beneath the canopy, enhancing structural diversity)",
        plants: [
          "Allocasuarina littoralis (Black Sheoak)",
          "Acacia longifolia (Coastal Wattle)"
        ]
      },
      {
        layer:
          "Shrub Layer (woody shrubs offering shelter and food for wildlife)",
        plants: [
          "Leptospermum laevigatum (Coast Tea-tree)",
          "Olearia axillaris (Coast Daisy-bush)",
          "Ozothamnus diosmifolius (Rice Flower)",
          "Hibbertia scandens (Snake Vine)"
        ]
      },
      {
        layer:
          "Herb Layer (ground-level herbs, grasses and sedges stabilising soils and retaining moisture)",
        plants: [
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Dianella caerulea (Blue Flax-lily)",
          "Austrostipa nodosa (Kneed Spear-grass)",
          "Gahnia grandis (Cutty-grass)"
        ]
      }
    ]
  },

  // Grassy Woodland (EVC 175)
  "175": {
    description:
      "Grassy Woodland is a lightly treed, herb-rich ecosystem that once covered vast areas of Victoria’s volcanic plains. Scattered Grey Box and Yellow Gum rise above a diverse understorey of kangaroo grass, wildflowers, and lilies. Adapted to cultural fire and seasonal drought, this community supports high biodiversity, including pollinators and woodland birds. Today, it is highly threatened, with only small patches remaining.",
    recommendations: [
      {
        layer:
          "Canopy Layer (topmost layer: tallest, mature trees providing shade, regulating temperature, and supporting wildlife)",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Allocasuarina verticillata (Drooping Sheoak)"
        ]
      },
      {
        layer:
          "Sub-Canopy Layer (shorter trees beneath the canopy contributing to forest structure and biodiversity)",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Allocasuarina littoralis (Black Sheoak)",
          "Exocarpos cupressiformis (Cherry Ballart)"
        ]
      },
      {
        layer:
          "Shrub Layer (various shrubs offering habitat and food for smaller animals and insects)",
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
        layer:
          "Herb Layer (ground-level herbs, grasses and ferns stabilising soils and retaining moisture)",
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

  // Stream Bank Shrubland (EVC 851)
  "851": {
    description:
      "Stream Bank Shrubland grows along rocky creeks and flood-prone gullies, where Sweet Bursaria, Tree Violet, and Silver Wattle form dense shrub layers. This narrow EVC hugs seasonal waterways and supports sedges, rushes, and herbs adapted to disturbance. A vital habitat corridor, it is now rare due to stream modification, grazing, and weed invasion.",
    recommendations: [
      {
        layer:
          "Canopy Layer (tall overstorey providing structure and shade)",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer:
          "Shrub Layer (moisture-loving shrubs along stream banks)",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)",
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Hymenanthera dentata (Tree Violet)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Callistemon sieberi (River Bottlebrush)"
        ]
      },
      {
        layer:
          "Herb Layer (sedges, rushes and herbs stabilising banks)",
        plants: [
          "Persicaria decipiens (Slender Knotweed)",
          "Epilobium billardierianum (Variable Willow-herb)",
          "Acaena novae-zelandiae (Bidgee-widgee)",
          "Hydrocotyle verticillata (Shield Pennywort)",
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Crassula helmsii (Swamp Crassula)",
          "Dichondra repens (Kidney-weed)",
          "Apium prostratum ssp. prostratum (Sea Celery)"
        ]
      },
      {
        layer:
          "Graminoid Layer (sedges, grasses and reeds)",
        plants: [
          "Poa labillardierei (Common Tussock-grass)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Phragmites australis (Common Reed)",
          "Schoenoplectus tabernaemontani (River Club-sedge)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Ficinia nodosa (Knobby Club-sedge)"
        ]
      },
      {
        layer:
          "Climber Layer (scramblers and climbers)",
        plants: [
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // Plains Grassy Woodland (EVC 55_61)
  "55_61": {
    description:
      "Plains Grassy Woodland is a grassy, open woodland dominated by River Red Gum and Yellow Gum, with a highly diverse ground layer of native grasses, lilies, and wildflowers. Found on basalt clays, it was maintained through Aboriginal fire practices and once stretched across western Victoria. Now critically endangered, it survives in small fragments and restoration sites.",
    recommendations: [
      {
        layer:
          "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red Gum)"
        ]
      },
      {
        layer:
          "Shrub Layer",
        plants: [
          "Acacia pycnantha (Golden Wattle)",
          "Acacia paradoxa (Hedge Wattle)"
        ]
      },
      {
        layer:
          "Sub-shrub & Prostrate Layer",
        plants: [
          "Pimelea humilis (Common Rice-flower)",
          "Astroloma humifusum (Cranberry Heath)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer:
          "Herb Layer",
        plants: [
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Acaena echinata (Sheep's Burr)"
        ]
      },
      {
        layer:
          "Graminoid Layer",
        plants: [
          "Austrostipa mollis (Supple Spear-grass)",
          "Austrostipa bigeniculata (Kneed Spear-grass)",
          "Themeda triandra (Kangaroo Grass)",
          "Elymus scaber var. scaber (Common Wheat-grass)",
          "Microlaena stipoides var. stipoides (Weeping Grass)"
        ]
      }
    ]
  },

  // Swamp Scrub (EVC 53)
  "53": {
    description:
      "Swamp Scrub is a dense, moisture-loving vegetation type dominated by tea-tree, paperbark, and bottlebrush, often fringing wetlands and swamps. Found across the Gippsland Plain, it supports frogs, birds, and insect life while playing a key role in water filtration and erosion control. Today it is endangered, with most remnants restricted to isolated, low-lying sites.",
    recommendations: [
      {
        layer:
          "Canopy Layer",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Melaleuca ericifolia (Swamp Paperbark)"
        ]
      },
      {
        layer:
          "Shrub Layer",
        plants: [
          "Coprosma quadrifida (Prickly Currant-bush)",
          "Leptospermum continentale (Prickly Tea-tree)"
        ]
      },
      {
        layer:
          "Herb Layer",
        plants: [
          "Lycopus australis (Australian Gipsywort)",
          "Lythrum salicaria (Purple Loosestrife)",
          "Persicaria praetermissa (Spotted Knotweed)"
        ]
      },
      {
        layer:
          "Graminoid & Fern Layer",
        plants: [
          "Juncus procerus (Tall Rush)",
          "Poa labillardierei (Common Tussock-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Blechnum cartilagineum (Gristle Fern)"
        ]
      }
    ]
  },

  // Floodplain Riparian Woodland (EVC 56)
  "56": {
    description:
      "Floodplain Riparian Woodland lines the broad river valleys of Gippsland, where River Red Gums rise above sedges, reeds, and water-loving herbs. Shaped by flood cycles, this EVC provides rich habitat for birds, gliders, and aquatic species. Most of it has been lost to agriculture and levee construction, and it is now endangered and highly fragmented.",
    recommendations: [
      {
        layer:
          "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)",
          "Eucalyptus tereticornis ssp. mediana (Gippsland Red Gum)",
          "Eucalyptus ovata (Swamp Gum)"
        ]
      },
      {
        layer:
          "Sub-Canopy & Shrub Layer",
        plants: [
          "Acacia implexa (Lightwood)",
          "Acacia melanoxylon (Blackwood)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Hymenanthera dentata (Tree Violet)"
        ]
      },
      {
        layer:
          "Herb Layer",
        plants: [
          "Urtica incisa (Scrub Nettle)",
          "Persicaria subsessilis (Hairy Knotweed)",
          "Senecio quadridentatus (Cottony Fireweed)",
          "Acaena novae-zelandiae (Bidgee-widgee)"
        ]
      },
      {
        layer:
          "Graminoid Layer",
        plants: [
          "Carex appressa (Tall Sedge)",
          "Poa labillardierei (Common Tussock-grass)",
          "Phragmites australis (Common Reed)",
          "Eleocharis acuta (Common Spike-sedge)"
        ]
      },
      {
        layer:
          "Climber Layer",
        plants: [
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // Riparian Woodland (EVC 641)
  "641": {
    description:
      "Riparian Woodland follows the creeks and rivers of the volcanic plains. It is characterised by tall River Red Gums, an understorey of sedges, and a mix of moisture-adapted shrubs and herbs. These woodlands are vital wildlife corridors and hold cultural significance along songlines and travel routes. They are now endangered due to urbanisation and waterway modification.",  
    recommendations: [
      {
        layer:
          "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer:
          "Shrub Layer",
        plants: [
          "Acacia melanoxylon (Blackwood)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Viminaria juncea (Golden Spray)"
        ]
      },
      {
        layer:
          "Herb Layer",
        plants: [
          "Wahlenbergia gracilis s.s. (Sprawling Bluebell)",
          "Mentha australis (River Mint)",
          "Acaena novae-zelandiae (Bidgee-widgee)"
        ]
      },
      {
        layer:
          "Graminoid Layer",
        plants: [
          "Poa labillardierei (Common Tussock-grass)",
          "Carex appressa (Tall Sedge)",
          "Rhodophytes (Common Reed)" // adjust as needed
        ]
      }
    ]
  },

  // Brackish Grassland (EVC 934)
  "934": {
    description:
      "Brackish Grassland is a low, salt-tolerant grassland found near estuaries, saline flats, and groundwater seeps. It includes glassworts, saltbushes, and halophytic herbs, with few or no trees. Though visually sparse, it supports rare species and migratory birds. Heavily impacted by drainage and grazing, it is now one of the most threatened ecosystems in Gippsland.",
    recommendations: [
      {
        layer:
          "Herb & Shrub Layer",
        plants: [
          "Senecio glomeratus (Annual Fireweed)",
          "Sarcocornia quinqueflora (Beaded Glasswort)",
          "Samolus repens (Creeping Brookweed)",
          "Sebaea albidiflora (White Sebaea)",
          "Calocephalus lacteus (Milky Beauty-heads)"
        ]
      },
      {
        layer:
          "Prostrate & Mat-forming Layer",
        plants: [
          "Selliera radicans (Shiny Swamp-mat)",
          "Utricularia tenella (Pink Bladderwort)"
        ]
      },
      {
        layer:
          "Graminoid Layer",
        plants: [
          "Gahnia filum (Chaffy Saw-sedge)",
          "Gahnia trifida (Coast Saw-sedge)",
          "Poa labillardierei (Common Tussock-grass)",
          "Poa poiformis (Blue Tussock-grass)"
        ]
      },
      {
        layer:
          "Climber & Forb Layer",
        plants: [
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  }
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // hidden legacy map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // address lookup
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // email gatekeeper
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("modal-plants").style.display = "block";
    const btn = e.target.querySelector("button");
    btn.textContent = "Plants Shown";
    btn.disabled = true;
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
  // populate text
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;
  document.getElementById("modal-evc-description").textContent =
    curatedPlants[code]?.description || "No description available.";

  // build & hide plant list
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  const info = curatedPlants[code];
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

  // in-modal map
  modalMap && modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // show modal
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
