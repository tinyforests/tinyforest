// evc-fetch.js

// — Curated plants data for all prepared EVCs —
const curatedPlants = {
  // EVC 2 – Coast Banksia Woodland
  "2": {
    description:
      "Restricted to coastal dunes behind Coastal Dune Scrub. Dominated by Coast Banksia (Banksia integrifolia) over a medium shrub layer, with an understorey of herbs, sedges and scramblers.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Banksia integrifolia (Coast Banksia)"]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Leucopogon parviflorus (Coast Beard-heath)",
          "Rhagodia candolleana ssp. candolleana (Seaberry Saltbush)",
          "Leptospermum laevigatum (Coast Tea-tree)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Senecio minimus (Shrubby Fireweed)",
          "Haloragis brownii (Swamp Raspwort)",
          "Sambucus gaudichaudiana (White Elderberry)",
          "Viola hederacea (Ivy-leaf Violet)",
          "Lobelia anceps (Angled Lobelia)",
          "Sarcocornia quinqueflora (Beaded Glasswort)",
          "Hydrocotyle sibthorpioides (Shining Pennywort)",
          "Dichondra repens (Kidney-weed)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Pteridium esculentum (Austral Bracken)",
          "Carex appressa (Tall Sedge)"
        ]
      },
      {
        layer: "Scrambler/Climber Layer",
        plants: [
          "Galium australe (Tangled Bedstraw)",
          "Clematis microphylla (Small-leaved Clematis)"
        ]
      }
    ]
  },

  // EVC 3 – Damp Sands Herb-rich Woodland
  "3": {
    description:
      "A low eucalypt forest or open woodland to 15 m tall on deep, well-drained sands, with a rich ground layer of grasses, orchids and forbs in moist gullies and sheltered slopes.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Eucalyptus baxteri s.s. (Brown Stringybark)"]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Acacia melanoxylon (Blackwood)",
          "Exocarpos cupressiformis (Cherry Ballart)",
          "Acacia mearnsii (Black Wattle)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Banksia marginata (Silver Banksia)",
          "Melaleuca squarrosa (Scented Paperbark)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Acacia verticillata (Prickly Moses)",
          "Hibbertia riparia (Erect Guinea-flower)",
          "Hibbertia fasciculata var. prostrata (Bundled Guinea-flower)",
          "Amperea xiphoclada var. xiphoclada (Broom Spurge)",
          "Boronia nana var. nana (Dwarf Boronia)",
          "Xanthosia pusilla spp. agg. (Heath Xanthosia)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Senecio tenuiflorus (Slender Fireweed)",
          "Wahlenbergia gracilis (Sprawling Bluebell)",
          "Veronica gracilis (Slender Speedwell)",
          "Euchiton collinus s.s. (Creeping Cudweed)",
          "Goodenia geniculata (Bent Goodenia)",
          "Lagenophora stipitata (Common Bottle-daisy)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
          "Deyeuxia quadriseta (Reed Bent-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Lomandra nana (Dwarf Mat-rush)",
          "Austrodanthonia setacea (Bristly Wallaby-grass)",
          "Dianella revoluta s.l. (Black-anther Flax-lily)",
          "Poa sieberiana var. sieberiana (Grey Tussock-grass)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Isolepis marginata (Little Club-sedge)",
          "Centrolepis strigosa ssp. strigosa (Hairy Centrolepis)"
        ]
      },
      {
        layer: "Ground Fern & Litter",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler/Climber Layer",
        plants: ["Billardiera scandens var. scandens (Common Apple-berry)"]
      }
    ]
  },

  // EVC 6 – Sand Heathland
  "6": {
    description:
      "A low, open heath on deep siliceous sands, dominated by heath shrubs, sedges and wildflowers such as Epacris, Boronia and Grevillea. Nutrient-poor and fire-prone.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Eucalyptus obliqua (Messmate Stringybark)"]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)",
          "Leptospermum myrsinoides (Heath Tea-tree)",
          "Leptospermum continentale (Prickly Tea-tree)"
        ]
      },
      {
        layer: "Sub-Shrub Layer",
        plants: [
          "Platylobium obtusangulum (Common Flat-pea)",
          "Isopogon ceratophyllus (Horny Cone-bush)",
          "Pimelea humilis (Common Rice-flower)",
          "Tetratheca ciliata (Pink-bells)",
          "Acrotriche serrulata (Honey-pots)",
          "Gompholobium ecostatum (Dwarf Wedge-pea)",
          "Astroloma humifusum (Cranberry Heath)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Goodenia geniculata (Bent Goodenia)",
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Viola cleistogamoides (Hidden Violet)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Austrostipa mollis (Supple Spear-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Schoenus apogon (Common Bog-sedge)",
          "Lepidosperma canescens (Hoary Rapier-sedge)",
          "Austrodanthonia setacea (Bristly Wallaby-grass)",
          "Hypolaena fastigiata (Tassel Rope-rush)",
          "Schoenus breviculmis (Matted Bog-sedge)"
        ]
      },
      {
        layer: "Ground Fern",
        plants: ["Lindsaea linearis (Screw Fern)"]
      },
      {
        layer: "Scrambler/Climber Layer",
        plants: [
          "Cassytha pubescens (Downy Dodder-laurel)",
          "Cassytha glabella (Slender Dodder-laurel)"
        ]
      }
    ]
  },

  // EVC 6_61 – Treed Sand Heathland
  "6_61": {
    description:
      "A variant of Sand Heathland with scattered eucalypts (e.g. Messmate) emerging over typical heath species, often in dune swales or transitional zones.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Eucalyptus obliqua (Messmate Stringybark)"]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Leptospermum myrsinoides (Heath Tea-tree)"
        ]
      },
      {
        layer: "Sub-Shrub Layer",
        plants: [
          "Isopogon ceratophyllus (Horny Cone-bush)",
          "Pimelea humilis (Common Rice-flower)",
          "Platylobium obtusangulum (Common Flat-pea)",
          "Tetratheca ciliata (Pink-bells)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Goodenia geniculata (Bent Goodenia)",
          "Viola cleistogamoides (Hidden Violet)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Austrostipa mollis (Supple Spear-grass)",
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Austrodanthonia setacea (Bristly Wallaby-grass)",
          "Lepidosperma canescens (Hoary Rapier-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Schoenus apogon (Common Bog-sedge)"
        ]
      },
      {
        layer: "Others",
        plants: [
          "Lindsaea linearis (Screw Fern)",
          "Cassytha glabella (Slender Dodder-laurel)",
          "Cassytha pubescens (Downy Dodder-laurel)"
        ]
      }
    ]
  },

  // EVC 8 – Wet Heathland
  "8": {
    description:
      "A treeless heathland on seasonally waterlogged sands and peats, dominated by swamp-loving shrubs, sedges, orchids and carnivorous plants.",
    recommendations: [
      {
        layer: "Shrub Layer",
        plants: [
          "Melaleuca squarrosa (Scented Paperbark)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)"
        ]
      },
      {
        layer: "Sub-Shrub Layer",
        plants: [
          "Leucopogon australis (Spike Beard-heath)",
          "Tetratheca ciliata (Pink-bells)",
          "Dillwynia glaberrima (Smooth Parrot-pea)",
          "Amperea xiphoclada (Broom Spurge)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Gonocarpus tetragynus (Common Raspwort)",
          "Selaginella uliginosa (Swamp Selaginella)",
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Acianthus spp. (Mosquito Orchid)",
          "Goodenia lanata (Trailing Goodenia)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Gymnoschoenus sphaerocephalus (Button Grass)",
          "Gahnia sieberiana (Red-fruit Saw-sedge)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Lepidosperma filiforme (Common Rapier-sedge)",
          "Stylidium graminifolium (Grass Trigger-plant)",
          "Empodisma minus (Spreading Rope-rush)",
          "Schoenus lepidosperma (Slender Bog-sedge)",
          "Tetrarrhena distichophylla (Hairy Rice-grass)",
          "Hypolaena fastigiata (Tassel Rope-rush)"
        ]
      },
      {
        layer: "Ground Ferns",
        plants: [
          "Lindsaea linearis (Screw Fern)",
          "Pteridium esculentum (Austral Bracken)",
          "Lycopodium deuterodensum (Bushy Clubmoss)"
        ]
      },
      {
        layer: "Scrambler/Climber Layer",
        plants: ["Cassytha pubescens (Downy Dodder-laurel)"]
      }
    ]
  },

  // EVC 175 – Grassy Woodland
  "175": {
    description:
      "A variable open eucalypt woodland to 15 m tall (occasionally Sheoak woodland) over a diverse ground layer of grasses and herbs; occurs on moderately fertile gentle slopes and undulating hills.",
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

  // EVC 47 – Valley Grassy Forest
  "47": {
    description:
      "Occurs on lower slopes and valley floors of the Gippsland and Victorian Volcanic plains under moderate rainfall. Open forest to 20 m tall with a rich herb, lily and grass ground layer.",
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
      // …you can add more understorey layers here  
    ]
  },

  // EVC 53 – Swamp Scrub
  "53": {
    description:
      "A dense wetland-edge community on floodplains and swamp margins of Gippsland Plain, dominated by tea-tree, paperbark and coastal bottlebrush over sedges, mosses and ferns.",
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
        layer: "Herb & Sedge Layer",
        plants: [
          "Lycopus australis (Australian Gipsywort)",
          "Lythrum salicaria (Purple Loosestrife)",
          "Persicaria praetermissa (Spotted Knotweed)",
          "Hydrocotyle pterocarpa (Wing Pennywort)",
          "Stellaria angustifolia (Swamp Starwort)",
          "Lobelia anceps (Angled Lobelia)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Juncus procerus (Tall Rush)",
          "Poa labillardierei (Common Tussock-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Phragmites australis (Common Reed)"
        ]
      },
      {
        layer: "Ground Ferns & Others",
        plants: [
          "Blechnum cartilagineum (Gristle Fern)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // EVC 55_61 – Plains Grassy Woodland (VVP variant)
  "55_61": {
    description:
      "An open, sunlit woodland on basalt clays of western Victoria. Scattered River Red-gums and Yellow Gums over a rich ground layer of kangaroo grass, lilies and seasonal herbs.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Eucalyptus camaldulensis (River Red-gum)"]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Acacia pycnantha (Golden Wattle)",
          "Acacia paradoxa (Hedge Wattle)"
        ]
      },
      {
        layer: "Sub-Shrub Layer",
        plants: [
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
          "Acaena echinata (Sheep’s Burr)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
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

  // EVC 56 – Floodplain Riparian Woodland
  "56": {
    description:
      "Occurs along broad, seasonally inundated river valleys of the Gippsland Plain. Tall River Red-gums over a complex understorey of grasses, sedges and moisture-tolerant herbs.",
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
          "Senecio quadridentatus (Cottony Fireweed)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Carex appressa (Tall Sedge)",
          "Poa labillardierei (Common Tussock-grass)",
          "Phragmites australis (Common Reed)"
        ]
      },
      {
        layer: "Scrambler/Climber Layer",
        plants: ["Calystegia sepium (Large Bindweed)"]
      }
    ]
  },

  // EVC 641 – Riparian Woodland
  "641": {
    description:
      "Tall open woodland lining rivers and creeks of the Victorian Volcanic Plain, dominated by River Red-gums with a diverse understorey of sedges, grasses and moisture-adapted herbs.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Eucalyptus camaldulensis (River Red-gum)"]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: ["Acacia melanoxylon (Blackwood)"]
      },
      {
        layer: "Shrub Layer",
        plants: ["Bursaria spinosa ssp. spinosa (Sweet Bursaria)", "Viminaria juncea (Golden Spray)"]
      },
      {
        layer: "Sub-Shrub Layer",
        plants: ["Rubus parvifolius (Small-leaf Bramble)"]
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
          "Acaena novae-zelandiae (Bidgee-widgee)"
        ]
      },
      {
        layer: "Grass & Sedge Layer",
        plants: [
          "Poa labillardierei (Common Tussock-grass)",
          "Carex appressa (Tall Sedge)",
          "Phragmites australis (Common Reed)",
          "Lachnagrostis filiformis var. filiformis (Common Blown-grass)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Eleocharis acuta (Common Spike-sedge)"
        ]
      },
      {
        layer: "Scrambler Layer",
        plants: ["Calystegia sepium (Large Bindweed)"]
      }
    ]
  },

  // EVC 851 – Stream Bank Shrubland
  "851": {
    description:
      "Tall shrubland to 8 m above a ground layer of sedges and herbs, sometimes with a sparse eucalypt overstorey to 15 m. Occurs on rocky or gravelly streambanks, seasonally flooded.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: ["Eucalyptus camaldulensis (River Red-gum)"]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: ["Acacia mearnsii (Black Wattle)", "Acacia melanoxylon (Blackwood)"]
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
          "Oxalis perennans (Grassland Wood-sorrel)"
        ]
      },
      {
        layer: "Sedge & Grass Layer",
        plants: [
          "Poa labillardierei (Common Tussock-grass)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Phragmites australis (Common Reed)",
          "Schoenoplectus tabernaemontani (River Club-sedge)"
        ]
      },
      {
        layer: "Scrambler/Climber Layer",
        plants: ["Calystegia sepium (Large Bindweed)"]
      }
    ]
  },

  // EVC 934 – Brackish Grassland
  "934": {
    description:
      "A salt-tolerant grassland of the Gippsland Plain’s low-lying saline flats and estuarine margins, dominated by halophytic herbs and low sedges, supporting high biodiversity.",
    recommendations: [
      {
        layer: "Herb Layer",
        plants: [
          "Senecio glomeratus (Annual Fireweed)",
          "Sarcocornia quinqueflora (Beaded Glasswort)",
          "Samolus repens (Creeping Brookweed)",
          "Sebaea albidiflora (White Sebaea)",
          "Calocephalus lacteus (Milky Beauty-heads)"
        ]
      },
      {
        layer: "Sub-Shrub Layer",
        plants: ["Selliera radicans (Shiny Swamp-mat)", "Utricularia tenella (Pink Bladderwort)"]
      },
      {
        layer: "Sedge & Grass Layer",
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
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

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

  // Show modal & fix sizing
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
