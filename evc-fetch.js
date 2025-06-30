// evc-fetch.js

// — Curated plants data —
const curatedPlants = {
  // 175 – Grassy Woodland
  "175": {
    description:
      "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
    recommendations: [
      {
        layer:
          "Canopy Layer (tallest, mature trees providing shade, regulating temperature & supporting wildlife)",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Allocasuarina verticillata (Drooping Sheoak)"
        ]
      },
      {
        layer:
          "Sub-Canopy Layer (shorter trees beneath the canopy contributing to structure & biodiversity)",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Allocasuarina littoralis (Black Sheoak)",
          "Exocarpos cupressiformis (Cherry Ballart)"
        ]
      },
      {
        layer:
          "Shrub Layer (various shrubs offering habitat & food for smaller animals & insects)",
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
          "Herb Layer (ground-level herbs, grasses & ferns stabilising soils & retaining moisture)",
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

  // 851 – Stream Bank Shrubland
  "851": {
    description:
      "This rare and endangered plant community once lined the small rivers and ephemeral creeks of Victoria’s volcanic plains. Shaped by flood and stone, Stream Bank Shrubland thrives in rocky or gravelly streambeds where water flows seasonally. It’s defined by tall, moisture-loving shrubs like Sweet Bursaria, Tree Violet, and Silver Wattle, often beneath a scattered overstorey of River Red Gum. These green ribbons form vital ecological corridors, supporting movement across otherwise cleared or open landscapes. The understory hosts sedges, grasses, and fast-growing herbs that respond quickly to flood or disturbance. Restoring this EVC brings back habitat, resilience, and cultural continuity to waterways across the volcanic plain.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Eucalyptus camaldulensis (River Red-gum)"]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)",
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Hymenanthera dentata s.l. (Tree Violet)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Callistemon sieberi (River Bottlebrush)"
        ]
      },
      {
        layer: "Herb & Sedge Layer",
        plants: [
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
    ]
  },

  // 55_61 – Plains Grassy Woodland (Victorian Volcanic Plain)
  "55_61": {
    description:
      "Plains Grassy Woodland is an open, sunlit woodland once widespread across the heavy basalt clays of western Victoria. Scattered River Red Gums, Grey Box, and Yellow Gums form a broad canopy over a ground layer rich with kangaroo grass, native lilies, wildflowers, and seasonal herbs. This EVC thrives in landscapes with seasonal waterlogging and cracking clay soils, and is shaped by a long history of fire management and Aboriginal cultivation. Today, less than 3 % of this ecosystem remains, making it one of Victoria’s most threatened woodland communities. With a low shrub layer and high herb diversity, Plains Grassy Woodland forms a vital link between grassland and forest — a spacious, grassy ecosystem built on story, fire, and deep time.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Eucalyptus camaldulensis (River Red Gum)"]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Acacia pycnantha (Golden Wattle)",
          "Acacia paradoxa (Hedge Wattle)",
          "Pimelea humilis (Common Rice-flower)",
          "Astroloma humifusum (Cranberry Heath)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Acaena echinata (Sheep’s Burr)",
          "Dichondra repens (Kidney-weed)",
          "Hydrocotyle laxiflora (Stinking Pennywort)",
          "Austrostipa mollis (Supple Spear-grass)",
          "Austrostipa bigeniculata (Kneed Spear-grass)",
          "Themeda triandra (Kangaroo Grass)",
          "Elymus scaber var. scaber (Common Wheat-grass)",
          "Austrodanthonia setacea (Bristly Wallaby-grass)",
          "Austrodanthonia racemosa var. racemosa (Stiped Wallaby-grass)",
          "Microlaena stipoides var. stipoides (Weeping Grass)"
        ]
      }
    ]
  },

  // 56 – Floodplain Riparian Woodland
  "56": {
    description:
      "Floodplain Riparian Woodland occurs along the broad, seasonally inundated river valleys of the Gippsland Plain — including the Avon, Latrobe, Mitchell, and Thomson Rivers. These woodlands are shaped by floods, sediment, and groundwater, supporting tall River Red Gums over a complex understorey of grasses, sedges, and moisture-tolerant herbs. The canopy provides critical habitat for birds, gliders, and microbats, while the ground layer responds dynamically to both flood and fire. Much of this ecosystem has been lost to clearing, levee construction, or grazing. Today, it remains in narrow bands along rivers — holding ecological richness and cultural knowledge in its flood-sculpted form.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)",
          "Eucalyptus tereticornis ssp. mediana (Gippsland Red Gum)",
          "Eucalyptus ovata (Swamp Gum)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Acacia implexa (Lightwood)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Hymenanthera dentata s.l. (Tree Violet)"
        ]
      },
      {
        layer: "Herb & Sedge Layer",
        plants: [
          "Urtica incisa (Scrub Nettle)",
          "Persicaria subsessilis (Hairy Knotweed)",
          "Senecio quadridentatus (Cottony Fireweed)",
          "Acaena novae-zelandiae (Bidgee-widgee)",
          "Hydrocotyle hirta (Hairy Pennywort)",
          "Stellaria pungens (Prickly Starwort)",
          "Veronica plebeia (Trailing Speedwell)",
          "Oxalis corniculata s.l. (Yellow Wood-sorrel)",
          "Dichondra repens (Kidney-weed)",
          "Carex appressa (Tall Sedge)",
          "Poa labillardierei (Common Tussock-grass)",
          "Phragmites australis (Common Reed)",
          "Juncus amabilis (Hollow Rush)",
          "Cyperus spp. (Flat-sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Eleocharis acuta (Common Spike-sedge)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  }
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Legacy map init (hidden via CSS)
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

  // 4) Email gate: show plants only after form submit
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    const plantsDiv = document.getElementById("modal-plants");
    plantsDiv.style.display = "block";
    const btn = e.target.querySelector("button");
    btn.textContent = "Plants Shown";
    btn.disabled = true;
    // TODO: hook this into your backend / Google Form
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
      if (txt.trim().startsWith("<")) throw new Error("EVC service error.");
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
  // Header
  document.getElementById("modal-evc-name").textContent =
    name || "Unknown";
  document.getElementById("modal-evc-status").textContent =
    status || "Not specified";
  document.getElementById("modal-evc-region").textContent =
    region || "Not specified";

  // Description & look up plants
  const key = String(code).replace(".", "_");
  const info = curatedPlants[key];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // Build plant list (initially hidden until email submitted)
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
    plantsDiv.style.display = "none";
  } else {
    plantsDiv.style.display = "none";
  }

  // In‐modal map
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
