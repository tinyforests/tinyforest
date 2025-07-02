// evc-fetch.js

// — Curated plants data (add your EVC entries here) —
const curatedPlants = {
  // Coast Banksia Woodland (EVC 2)
  "2": {
    description:
      "Coast Banksia Woodland grows on sandy soils behind coastal dunes, dominated by Banksia integrifolia with a patchy eucalypt canopy. The understorey includes grasses, climbers, and salt-tolerant shrubs, adapted to wind, salt, and low nutrients. These woodlands once extended across the Mornington Peninsula and Port Phillip coast but are now reduced to fragmented reserves.",
    recommendations: [
      { layer: "Tree Canopy (15%)", plants: ["Banksia integrifolia (Coast Banksia)"] },
      { layer: "Immature Canopy Tree (5%)", plants: [] },
      {
        layer: "Medium Shrub (MS, 40%)",
        plants: [
          "Leucopogon parviflorus (Coast Beard-heath)",
          "Rhagodia candolleana ssp. candolleana (Seaberry Saltbush)",
          "Leptospermum laevigatum (Coast Tea-tree)"
        ]
      },
      { layer: "Small Shrub (SS, 1%)", plants: [] },
      {
        layer: "Large Herb (LH, 1%)",
        plants: ["Senecio minimus (Shrubby Fireweed)", "Haloragis brownii (Swamp Raspwort)"]
      },
      {
        layer: "Medium Herb (MH, 15%)",
        plants: [
          "Sambucus gaudichaudiana (White Elderberry)",
          "Viola hederacea (Ivy-leaf Violet)",
          "Lobelia anceps (Angled Lobelia)",
          "Sarcocornia quinqueflora (Beaded Glasswort)"
        ]
      },
      {
        layer: "Small/Prostrate Herb (SH, 10%)",
        plants: ["Hydrocotyle sibthorpioides (Shining Pennywort)", "Dichondra repens (Kidney-weed)"]
      },
      {
        layer: "Large Tufted Graminoid (LTG, 10%)",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler/Climber (SC, 10%)",
        plants: [
          "Galium australe (Tangled Bedstraw)",
          "Clematis microphylla (Small-leaved Clematis)"
        ]
      }
    ]
  },

  // Damp Sands Herb-rich Woodland (EVC 3)
  "3": {
    description:
      "Found on deep, well-drained sandy soils, this woodland supports a canopy of Messmate or Swamp Gum over a rich ground layer of grasses, orchids, and forbs. It thrives in moist gullies and sheltered slopes with high plant diversity and seasonal colour, and is sensitive to grazing and fire regime changes.",
    recommendations: [
      { layer: "Tree Canopy (15%)", plants: ["Eucalyptus baxteri s.s. (Brown Stringybark)"] },
      { layer: "Immature Canopy Tree (5%)", plants: [] },
      {
        layer: "Understorey Tree / Large Shrub (T, 15%)",
        plants: [
          "Acacia melanoxylon (Blackwood)",
          "Exocarpos cupressiformis (Cherry Ballart)",
          "Acacia mearnsii (Black Wattle)"
        ]
      },
      {
        layer: "Medium Shrub (MS, 15%)",
        plants: [
          "Banksia marginata (Silver Banksia)",
          "Melaleuca squarrosa (Scented Paperbark)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Acacia verticillata (Prickly Moses)"
        ]
      },
      {
        layer: "Small Shrub (SS, 5%)",
        plants: [
          "Hibbertia riparia (Erect Guinea-flower)",
          "Hibbertia fasciculata var. prostrata (Bundled Guinea-flower)",
          "Amperea xiphoclada var. xiphoclada (Broom Spurge)"
        ]
      },
      {
        layer: "Prostrate Shrub (PS, 5%)",
        plants: [
          "Boronia nana var. nana (Dwarf Boronia)",
          "Xanthosia pusilla spp. agg. (Heath Xanthosia)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Large Herb (LH, 5%)",
        plants: ["Senecio tenuiflorus (Slender Fireweed)", "Wahlenbergia gracilis s.s. (Sprawling Bluebell)"]
      },
      {
        layer: "Medium Herb (MH, 25%)",
        plants: [
          "Veronica gracilis (Slender Speedwell)",
          "Euchiton collinus s.s. (Creeping Cudweed)",
          "Goodenia geniculata (Bent Goodenia)",
          "Lagenophora stipitata (Common Bottle-daisy)"
        ]
      },
      {
        layer: "Small/Prostrate Herb (SH, 5%)",
        plants: [
          "Nertera granadensis (Matted Nertera)",
          "Opercularia varia (Variable Stinkweed)",
          "Hydrocotyle laxiflora (Stinking Pennywort)",
          "Kennedia prostrata (Running Postman)"
        ]
      },
      {
        layer: "Large Tufted Graminoid (LTG, 5%)",
        plants: [
          "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
          "Deyeuxia quadriseta (Reed Bent-grass)"
        ]
      },
      {
        layer: "Large Non-tufted Graminoid (LNG, 5%)",
        plants: ["Gahnia radula (Thatch Saw-sedge)"]
      },
      {
        layer: "Medium–Small Tufted Graminoid (MTG, 15%)",
        plants: [
          "Lomandra nana (Dwarf Mat-rush)",
          "Austrodanthonia setacea var. setacea (Bristly Wallaby-grass)",
          "Dianella revoluta s.s. (Black-anther Flax-lily)",
          "Poa sieberiana var. sieberiana (Grey Tussock-grass)"
        ]
      },
      {
        layer: "Medium–Tiny Non-tufted Graminoid (MNG, 10%)",
        plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"]
      },
      {
        layer: "Ground Fern (GF, 10%)",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler/Climber (SC, 1%)",
        plants: ["Billardiera scandens var. scandens (Common Apple-berry)"]
      }
    ]
  },

  // Sand Heathland (EVC 6)
  "6": {
    description:
      "A low, open heath community on deep siliceous sands, this EVC features heath shrubs, sedges, and heathy wildflowers like Epacris, Boronia, and Grevillea. It is nutrient-poor, fire-prone, and rich in insect life, especially native bees and butterflies.",
    recommendations: [
      { layer: "Tree Canopy (10%)", plants: ["Eucalyptus obliqua (Messmate Stringybark)"] },
      {
        layer: "Medium Shrub (MS, 30%)",
        plants: [
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)",
          "Leptospermum myrsinoides (Heath Tea-tree)",
          "Leptospermum continentale (Prickly Tea-tree)"
        ]
      },
      {
        layer: "Small Shrub (SS, 20%)",
        plants: [
          "Platylobium obtusangulum (Common Flat-pea)",
          "Isopogon ceratophyllus (Horny Cone-bush)",
          "Pimelea humilis (Common Rice-flower)",
          "Tetratheca ciliata (Pink-bells)"
        ]
      },
      {
        layer: "Prostrate Shrub (PS, 5%)",
        plants: [
          "Acrotriche serrulata (Honey-pots)",
          "Gompholobium ecostatum (Dwarf Wedge-pea)",
          "Astroloma humifusum (Cranberry Heath)"
        ]
      },
      {
        layer: "Medium Herb (MH, 5%)",
        plants: [
          "Goodenia geniculata (Bent Goodenia)",
          "Drosera peltata ssp. auriculata (Tall Sundew)"
        ]
      },
      {
        layer: "Small/Prostrate Herb (SH, 5%)",
        plants: ["Viola cleistogamoides (Hidden Violet)"]
      },
      {
        layer: "Large Tufted Graminoid (LTG, 10%)",
        plants: [
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Austrostipa mollis (Supple Spear-grass)"
        ]
      },
      {
        layer: "Large Non-tufted Graminoid (LNG, 5%)",
        plants: ["Gahnia radula (Thatch Saw-sedge)"]
      },
      {
        layer: "Medium–Small Tufted Graminoid (MTG, 15%)",
        plants: [
          "Lomandra filiformis (Wattle Mat-rush)",
          "Schoenus apogon (Common Bog-sedge)",
          "Lepidosperma canescens (Hoary Rapier-sedge)",
          "Austrodanthonia setacea (Bristly Wallaby-grass)"
        ]
      },
      {
        layer: "Medium–Tiny Non-tufted Graminoid (MNG, 1%)",
        plants: ["Hypolaena fastigiata (Tassel Rope-rush)"]
      },
      {
        layer: "Ground Fern (GF, 1%)",
        plants: ["Lindsaea linearis (Screw Fern)"]
      },
      {
        layer: "Scrambler/Climber (SC, 5%)",
        plants: [
          "Cassytha pubescens s.s. (Downy Dodder-laurel)",
          "Cassytha glabella (Slender Dodder-laurel)"
        ]
      }
    ]
  },

  // Treed Sand Heathland (EVC 6_61)
  "6_61": {
    description:
      "A variant of Sand Heathland where scattered eucalypts emerge over typical heath species. Trees like Messmate, Brown Stringybark, or Swamp Gum dot the landscape. It bridges forest and heathland habitats, often occurring in transitional zones or dune swales.",
    recommendations: [
      { layer: "Tree Canopy (10%)", plants: ["Eucalyptus obliqua (Messmate Stringybark)"] },
      {
        layer: "Medium Shrub (MS, 30%)",
        plants: [
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Leptospermum myrsinoides (Heath Tea-tree)"
        ]
      },
      {
        layer: "Small Shrub (SS, 20%)",
        plants: [
          "Isopogon ceratophyllus (Horny Cone-bush)",
          "Pimelea humilis (Common Rice-flower)",
          "Platylobium obtusangulum (Common Flat-pea)",
          "Tetratheca ciliata (Pink-bells)"
        ]
      },
      {
        layer: "Prostrate Shrub (PS, 5%)",
        plants: [
          "Acrotriche serrulata (Honey-pots)",
          "Astroloma humifusum (Cranberry Heath)",
          "Gompholobium ecostatum (Dwarf Wedge-pea)"
        ]
      },
      {
        layer: "Medium Herb (MH, 5%)",
        plants: [
          "Drosera peltata subsp. auriculata (Tall Sundew)",
          "Goodenia geniculata (Bent Goodenia)"
        ]
      },
      {
        layer: "Small/Prostrate Herb (SH, 5%)",
        plants: ["Viola cleistogamoides (Hidden Violet)"]
      },
      {
        layer: "Large Tufted Graminoid (LTG, 10%)",
        plants: [
          "Austrostipa mollis (Supple Spear-grass)",
          "Xanthorrhoea australis (Austral Grass-tree)"
        ]
      },
      {
        layer: "Large Non-tufted Graminoid (LNG, 5%)",
        plants: ["Gahnia radula (Thatch Saw-sedge)"]
      },
      {
        layer: "Medium–Small Tufted Graminoid (MTG, 15%)",
        plants: [
          "Austrodanthonia setacea (Bristly Wallaby-grass)",
          "Lepidosperma canescens (Hoary Rapier-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Schoenus apogon (Common Bog-sedge)"
        ]
      },
      {
        layer: "Medium–Tiny Non-tufted Graminoid (MNG, 1%)",
        plants: ["Hypolaena fastigiata (Tassel Rope-rush)"]
      },
      {
        layer: "Ground Fern (GF, 1%)",
        plants: ["Lindsaea linearis (Screw Fern)"]
      },
      {
        layer: "Scrambler/Climber (SC, 5%)",
        plants: [
          "Cassytha pubescens s.s. (Downy Dodder-laurel)",
          "Cassytha glabella (Slender Dodder-laurel)"
        ]
      },
      { layer: "Bryophytes/Lichens (BL, 10%)", plants: [] },
      { layer: "Soil Crust (S/C, 10%)", plants: [] }
    ]
  },

  // Valley Grassy Forest (EVC 47)
  "47": {
    description:
      "Valley Grassy Forest occurs under moderate rainfall regimes of 700–800 mm pa on fertile colluvial or alluvial soils on gently undulating lower slopes and valley floors. Open forest to 20 m tall with a diverse ground layer of herbs, lilies, grasses, and sedges.",
    recommendations: [
      {
        layer: "Tree Canopy",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Eucalyptus leucoxylon (Yellow Gum)",
          "Eucalyptus melliodora (Yellow Box)",
          "Eucalyptus rubida (Candlebark)"
        ]
      },
      {
        layer: "Understorey Tree / Large Shrub (T)",
        plants: ["Acacia mearnsii (Black Wattle)", "Acacia melanoxylon (Blackwood)"]
      }
      // …other layers…
    ]
  },

  // Grassy Woodland (EVC 175)
  "175": {
    description:
      "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
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

  // **NEW** Wet Heathland (EVC 8)
  "8": {
    description:
      "This EVC occupies poorly drained sandy soils and peaty flats. Dominated by swamp-loving heath species, sedges, and tea-trees, it supports diverse flora including orchids and carnivorous plants. Often waterlogged in winter and dry in summer.",
    recommendations: [
      {
        layer: "Medium Shrub (MS, 50%)",
        plants: [
          "Melaleuca squarrosa (Scented Paperbark)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)"
        ]
      },
      {
        layer: "Small Shrub (SS, 15%)",
        plants: [
          "Leucopogon australis (Spike Beard-heath)",
          "Tetratheca ciliata (Pink-bells)",
          "Dillwynia glaberrima (Smooth Parrot-pea)",
          "Amperea xiphoclada var. xiphoclada (Broom Spurge)"
        ]
      },
      {
        layer: "Prostrate Shrub (PS, 5%)",
        plants: [
          "Xanthosia dissecta s.l. (Cut-leaf Xanthosia)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Medium Herb (MH, 5%)",
        plants: [
          "Gonocarpus tetragynus (Common Raspwort)",
          "Selaginella uliginosa (Swamp Selaginella)",
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Acianthus spp. (Mosquito Orchid)"
        ]
      },
      {
        layer: "Small Herb (SH, 1%)",
        plants: ["Goodenia lanata (Trailing Goodenia)"]
      },
      {
        layer: "Large Tufted Graminoid (LTG, 15%)",
        plants: [
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Gymnoschoenus sphaerocephalus (Button Grass)",
          "Gahnia sieberiana (Red-fruit Saw-sedge)",
          "Lomandra longifolia (Spiny-headed Mat-rush)"
        ]
      },
      {
        layer: "Medium–Small Tufted Graminoid (MTG, 5%)",
        plants: [
          "Lepidosperma filiforme (Common Rapier-sedge)",
          "Stylidium graminifolium s.s. (Grass Trigger-plant)"
        ]
      },
      {
        layer: "Medium–Tiny Non-tufted Graminoid (MNG, 10%)",
        plants: [
          "Empodisma minus (Spreading Rope-rush)",
          "Schoenus lepidosperma (Slender Bog-sedge)",
          "Tetrarrhena distichophylla (Hairy Rice-grass)",
          "Hypolaena fastigiata (Tassel Rope-rush)"
        ]
      },
      {
        layer: "Ground Fern (GF, 10%)",
        plants: [
          "Lindsaea linearis (Screw Fern)",
          "Pteridium esculentum (Austral Bracken)",
          "Lycopodium deuterodensum (Bushy Clubmoss)"
        ]
      },
      { layer: "Bryophytes/Lichens (BL, 20%)", plants: [] }
    ]
  }

  // …you can add other EVCs here…
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize hidden main map (for legacy)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Hook up address form
  document.getElementById("address-form").addEventListener("submit", e => {
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

  // 4) Email gate: reveal plants on submit
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
          data.features.find(
            f =>
              f.geometry.type === "Polygon" &&
              turf.booleanPointInPolygon(
                pt,
                turf.polygon(f.geometry.coordinates)
              )
          ) || data.features[0],
        p = feat.properties;

      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
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
// evc-fetch.js

// — Curated plants data (Grassy Woodland is EVC 175, Valley Grassy Forest is EVC 47) —
const curatedPlants = {
  "175": {
    description:
      "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
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
  "47": {
    description:
      "Valley Grassy Forest is a species-rich eucalypt forest that occurs on sheltered lower slopes and valley floors with moderately fertile soils. It features a tall open canopy of trees like Candlebark, Messmate, or Swamp Gum, over a diverse ground layer of grasses, lilies, orchids, and herbs. Common in the Central Victorian Uplands, it bridges the gap between dry foothill forest and open plains. Once widespread, it is now vulnerable due to clearing, grazing, and weed invasion.",
    recommendations: [
      {
        layer: "Tree Canopy",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Eucalyptus leucoxylon (Yellow Gum)",
          "Eucalyptus melliodora (Yellow Box)",
          "Eucalyptus rubida (Candlebark)"
        ]
      },
      {
        layer: "Understorey Tree / Large Shrub (T)",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      // …you can add Medium Shrub, Herb, etc here if desired…
      {
        layer: "Vines & Climbers (twining vines and creepers)",
        plants: [
          "Hardenbergia violacea (Purple Coral-pea)",
          "Glycine clandestina (Twining Glycine)",
          "Billardiera scandens (Common Apple-berry)",
          "Clematis microphylla (Small-leaved Clematis)"
        ]
      }
    ]
  }
  // …you can add other EVC codes here…
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize hidden main map (for legacy)
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
    document.getElementById("modal-plants").style.display = "block";
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
          `https://opendata.maps.vic.gov.au/geoserver/wfs` +
          `?service=WFS&version=1.0.0&request=GetFeature` +
          `&typeName=open-data-platform:nv2005_evcbcs` +
          `&bbox=${bbox},EPSG:4326` +
          `&outputFormat=application/json`;

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
                turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
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
  // Header
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

  // Description
  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // Build (and initially hide) plant list
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info?.recommendations) {
    info.recommendations.forEach(sec => {
      const wr = document.createElement("div");
      wr.className = "layer";
      wr.innerHTML =
        `<h3>${sec.layer}</h3>` +
        `<ul>${sec.plants.map(p => `<li>${p}</li>`).join("")}</ul>`;
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

  // Show modal & fix sizing
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
