// evc-fetch.js

// — Curated plants data for Melbourne-metro EVCs —
const curatedPlants = {
  "175": {
    description:
      "Grassy Woodland is a scattered open woodland found on gentle slopes and undulating plains, typically with a sparse canopy of Grey Box, Yellow Box, or Red Gum over a species-rich ground layer of grasses, lilies, and wildflowers. The shrub layer is usually sparse, giving way to a light-filled understorey dominated by Kangaroo Grass and seasonal herbs. Once widespread across the Victorian Volcanic Plain, this community has been heavily cleared, with remnants now vital for supporting threatened woodland birds and grassland invertebrates.",
    recommendations: [
      {
        layer: "Canopy Layer (tall mature trees)",
        plants: [
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Allocasuarina verticillata (Drooping Sheoak)"
        ]
      },
      {
        layer: "Sub-Canopy Layer (shorter trees and large shrubs)",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Allocasuarina littoralis (Black Sheoak)",
          "Exocarpos cupressiformis (Cherry Ballart)"
        ]
      },
      {
        layer: "Shrub Layer (various shrubs offering habitat)",
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
        layer: "Herb Layer (ground-level herbs, grasses & ferns)",
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
      "Valley Grassy Forest is a species-rich open forest that occurs on lower slopes, valleys and gentle rises, where soils are fertile and rainfall moderate. It typically features a scattered canopy of Peppermints, Yellow Gums and Candlebarks over a diverse ground layer of grasses, lilies, orchids and herbs. Shrubs are generally sparse, allowing a light-filled understorey that bursts into colour in spring. Once common across Gippsland and the Central Victorian Uplands, it is now vulnerable due to clearing and grazing.",
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
        layer: "Sub-Canopy Layer (understorey trees)",
        plants: [
          "Acacia mearnsii (Black Wattle)"
        ]
      },
      {
        layer: "Shrub Layer (medium shrubs)",
        plants: [
          "Myoporum sp. 1 (Sticky Boobialla)",
          "Acacia pycnantha (Golden Wattle)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Pimelea humilis (Common Rice-flower)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer: "Herb Layer (grasses & herbs)",
        plants: [
          "Veronica gracilis (Slender Speedwell)",
          "Poranthera microphylla (Small Poranthera)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Solenogyne dominii (Smooth Solenogyne)",
          "Oxalis corniculata (Yellow Wood-sorrel)",
          "Oxalis exilis (Shady Wood-sorrel)",
          "Opercularia varia (Variable Stinkweed)",
          "Austrostipa rudis (Veined Spear-grass)",
          "Austrostipa mollis (Supple Spear-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Themeda triandra (Kangaroo Grass)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Tricoryne elatior (Yellow Rush-lily)",
          "Arthropodium strictum s.l. (Chocolate Lily)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Billardiera scandens (Common Apple-berry)"
        ]
      }
    ]
  },

  "56": {
    description:
      "Floodplain Riparian Woodland occurs on the seasonally flooded river flats and lower terraces of large watercourses. Typically dominated by River Red Gums over a shrub layer of Sweet Bursaria, Tree Violet and Tree Everlasting, it has a diverse understorey of sedges, grasses and water-loving herbs. These woodlands are crucial for bank stability and wildlife corridors but are now endangered by regulation and grazing.",
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
        layer: "Sub-Canopy Layer (large shrubs)",
        plants: [
          "Acacia implexa (Lightwood)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer (moisture-loving shrubs)",
        plants: [
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Hymenanthera dentata s.l. (Tree Violet)"
        ]
      },
      {
        layer: "Herb Layer (sedges, grasses & herbs)",
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
          "Eleocharis acuta (Common Spike-sedge)"
        ]
      }
    ]
  },

  "53": {
    description:
      "Swamp Scrub is a dense, wetland-edge vegetation community on floodplains and swamp margins, dominated by thickets of Woolly Tea-tree and Swamp Paperbark. Beneath this tangle is a cool, shaded ground layer of sedges, mosses and ferns, crucial for water purification and wildlife habitat. Most remnants are now small and fragmented.",
    recommendations: [
      {
        layer: "Canopy Layer (tea-trees & paperbarks)",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Melaleuca ericifolia (Swamp Paperbark)"
        ]
      },
      {
        layer: "Sub-Canopy Layer (thickets & shrubs)",
        plants: [
          "Coprosma quadrifida (Prickly Currant-bush)",
          "Leptospermum continentale (Prickly Tea-tree)"
        ]
      },
      {
        layer: "Shrub Layer (medium shrubs)",
        plants: [
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)"
        ]
      },
      {
        layer: "Herb Layer (sedges, reeds, ferns & herbs)",
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
          "Schoenoplectus tabernaemontani (River Club-sedge)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Baumea rubiginosa s.l. (Soft Twig-rush)",
          "Blechnum cartilagineum (Gristle Fern)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  "55_61": {
    description:
      "Plains Grassy Woodland is an open, sunlit woodland once widespread across the heavy basalt clays of western Victoria. Scattered River Red Gums and Yellow Gums form a broad canopy over a ground layer rich with kangaroo grass, lilies, wildflowers and seasonal herbs. This community is now critically endangered, with small fragments persisting in remnant reserves and roadsides.",
    recommendations: [
      {
        layer: "Canopy Layer (scattered river red-gums)",
        plants: [
          "Eucalyptus camaldulensis (River Red Gum)"
        ]
      },
      {
        layer: "Shrub Layer (golden wattles & heath-shrubs)",
        plants: [
          "Acacia pycnantha (Golden Wattle)",
          "Acacia paradoxa (Hedge Wattle)",
          "Pimelea humilis (Common Rice-flower)",
          "Astroloma humifusum (Cranberry Heath)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer: "Herb Layer (grasses & wildflowers)",
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

  "164": {
    description:
      "Creekline Herb-rich Woodland occurs along minor drainage lines and ephemeral creeks, where fertile soils and intermittent moisture support a sparse eucalypt canopy above a highly diverse ground layer of grasses, sedges and forbs. The open shrub layer allows light to reach a herb-rich understorey of orchids, lilies, and tuberous herbs. These corridors are now rare due to grazing, erosion and exotic weeds.",
    recommendations: [
      {
        layer: "Canopy Layer (scattered gums)",
        plants: [
          "Eucalyptus ovata (Swamp Gum)"
        ]
      },
      {
        layer: "Sub-Canopy Layer (large shrubs & trees)",
        plants: [
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer (mixed shrubs)",
        plants: [
          "Acacia stricta (Hop Wattle)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Olearia lirata (Snow Daisy-bush)",
          "Pimelea humilis (Common Rice-flower)",
          "Hovea heterophylla (Common Hovea)",
          "Astroloma humifusum (Cranberry Heath)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Herb Layer (grasses, orchids & forbs)",
        plants: [
          "Pterostylis longifolia s.l. (Tall Greenhood)",
          "Senecio quadridentatus (Cottony Fireweed)",
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
    ]
  },

  "83": {
    description:
      "Swampy Riparian Woodland occupies low-lying stream margins and seasonally waterlogged flats, where fluctuating water tables support a mix of wetland and woodland species. Dominated by Swamp Gum and Peppermint over a patchy shrub layer, it underpins frog habitat and water filtration. This EVC is now rare and vulnerable.",
    recommendations: [
      {
        layer: "Canopy Layer (river-flat gums)",
        plants: [
          "Eucalyptus ovata (Swamp Gum)",
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)"
        ]
      },
      {
        layer: "Sub-Canopy Layer (large shrubs & trees)",
        plants: [
          "Acacia melanoxylon (Blackwood)",
          "Melaleuca ericifolia (Swamp Paperbark)",
          "Leptospermum lanigerum (Woolly Tea-tree)"
        ]
      },
      {
        layer: "Shrub Layer (medium shrubs)",
        plants: [
          "Leptospermum continentale (Prickly Tea-tree)",
          "Coprosma quadrifida (Prickly Currant-bush)",
          "Bursaria spinosa (Sweet Bursaria)"
        ]
      },
      {
        layer: "Herb Layer (sedges, rushes & grasses)",
        plants: [
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
    ]
  },

  "641": {
    description:
      "Riparian Woodland is a tall, open woodland lining rivers, creeks and ephemeral streams on the volcanic plains. Dominated by River Red Gum with an understorey of sedges, rushes and moisture-adapted herbs, these corridors support wildlife, filter runoff and hold cultural significance along waterways.",
    recommendations: [
      {
        layer: "Canopy Layer (river gums)",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer: "Sub-Canopy Layer (large shrubs)",
        plants: [
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer (shrubs & vines)",
        plants: [
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Viminaria juncea (Golden Spray)",
          "Rubus parvifolius (Small-leaf Bramble)"
        ]
      },
      {
        layer: "Herb Layer (sedges, grasses & herbs)",
        plants: [
          "Wahlenbergia gracilis s.s. (Sprawling Bluebell)",
          "Senecio quadridentatus (Cottony Fireweed)",
          "Myriophyllum crispatum (Upright Water-milfoil)",
          "Rumex brownii (Slender Dock)",
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Mentha australis (River Mint)",
          "Acaena novae-zelandiae (Bidgee-widgee)",
          "Dichondra repens (Kidney-weed)",
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

  "851": {
    description:
      "Stream Bank Shrubland grows on rocky or gravelly stream-banks and flood-prone gullies of the volcanic plains. It is defined by shrubs like Sweet Bursaria, Tree Violet and Woolly Tea-tree beneath scattered River Red Gums, with an understorey of rushes, sedges and fast-growing herbs that respond quickly after floods.",
    recommendations: [
      {
        layer: "Canopy Layer (river red-gum)",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer: "Sub-Canopy Layer (large shrubs)",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer (wetland shrubs)",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Hymenanthera dentata s.l. (Tree Violet)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Callistemon sieberi (River Bottlebrush)"
        ]
      },
      {
        layer: "Herb Layer (rushes, sedges & herbs)",
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
          "Juncus procerum s.l. (Water Ribbons)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Ficinia nodosa (Knobby Club-sedge)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  "934": {
    description:
      "Brackish Grassland is a salt-tolerant grassy ecosystem found in low-lying flats of the Gippsland Plain. Dominated by halophytic herbs and low saltbushes, it supports rare orchids, migratory bird habitat and high overall biodiversity despite its sparse appearance. Heavily impacted by drainage and grazing, it is now one of Gippsland’s most threatened ecosystems.",
    recommendations: [
      {
        layer: "Shrub & Succulent Layer (salt-tolerant shrubs)",
        plants: [
          "Sarcocornia quinqueflora (Beaded Glasswort)",
          "Samolus repens (Creeping Brookweed)",
          "Sebaea albidiflora (White Sebaea)",
          "Calocephalus lacteus (Milky Beauty-heads)"
        ]
      },
      {
        layer: "Herb Layer (low herbs & grasses)",
        plants: [
          "Senecio glomeratus (Annual Fireweed)",
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
      if (txt.trim().startsWith("<")) {
        throw new Error("EVC service error. Try again later.");
      }
      return JSON.parse(txt);
    })
    .then(data => {
      if (!data.features?.length) {
        throw new Error("No EVC data found for this location.");
      }
      const pt = turf.point([lon, lat]);
      const feat =
        data.features.find(
          f =>
            f.geometry.type === "Polygon" &&
            turf.booleanPointInPolygon(
              pt,
              turf.polygon(f.geometry.coordinates)
            )
        ) || data.features[0];
      const p = feat.properties;
      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, String(p.evc), lat, lon);
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

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
      row.innerHTML =
        `<h3>${sec.layer}</h3>` +
        "<ul>" +
        sec.plants.map(p => `<li>${p}</li>`).join("") +
        "</ul>";
      plantsDiv.appendChild(row);
    });
    plantsDiv.style.display = "none";  // will be revealed on email submit
  }

  // in-modal mini-map
  if (modalMap) modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // show modal
  const modal = document.getElementById("evc-modal");
  modal.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
