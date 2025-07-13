// evc-fetch.js

// — Curated plants data (add all your EVC entries here) —
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
    ],
    recruitment: "Continuous",
    organicLitter: "20% cover",
    logs: "15 m per 0.1 ha"
  },

  "47": {
    description:
      "Valley Grassy Forest occurs under moderate rainfall regimes of 700–800 mm per annum on fertile well-drained colluvial or alluvial soils on gently undulating lower slopes and valley floors. Open forest to 20 m tall that may carry a variety of eucalypts, usually species which prefer more moist or more fertile conditions over a sparse shrub cover. In season, a rich array of herbs, lilies, grasses and sedges dominate the ground layer but at the drier end of the spectrum the ground layer may be sparse and slightly less diverse, but with the moisture-loving species still remaining.",
    recommendations: [
      {
        layer: "Tree Canopy Layer",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Eucalyptus leucoxylon (Yellow Gum)",
          "Eucalyptus melliodora (Yellow Box)",
          "Eucalyptus rubida (Candlebark)"
        ]
      },
      {
        layer: "Understorey Layer",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)",
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Hymenanthera dentata s.l. (Tree Violet)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Callistemon sieberi (River Bottlebrush)",
          "Persicaria decipiens (Slender Knotweed)",
          "Epilobium billardierianum (Variable Willow-herb)",
          "Acaena novae-zelandiae (Bidgee-widgee)",
          "Hydrocotyle verticillata (Shield Pennywort)",
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Crassula helmsii (Swamp Crassula)",
          "Dichondra repens (Kidney-weed)",
          "Apium prostratum ssp. prostratum (Sea Celery)",
          "Poa labillardierei (Common Tussock-grass)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Phragmites australis (Common Reed)",
          "Schoenoplectus tabernaemontani (River Club-sedge)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Ficinia nodosa (Knobby Club-sedge)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ],
    recruitment: "Episodic/Flood (every ~5 years)",
    organicLitter: "40% cover",
    logs: "30 m per 0.1 ha"
  },

  // … your other EVCs here …

  "83": {
    description:
      "Swampy Riparian Woodland occupies low-lying stream margins and seasonally waterlogged flats, where fluctuating water tables support a mix of wetland and woodland species. Dominated by Swamp Gum (Eucalyptus ovata) and sometimes River Red Gum, it has a patchy understorey of sedges, tussock grasses, and moisture-loving herbs, with scattered shrubs such as wattles or wiry tea-tree. These systems are important for frog habitat, water filtration, and as biolinks, but are now rare and vulnerable due to drainage, pasture conversion, and erosion.",
    recommendations: [
      {
        layer: "Tree Canopy Layer",
        plants: [
          "Eucalyptus ovata (Swamp Gum)",
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)"
        ]
      },
      {
        layer: "Understorey Layer",
        plants: [
          "Acacia melanoxylon (Blackwood)",
          "Melaleuca ericifolia (Swamp Paperbark)",
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Coprosma quadrifida (Prickly Currant-bush)",
          "Bursaria spinosa (Sweet Bursaria)",
          "Senecio minimus (Shrubby Fireweed)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Acaena novae-zelandiae (Bidgee-widgee)",
          "Hydrocotyle hirta (Hairy Pennywort)",
          "Dichondra repens (Kidney-weed)",
          "Carex appressa (Tall Sedge)",
          "Cyperus lucidus (Leafy Flat-sedge)",
          "Lepidosperma elatius (Tall Sword-sedge)",
          "Juncus procerus (Tall Rush)",
          "Phragmites australis (Common Reed)",
          "Themeda triandra (Kangaroo Grass)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Pteridium esculentum (Austral Bracken)"
        ]
      }
    ],
    recruitment: "Continuous",
    organicLitter: "20% cover",
    logs: "20 m per 0.1 ha"
  },

  "164": {
    description:
      "Creekline Herb-rich Woodland occurs along minor drainage lines and ephemeral creeks, where fertile soils and intermittent moisture support a sparse eucalypt canopy, often including Swamp Gum, Manna Gum, or Snow Gum, above a highly diverse ground layer of grasses, sedges, and forbs. The shrub layer is usually open or absent, allowing light to reach the herb-rich understory. This EVC supports a wide range of pollinators, frogs, and reptiles, and has been heavily impacted by grazing, erosion, and weed invasion.",
    recommendations: [
      {
        layer: "Tree Canopy Cover (20%)",
        plants: ["Eucalyptus ovata (Swamp Gum)"]
      },
      {
        layer: "Understorey (shrubs, herbs, sedges & grasses)",
        plants: [
          "Acacia melanoxylon (Blackwood)",
          "Acacia stricta (Hop Wattle)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Olearia lirata (Snow Daisy-bush)",
          "Pimelea humilis (Common Rice-flower)",
          "Hovea heterophylla (Common Hovea)",
          "Astroloma humifusum (Cranberry Heath)",
          "Acrotriche serrulata (Honey-pots)",
          "Pterostylis longifolia s.l. (Tall Greenhood)",
          "Senecio quadridentatus (Cotton Fireweed)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Lagenophora stipitata (Common Bottle-daisy)",
          "Lagenophora gracilis (Slender Bottle-daisy)",
          "Acaena novae-zelandiae (Bidgee-widgee)",
          "Opercularia varia (Variable Stinkweed)",
          "Dichondra repens (Kidney-weed)",
          "Drosera whittakeri ssp. aberrans (Scented Sundew)",
          "Chiloglottis gunnii s.l. (Common Bird-orchid)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Deyeuxia quadriseta (Reed Bent-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Themeda triandra (Kangaroo Grass)",
          "Dianella revoluta s.s. (Black-anther Flax-lily)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Carex inversa (Knob Sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Pteridium esculentum (Austral Bracken)",
          "Adiantum aethiopicum (Common Maidenhair)",
          "Hardenbergia violacea (Purple Coral-pea)",
          "Thysanotus patersonii (Twining Fringe-lily)"
        ]
      }
    ],
    recruitment: "Continuous",
    organicLitter: "20% cover",
    logs: "10 m per 0.1 ha"
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
    .then(r => r.text())
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

      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  // Populate header
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "";
  document.getElementById("modal-evc-region").textContent = region || "";

  // Description
  const info = curatedPlants[String(code)];
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

  // Show modal
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
