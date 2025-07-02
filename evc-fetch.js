// evc-fetch.js

// — Curated plants data (add all your EVC entries here) —
const curatedPlants = {
  // Grassy Woodland (EVC 175)
  "175": {
    description:
      "Grassy Woodland is a lightly treed, herb-rich ecosystem once widespread across the undulating volcanic plains of western and central Victoria. It features scattered eucalypts, especially Grey Box and Yellow Gum, over an open ground layer rich with native grasses, wildflowers, and tuberous lilies. On fertile soils, this ecosystem bursts into colour through spring and early summer. It is highly threatened, with most remnants cleared for agriculture. Today, only small, fragmented patches remain, often along roadsides, rail reserves, and public lands.",
    recommendations: [
      {
        layer:
          "Canopy Layer (topmost layer: tallest, mature trees providing shade, regulating temperature, and supporting wildlife)",
        plants: [
          "Eucalyptus ovata (Swamp Gum)",
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Eucalyptus viminalis (Manna Gum)",
          "Allocasuarina verticillata (Drooping Sheoak)",
          "Acacia implexa (Lightwood)",
          "Acacia mearnsii (Black Wattle)"
        ]
      },
      {
        layer:
          "Shrub Layer (various shrubs offering habitat and food for smaller animals and insects)",
        plants: [
          "Bursaria spinosa (Sweet Bursaria)",
          "Cassinia arcuata (Drooping Cassinia)",
          "Acacia pycnantha (Golden Wattle)",
          "Hymenanthera dentata s.l. (Tree Violet)",
          "Pimelea humilis (Common Rice-flower)",
          "Atriplex semibaccata (Berry Saltbush)"
        ]
      },
      {
        layer:
          "Herb Layer (ground-level herbs, grasses and ferns stabilising soils and retaining moisture)",
        plants: [
          "Acaena echinata (Sheep's Burr)",
          "Einadia nutans ssp. nutans (Nodding Saltbush)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Crassula sieberiana (Sieber Crassula)",
          "Dichondra repens (Kidney-weed)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Austrostipa scabra (Rough Spear-grass)",
          "Austrostipa caespitosa (Common Wallaby-grass)",
          "Dianella revoluta s.l. (Black-anther Flax-lily)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Clematis microphylla (Small-leaved Clematis)"
        ]
      }
    ]
  },

  // Floodplain Riparian Woodland (EVC 56)
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
        layer: "Herb Layer",
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
          "Schoenoplectus tabernaemontani (River Club-sedge)",
          "Juncus amabilis (Hollow Rush)",
          "Cyperus spp. (Flat-sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Eleocharis acuta (Common Spike-sedge)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // Valley Grassy Forest (EVC 47)
  "47": {
    description:
      "Valley Grassy Forest occurs under moderate rainfall regimes of 700–800 mm per annum on fertile, well-drained colluvial or alluvial soils on gently undulating lower slopes and valley floors. Open forest to 20 m tall that may carry a variety of eucalypts, usually species which prefer more moist or more fertile conditions, over a sparse shrub cover. In season, a rich array of herbs, lilies, grasses, and sedges dominate the ground layer.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Eucalyptus leucoxylon (Yellow Gum)",
          "Eucalyptus melliodora (Yellow Box)",
          "Eucalyptus rubida (Candlebark)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)"
        ]
      }
    ]
  },

  // Plains Grassy Woodland – Victorian Volcanic Plain (EVC 55_61)
  "55_61": {
    description:
      "Plains Grassy Woodland is an open, sunlit woodland once widespread across the heavy basalt clays of western Victoria. Scattered River Red Gums, Grey Box, and Yellow Gums form a broad canopy over a ground layer rich with kangaroo grass, native lilies, wildflowers, and seasonal herbs. This EVC thrives in landscapes with seasonal waterlogging and cracking clay soils, and is shaped by a long history of fire management and Aboriginal cultivation. Today, less than 3 % of this ecosystem remains, making it one of Victoria’s most threatened woodland communities. With a low shrub layer and high herb diversity, Plains Grassy Woodland forms a vital link between grassland and forest — a spacious, grassy ecosystem built on story, fire, and deep time.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red Gum)"
        ]
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
          "Acaena echinata (Sheep's Burr)",
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

  // Swamp Scrub (EVC 53)
  "53": {
    description:
      "Swamp Scrub is a dense, wetland-edge vegetation community found across the low-lying floodplains, soaks, and swamp margins of the Gippsland Plain. It’s dominated by thickets of woolly tea-tree, swamp paperbark, and coastal bottlebrush, often growing around permanent or seasonal wetlands. Beneath the tangled canopy, the ground is cool and shaded, supporting sedges, mosses, and ferns adapted to waterlogged soils. These scrubs play a vital role in water purification, erosion control, and wildlife habitat. Once common across Gippsland, Swamp Scrub is now classified as endangered, with most remnants surviving in small, fragmented pockets near creeks, estuaries, and floodplain depressions.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Melaleuca ericifolia (Swamp Paperbark)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Coprosma quadrifida (Prickly Currant-bush)",
          "Leptospermum continentale (Prickly Tea-tree)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Lycopus australis (Australian Gipsywort)",
          "Lythrum salicaria (Purple Loosestrife)",
          "Persicaria praetermissa (Spotted Knotweed)",
          "Hydrocotyle pterocarpa (Wing Pennywort)",
          "Stellaria angustifolia (Swamp Starwort)",
          "Lobelia anceps (Angled Lobelia)",
          "Crassula helmsii (Swamp Crassula)",
          "Juncus procerus (Tall Rush)",
          "Poa labillardierei (Common Tussock-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Phragmites australis (Common Reed)",
          "Baumea rubiginosa s.l. (Soft Twig-rush)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Juncus gregiflorus (Green Rush)",
          "Eleocharis acuta (Common Spike-sedge)",
          "Blechnum cartilagineum (Gristle Fern)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // Riparian Woodland – Victorian Volcanic Plain (EVC 641)
  "641": {
    description:
      "Riparian Woodland is a tall, open woodland that lines the banks of rivers, creeks, and ephemeral streams, particularly those that flow across Victoria’s volcanic plains. It is dominated by River Red Gums, with a diverse understorey of sedges, grasses, and moisture-adapted herbs. These woodlands thrive in seasonally flooded soils, and act as corridors for wildlife, water filtration, and cultural passage. Once common along waterways such as Merri Creek, Moonee Ponds Creek, and Werribee River, Riparian Woodland has been severely fragmented and degraded, especially in urban areas. Today, it is a priority for both ecological restoration and cultural renewal.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Viminaria juncea (Golden Spray)",
          "Rubus parvifolius (Small-leaf Bramble)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Wahlenbergia gracilis s.s. (Sprawling Bluebell)",
          "Senecio quadridentatus (Cottony Fireweed)",
          "Myriophyllum crispatum (Upright Water-milfoil)",
          "Rumex brownii (Slender Dock)",
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Mentha australis (River Mint)",
          "Acaena novae-zelandiae (Bidgee-widgee)",
          "Dichondra repens (Kidneyweed)",
          "Poa labillardierei (Common Tussock-grass)",
          "Carex appressa (Tall Sedge)",
          "Phragmites australis (Common Reed)",
          "Lachnagrostis filiformis var. filiformis (Common Blown-grass)",
          "Triglochin procerum s.l. (Water-ribbons)",
          "Eleocharis acuta (Common Spike-sedge)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // Stream Bank Shrubland – Victorian Volcanic Plain (EVC 851)
  "851": {
    description:
      "This rare and endangered plant community once lined the small rivers and ephemeral creeks of Victoria’s volcanic plains. Shaped by flood and stone, Stream Bank Shrubland thrives in rocky or gravelly streambeds where water flows seasonally. It’s defined by tall, moisture-loving shrubs like Sweet Bursaria, Tree Violet, and Silver Wattle, often beneath a scattered overstorey of River Red Gum. These green ribbons form vital ecological corridors, supporting movement across otherwise cleared or open landscapes. The understory hosts sedges, grasses, and fast-growing herbs that respond quickly to flood or disturbance. Restoring this EVC brings back habitat, resilience, and cultural continuity to waterways across the volcanic plain.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Hymenanthera dentata s.l. (Tree Violet)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Callistemon sieberi (River Bottlebrush)"
        ]
      },
      {
        layer: "Herb Layer",
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

  // Brackish Grassland (EVC 934)
  "934": {
    description:
      "Brackish Grassland is a salt-tolerant grassy ecosystem found in low-lying areas of the Gippsland Plain, where saline groundwater or estuarine flooding influences the soil. These open, wind-exposed grasslands are dominated by saltbushes, low sedges, and halophytic herbs, with few or no trees. Though sparse in appearance, this EVC supports high biodiversity, including rare orchids, seasonal wetland species, and migratory bird habitat. Brackish Grassland is highly threatened, with much of its extent cleared, drained, or grazed. Its remaining fragments survive in coastal flats, behind dunes, and around salt lakes, telling stories of salinity, resilience, and edge dwelling.",
    recommendations: [
      {
        layer: "Herb Layer",
        plants: [
          "Senecio glomeratus (Annual Fireweed)",
          "Sarcocornia quinqueflora (Beaded Glasswort)",
          "Samolus repens (Creeping Brookweed)",
          "Sebaea albidiflora (White Sebaea)",
          "Calocephalus lacteus (Milky Beauty-heads)",
          "Selliera radicans (Shiny Swamp-mat)",
          "Utricularia tenella (Pink Bladderwort)",
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
      const lat = +results[0].lat;
      const lon = +results[0].lon;
      map.setView([lat, lon], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch(err => {
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
    .then(res => res.text())
    .then(text => {
      if (text.trim().startsWith("<")) {
        console.error("EVC WFS returned HTML:", text.slice(0, 200));
        throw new Error("Error retrieving EVC data. Please try again later.");
      }
      return JSON.parse(text);
    })
    .then(data => {
      if (!data.features?.length) {
        throw new Error("No EVC data found for this location.");
      }
      const pt = turf.point([lon, lat]);
      const feat =
        data.features.find(
          f =>
            f.geometry?.type === "Polygon" &&
            turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
        ) || data.features[0];

      const p = feat.properties;
      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
    })
    .catch(err => {
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

  // --- Description ---
  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // --- Build & hide plant list ---
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
