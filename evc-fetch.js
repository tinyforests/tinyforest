// evc-fetch.js

// — Curated plants data —
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

  "10": {
    description:
      "Estuarine Wetland is a brackish to saline wetland system found where tidal estuaries meet floodplains. It includes salt-tolerant reeds, sedges, and succulent herbs adapted to fluctuating salinity and water levels. Dominant species include Phragmites australis and Sarcocornia quinqueflora. These wetlands are vital nurseries for fish, feeding grounds for migratory birds, and natural filters for coastal catchments. Now threatened by reclamation, pollution, and hydrological alteration.",
    recruitment:
      "Episodic/flood disturbance every ~5 years is beneficial",
    organicLitter: "10% cover",
    recommendations: [
      {
        layer: "Medium Shrub (1% cover)",
        plants: ["Leptospermum lanigerum (Woolly Tea-tree)"]
      },
      {
        layer: "Large Herb (10% cover)",
        plants: [
          "Persicaria decipiens (Slender Knotweed)",
          "Epilobium billardierianum (Variable Willow-herb)",
          "Mimulus repens (Creeping Monkey-flower)",
          "Leptinella reptans s.l. (Creeping Cotula)"
        ]
      },
      {
        layer: "Medium Herb (10% cover)",
        plants: [
          "Samolus repens (Creeping Brookweed)",
          "Lobelia anceps (Angled Lobelia)"
        ]
      },
      {
        layer: "Small/Prostrate Herb (15% cover)",
        plants: [
          "Selliera radicans (Shiny Swamp-mat)",
          "Crassula helmsii (Swamp Crassula)"
        ]
      },
      {
        layer: "Large Tufted Graminoid (10% cover)",
        plants: ["Poa labillardierei (Common Tussock-grass)"]
      },
      {
        layer: "Large Non-tufted Graminoid (25% cover)",
        plants: ["Phragmites australis (Common Reed)"]
      },
      {
        layer: "Medium/Tiny Non-tufted Graminoid (1% cover)",
        plants: ["Triglochin striatum (Streaked Arrowgrass)"]
      },
      {
        layer: "Scrambler/Climber (5% cover)",
        plants: ["Calystegia sepium (Large Bindweed)"]
      }
    ]
  },

  "16": {
    description:
      "Lowland Forest is a tall, open eucalypt forest that grows on moderately fertile soils in lower elevation foothills and flats. Dominated by Messmate, Mountain Grey Gum, or Swamp Gum, its understorey includes a mix of shrubs, grasses, ferns, and wildflowers. These forests support a wide range of birdlife, fungi, and insects and are adapted to moderate fire regimes. Once extensive across southern Victoria, they are now fragmented by agriculture and plantation forestry.",
    recommendations: [
      {
        layer: "Tree Canopy (30% cover)",
        plants: [
          "Eucalyptus obliqua (Messmate Stringybark)",
          "Eucalyptus willisii (Shining Peppermint)",
          "Eucalyptus baxteri s.s. (Brown Stringybark)"
        ]
      },
      {
        layer: "Understorey Tree / Large Shrub (10% cover)",
        plants: [
          "Exocarpos cupressiformis (Cherry Ballart)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Medium Shrub (15% cover)",
        plants: [
          "Leptospermum continentale (Prickly Tea-tree)",
          "Correa reflexa (Common Correa)",
          "Banksia marginata (Silver Banksia)",
          "Acacia verticillata (Prickly Moses)"
        ]
      },
      {
        layer: "Small Shrub (5% cover)",
        plants: [
          "Tetratheca ciliata (Pink-bells)",
          "Hibbertia riparia (Erect Guinea-flower)",
          "Platylobium obtusangulum (Common Flat-pea)",
          "Pultenaea stricta (Rigid Bush-pea)"
        ]
      },
      {
        layer: "Prostrate Shrub (1% cover)",
        plants: [
          "Acrotriche serrulata (Honey-pots)",
          "Xanthosia dissecta s.l. (Cut-leaf Xanthosia)",
          "Astroloma humifusum (Cranberry Heath)"
        ]
      },
      {
        layer: "Large Herb (5% cover)",
        plants: [
          "Senecio tenuiflorus (Slender Fireweed)",
          "Dipodium punctatum s.l. (Hyacinth Orchid)",
          "Senecio glomeratus (Annual Fireweed)"
        ]
      },
      {
        layer: "Medium Herb (20% cover)",
        plants: [
          "Viola hederacea sensu Entwisle (Ivy-leaf Violet)",
          "Burchardia umbellata (Milkmaids)",
          "Helichrysum scorpioides (Button Everlasting)",
          "Lagenophora stipitata (Common Bottle-daisy)"
        ]
      },
      {
        layer: "Small/Prostrate Herb (5% cover)",
        plants: ["Hydrocotyle laxiflora (Stinking Pennywort)"]
      },
      {
        layer: "Large Tufted Graminoid (5% cover)",
        plants: [
          "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
          "Deyeuxia quadriseta (Reed Bent-grass)",
          "Lomandra longifolia (Spiny-headed Mat-rush)"
        ]
      },
      {
        layer: "Large Non-tufted Graminoid (10% cover)",
        plants: [
          "Gahnia radula (Thatch Saw-sedge)",
          "Austrostipa muelleri (Wiry Spear-grass)"
        ]
      },
      {
        layer: "Medium/Small Tufted Graminoid (10% cover)",
        plants: [
          "Dianella revoluta s.s. (Black-anther Flax-lily)",
          "Lepidosperma filiforme (Common Rapier-sedge)",
          "Dichelachne rara (Common Plume-grass)",
          "Poa morrisii (Soft Tussock-grass)"
        ]
      },
      {
        layer: "Medium/Tiny Non-tufted Graminoid (5% cover)",
        plants: [
          "Poa tenera (Slender Tussock-grass)",
          "Microlaena stipoides var. stipoides (Weeping Grass)"
        ]
      },
      {
        layer: "Ground Fern (5% cover)",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler / Climber (1% cover)",
        plants: [
          "Cassytha pubescens s.s. (Downy Dodder-laurel)",
          "Billardiera scandens (Common Apple-berry)",
          "Comesperma volubile (Love Creeper)",
          "Clematis aristata (Mountain Clematis)"
        ]
      }
    ]
  },

  "18": {
    description:
      "Riparian Forest occurs along permanent or semi-permanent streams in sheltered valleys and lower slopes. Dominated by Manna Gum, Mountain Ash, or Silver Wattle, it features a complex understorey of ferns, grasses, and moisture-loving herbs. These forests serve as wildlife corridors, filter runoff, and are vital for flood resilience.",
    recommendations: [
      {
        layer: "Tree Canopy (40% cover)",
        plants: ["Eucalyptus viminalis (Manna Gum)"]
      },
      {
        layer: "Understorey Tree / Large Shrub (20% cover)",
        plants: [
          "Pomaderris aspera (Hazel Pomaderris)",
          "Acacia melanoxylon (Blackwood)",
          "Notelaea ligustrina (Privet Mock-olive)"
        ]
      },
      {
        layer: "Medium Shrub (20% cover)",
        plants: [
          "Olearia lirata (Snowy Daisy-bush)",
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Melaleuca squarrosa (Scented Paperbark)"
        ]
      },
      {
        layer: "Large Herb (5% cover)",
        plants: ["Urtica incisa (Scrub Nettle)"]
      },
      {
        layer: "Medium Herb (10% cover)",
        plants: ["Austrocynoglossum latifolium (Forest Hound's-tongue)"]
      },
      {
        layer: "Small/Prostrate Herb (1% cover)",
        plants: [
          "Lobelia pedunculata s.l. (Matted Pratia)",
          "Lobelia pratioides (Poison Lobelia)"
        ]
      },
      {
        layer: "Large Tufted Graminoid (20% cover)",
        plants: [
          "Gahnia clarkei (Tall Saw-sedge)",
          "Lepidosperma laterale var. majus (Variable Sword-sedge)",
          "Carex appressa (Tall Sedge)"
        ]
      },
      {
        layer: "Medium/Small Tufted Graminoid (15% cover)",
        plants: [
          "Poa ensiformis (Sword Tussock-grass)",
          "Carex gaudichaudiana (Fen Sedge)",
          "Isolepis inundata (Swamp Club-sedge)"
        ]
      },
      {
        layer: "Medium/Tiny Non-tufted Graminoid (5% cover)",
        plants: ["Poa tenera (Slender Tussock-grass)"]
      },
      {
        layer: "Ground Fern (10% cover)",
        plants: [
          "Pteridium esculentum (Austral Bracken)",
          "Blechnum wattsii (Hard Water-fern)",
          "Blechnum nudum (Fishbone Water-fern)"
        ]
      },
      {
        layer: "Scrambler / Climber (5% cover)",
        plants: ["Clematis aristata (Mountain Clematis)"]
      }
    ]
  },

  "20": {
    description:
      "Heathy Dry Forest grows on nutrient-poor soils and is characterised by stringybark eucalypts and a dense understorey of heaths, peas, and grasses. Common species include Brown Stringybark and Blackwood. It supports high biodiversity and responds strongly to fire cycles.",
    recommendations: [
      {
        layer: "Tree Canopy (30% cover)",
        plants: [
          "Eucalyptus goniocalyx s.l. (Bundy)",
          "Eucalyptus macrorhyncha (Red Stringybark)",
          "Eucalyptus dives (Broad-leaved Peppermint)",
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)"
        ]
      },
      {
        layer: "Medium Shrub (15% cover)",
        plants: [
          "Monotoca scoparia (Prickly Broom-heath)",
          "Acacia pycnantha (Golden Wattle)",
          "Acacia paradoxa (Hedge Wattle)"
        ]
      },
      {
        layer: "Small Shrub (20% cover)",
        plants: [
          "Phyllanthus hirtellus (Thyme Spurge)",
          "Hovea heterophylla (Common Hovea)",
          "Leucopogon virgatus (Common Beard-heath)",
          "Tetratheca labillardierei (Glandular Pink-bells)"
        ]
      },
      {
        layer: "Prostrate Shrub (1% cover)",
        plants: ["Bossiaea prostrata (Creeping Bossiaea)"]
      },
      {
        layer: "Large Herb (1% cover)",
        plants: ["Senecio tenuiflorus (Slender Fireweed)"]
      },
      {
        layer: "Medium Herb (5% cover)",
        plants: [
          "Gonocarpus tetragynus (Common Raspwort)",
          "Wahlenbergia gracilis s.l. (Sprawling Bluebell)"
        ]
      },
      {
        layer: "Small/Prostrate Herb (5% cover)",
        plants: [
          "Opercularia varia (Variable Stinkweed)",
          "Goodenia lanata (Trailing Goodenia)"
        ]
      },
      {
        layer: "Large Tufted Graminoid (1% cover)",
        plants: ["Joycea pallida (Silvertop Wallaby-grass)"]
      },
      {
        layer: "Medium/Small Tufted Graminoid (20% cover)",
        plants: [
          "Lomandra filiformis (Wattle Mat-rush)",
          "Stylidium graminifolium s.l. (Grass Trigger-plant)",
          "Poa sieberiana (Grey Tussock-grass)"
        ]
      },
      {
        layer: "Medium/Tiny Non-tufted Graminoid (1% cover)",
        plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"]
      }
    ]
  },

  "21": {
    description:
      "Found on rocky, well-drained ridges and slopes, Shrubby Dry Forest has a sparse eucalypt canopy (such as Red Ironbark) above a rich shrub layer of wattles, peas, and tea-trees. It provides habitat for small mammals, honeyeaters, and invertebrates and thrives under low-intensity fire regimes.",
    recommendations: [
      {
        layer: "Tree Canopy (30% cover)",
        plants: [
          "Eucalyptus tricarpa (Red Ironbark)",
          "Eucalyptus baxteri (Brown Stringybark)",
          "Eucalyptus polyanthemos (Red Box)"
        ]
      },
      {
        layer: "Understorey Tree / Large Shrub (5% cover)",
        plants: ["Acacia pycnantha (Golden Wattle)"]
      },
      {
        layer: "Shrub Layer (20% cover)",
        plants: [
          "Spyridium parvifolium (Dusty Miller)",
          "Acacia myrtifolia (Myrtle Wattle)",
          "Daviesia leptophylla (Narrow-leaf Hop-bush)",
          "Pultenaea daphnoides (Large-leaf Bush-pea)"
        ]
      },
      {
        layer: "Small Shrub Layer (10% cover)",
        plants: [
          "Hibbertia stricta s.l. (Upright Guinea-flower)",
          "Platylobium obtusangulum (Common Flat-pea)",
          "Isopogon ceratophyllus (Horny Cone-bush)",
          "Pultenaea humilis (Dwarf Bush-pea)"
        ]
      },
      {
        layer: "Prostrate Shrub (1% cover)",
        plants: ["Acrotriche serrulata (Honey-pots)"]
      },
      {
        layer: "Herb Layer (1% cover)",
        plants: ["Drosera peltata ssp. auriculata (Tall Sundew)"]
      },
      {
        layer: "Large Tufted Graminoid (15% cover)",
        plants: [
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Joycea pallida (Silvertop Wallaby-grass)"
        ]
      },
      {
        layer: "Medium to Small Tufted Graminoid (10% cover)",
        plants: [
          "Dianella revoluta (Black-anther Flax-lily)",
          "Lepidosperma semiteres (Wire Rapier-sedge)",
          "Poa australis spp. agg. (Tussock Grass)"
        ]
      }
    ]
  },

  "22": {
    description:
      "Grassy Dry Forest is a light-filled forest on lower slopes and ranges, where open canopies of Yellow Box, Red Box, or Broad-leaved Peppermint shelter a grassy understorey. Lacking dense shrubs, it’s dominated by wallaby grasses, wildflowers, and sun orchids.",
    recommendations: [
      {
        layer: "Tree Canopy (30% cover)",
        plants: [
          "Eucalyptus macrorhyncha (Red Stringybark)",
          "Eucalyptus goniocalyx s.l. (Bundy)",
          "Eucalyptus obliqua (Messmate Stringybark)"
        ]
      },
      {
        layer: "Understorey Tree / Large Shrub (5% cover)",
        plants: ["Acacia dealbata (Silver Wattle)"]
      },
      {
        layer: "Medium Shrub (10% cover)",
        plants: ["Epacris impressa (Common Heath)"]
      },
      {
        layer: "Small Shrub (5% cover)",
        plants: [
          "Hovea heterophylla (Common Hovea)",
          "Pimelea humilis (Common Rice-flower)",
          "Acacia aculeatissima (Thin-leaf Wattle)"
        ]
      },
      {
        layer: "Prostrate Shrub (1% cover)",
        plants: ["Acrotriche serrulata (Honey-pots)"]
      },
      {
        layer: "Large Herb (5% cover)",
        plants: ["Senecio tenuiflorus (Slender Fireweed)"]
      },
      {
        layer: "Medium Herb (20% cover)",
        plants: [
          "Gonocarpus tetragynus (Common Raspwort)",
          "Viola hederacea sensu Willis (Ivy-leaf Violet)",
          "Hypericum gramineum (Small St John's Wort)"
        ]
      },
      {
        layer: "Small or Prostrate Herb (5% cover)",
        plants: [
          "Dichondra repens (Kidney-weed)",
          "Hydrocotyle laxiflora (Stinking Pennywort)",
          "Goodenia lanata (Trailing Goodenia)"
        ]
      },
      {
        layer: "Large Tufted Graminoid (5% cover)",
        plants: ["Joycea pallida (Silvertop Wallaby-grass)"]
      },
      {
        layer: "Medium to Small Tufted Graminoid (30% cover)",
        plants: [
          "Poa sieberiana (Grey Tussock-grass)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Dianella revoluta s.l. (Black-anther Flax-lily)"
        ]
      },
      {
        layer: "Medium to Tiny Non-tufted Graminoid (1% cover)",
        plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"]
      },
      {
        layer: "Ground Fern (1% cover)",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler or Climber (1% cover)",
        plants: ["Hardenbergia violacea (Purple Coral-pea)"]
      }
    ]
  }
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

  // 4) Email gatekeeper: reveal plant list
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
  const d = 0.02,
    bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`,
    url =
      "https://opendata.maps.vic.gov.au/geoserver/wfs" +
      "?service=WFS&version=1.0.0&request=GetFeature" +
      "&typeName=open-data-platform:nv2005_evcbcs" +
      `&bbox=${bbox},EPSG:4326` +
      "&outputFormat=application/json";

  fetch(url)
    .then(res => res.text())
    .then(txt => {
      if (txt.trim().startsWith("<"))
        throw new Error("EVC service error. Try again later.");
      return JSON.parse(txt);
    })
    .then(data => {
      if (!data.features?.length) {
        throw new Error("No EVC data found for this location.");
      }
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
  // Populate header
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent =
    status || "Not specified";
  document.getElementById("modal-evc-region").textContent =
    region || "Not specified";

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

  // Show modal & fix sizing
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
