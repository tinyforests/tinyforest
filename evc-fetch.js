// evc-fetch.js

// — Curated plants data (all EVCs you’ve supplied) —
const curatedPlants = {
  // 2 – Coast Banksia Woodland
  "2": {
    description:
      "Coast Banksia Woodland grows on sandy soils behind coastal dunes, dominated by Banksia integrifolia with a patchy eucalypt canopy. The understorey includes grasses, climbers, and salt-tolerant shrubs, adapted to wind, salt, and low nutrients. These woodlands once extended across the Mornington Peninsula and Port Phillip coast but are now reduced to fragmented reserves.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Banksia integrifolia (Coast Banksia)"
        ]
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
          "Dichondra repens (Kidney-weed)",
          "Pteridium esculentum (Austral Bracken)",
          "Galium australe (Tangled Bedstraw)",
          "Clematis microphylla (Small-leaved Clematis)"
        ]
      }
    ]
  },

  // 3 – Damp Sands Herb-rich Woodland
  "3": {
    description:
      "Found on deep, well-drained sandy soils, this woodland supports a canopy of Messmate or Swamp Gum over a rich ground layer of grasses, orchids, and forbs. It thrives in moist gullies and sheltered slopes with high plant diversity and seasonal colour. Sensitive to grazing and fire regime changes.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus baxteri s.s. (Brown Stringybark)"
        ]
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
          "Wahlenbergia gracilis s.s. (Sprawling Bluebell)",
          "Veronica gracilis (Slender Speedwell)",
          "Euchiton collinus s.s. (Creeping Cudweed)",
          "Goodenia geniculata (Bent Goodenia)",
          "Lagenophora stipitata (Common Bottle-daisy)",
          "Nertera granadensis (Matted Nertera)",
          "Opercularia varia (Variable Stinkweed)",
          "Hydrocotyle laxiflora (Stinking Pennywort)",
          "Kennedia prostrata (Running Postman)",
          "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
          "Deyeuxia quadriseta (Reed Bent-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Lomandra nana (Dwarf Mat-rush)",
          "Austrodanthonia setacea (Bristly Wallaby-grass)",
          "Dianella revoluta s.s. (Black-anther Flax-lily)",
          "Poa sieberiana var. sieberiana (Grey Tussock-grass)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Isolepis marginata (Little Club-sedge)",
          "Centrolepis strigosa ssp. strigosa (Hairy Centrolepis)",
          "Pteridium esculentum (Austral Bracken)",
          "Billardiera scandens var. scandens (Common Apple-berry)"
        ]
      }
    ]
  },

  // 6 – Sand Heathland
  "6": {
    description:
      "A low, open heath community on deep siliceous sands, this EVC features heath shrubs, sedges, and heathy wildflowers like Epacris, Boronia, and Grevillea. It is nutrient-poor, fire-prone, and rich in insect life, especially native bees and butterflies.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus obliqua (Messmate Stringybark)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)",
          "Leptospermum myrsinoides (Heath Tea-tree)",
          "Leptospermum continentale (Prickly Tea-tree)",
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
          "Viola cleistogamoides (Hidden Violet)",
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Austrostipa mollis (Supple Spear-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Schoenus apogon (Common Bog-sedge)",
          "Lepidosperma canescens (Hoary Rapier-sedge)",
          "Austrodanthonia setacea (Bristly Wallaby-grass)",
          "Hypolaena fastigiata (Tassel Rope-rush)",
          "Schoenus breviculmis (Matted Bog-sedge)",
          "Lindsaea linearis (Screw Fern)",
          "Cassytha pubescens s.s. (Downy Dodder-laurel)",
          "Cassytha glabella (Slender Dodder-laurel)"
        ]
      }
    ]
  },

  // 6_61 – Treed Sand Heathland
  "6_61": {
    description:
      "A variant of Sand Heathland where scattered eucalypts emerge over typical heath species. Trees like Messmate, Brown Stringybark, or Swamp Gum dot the landscape. It bridges forest and heathland habitats, often occurring in transitional zones or dune swales.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus obliqua (Messmate Stringybark)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Banksia marginata (Silver Banksia)",
          "Epacris impressa (Common Heath)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Leptospermum myrsinoides (Heath Tea-tree)",
          "Isopogon ceratophyllus (Horny Cone-bush)",
          "Pimelea humilis (Common Rice-flower)",
          "Platylobium obtusangulum (Common Flat-pea)",
          "Tetratheca ciliata (Pink-bells)",
          "Acrotriche serrulata (Honey-pots)",
          "Astroloma humifusum (Cranberry Heath)",
          "Gompholobium ecostatum (Dwarf Wedge-pea)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Goodenia geniculata (Bent Goodenia)",
          "Viola cleistogamoides (Hidden Violet)",
          "Austrostipa mollis (Supple Spear-grass)",
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Austrodanthonia setacea (Bristly Wallaby-grass)",
          "Lepidosperma canescens (Hoary Rapier-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Schoenus apogon (Common Bog-sedge)",
          "Lindsaea linearis (Screw Fern)",
          "Cassytha glabella (Slender Dodder-laurel)",
          "Cassytha pubescens s.s. (Downy Dodder-laurel)"
        ]
      }
    ]
  },

  // 8 – Wet Heathland
  "8": {
    description:
      "This EVC occupies poorly drained sandy soils and peaty flats. Dominated by swamp-loving heath species, sedges, and tea-trees, it supports diverse flora including orchids and carnivorous plants. Often waterlogged in winter and dry in summer.",
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
        layer: "Herb Layer",
        plants: [
          "Leucopogon australis (Spike Beard-heath)",
          "Tetratheca ciliata (Pink-bells)",
          "Dillwynia glaberrima (Smooth Parrot-pea)",
          "Amperea xiphoclada var. xiphoclada (Broom Spurge)",
          "Xanthosia dissecta s.l. (Cut-leaf Xanthosia)",
          "Acrotriche serrulata (Honey-pots)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Selaginella uliginosa (Swamp Selaginella)",
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Acianthus spp. (Mosquito Orchid)",
          "Goodenia lanata (Trailing Goodenia)",
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Gymnoschoenus sphaerocephalus (Button Grass)",
          "Gahnia sieberiana (Red-fruit Saw-sedge)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Lepidosperma filiforme (Common Rapier-sedge)",
          "Stylidium graminifolium s.s. (Grass Trigger-plant)",
          "Empodisma minus (Spreading Rope-rush)",
          "Schoenus lepidosperma (Slender Bog-sedge)",
          "Tetrarrhena distichophylla (Hairy Rice-grass)",
          "Hypolaena fastigiata (Tassel Rope-rush)",
          "Lindsaea linearis (Screw Fern)",
          "Pteridium esculentum (Austral Bracken)",
          "Lycopodium deuterodensum (Bushy Clubmoss)",
          "Cassytha pubescens s.s. (Downy Dodder-laurel)"
        ]
      }
    ]
  },

  // 9 – Coastal Saltmarsh
  "9": {
    description:
      "Located in the intertidal zone, this EVC features succulent herbs and salt-tolerant shrubs like Sarcocornia, Suaeda, and Tecticornia. Crucial for shorebird habitat and tidal filtration, Coastal Saltmarsh is highly sensitive to hydrological change and coastal development.",
    recommendations: [
      // your saltmarsh species go here
    ]
  },

  // 10 – Estuarine Wetland
  "10": {
    description:
      "Estuarine Wetland is a brackish to saline wetland system found where tidal estuaries meet floodplains. It includes salt-tolerant reeds, sedges, and succulent herbs adapted to fluctuating salinity and water levels. Dominant species include Phragmites australis and Sarcocornia quinqueflora. These wetlands are vital nurseries for fish, feeding grounds for migratory birds, and natural filters for coastal catchments. Now threatened by reclamation, pollution, and hydrological alteration.",
    recommendations: [
      {
        layer: "Shrub Layer",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Persicaria decipiens (Slender Knotweed)",
          "Samolus repens (Creeping Brookweed)",
          "Lobelia anceps (Angled Lobelia)",
          "Selliera radicans (Shiny Swamp-mat)",
          "Crassula helmsii (Swamp Crassula)",
          "Mimulus repens (Creeping Monkey-flower)",
          "Leptinella reptans s.l. (Creeping Cotula)",
          "Poa labillardierei (Common Tussock-grass)",
          "Phragmites australis (Common Reed)",
          "Triglochin striatum (Streaked Arrowgrass)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // 16 – Lowland Forest
  "16": {
    description:
      "Lowland Forest is a tall, open eucalypt forest that grows on moderately fertile soils in lower elevation foothills and flats. Dominated by Messmate, Mountain Grey Gum, or Swamp Gum, its understorey includes a mix of shrubs, grasses, ferns, and wildflowers. These forests support a wide range of birdlife, fungi, and insects and are adapted to moderate fire regimes. Once extensive across southern Victoria, they are now fragmented by agriculture and plantation forestry.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus obliqua (Messmate Stringybark)",
          "Eucalyptus willisii (Shining Peppermint)",
          "Eucalyptus baxteri s.s. (Brown Stringybark)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Exocarpos cupressiformis (Cherry Ballart)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Leptospermum continentale (Prickly Tea-tree)",
          "Correa reflexa (Common Correa)",
          "Banksia marginata (Silver Banksia)",
          "Acacia verticillata (Prickly Moses)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Senecio tenuiflorus (Slender Fireweed)",
          "Dipodium punctatum s.l. (Hyacinth Orchid)",
          "Senecio glomeratus (Annual Fireweed)",
          "Viola hederacea (Ivy-leaf Violet)",
          "Burchardia umbellata (Milkmaids)",
          "Helichrysum scorpioides (Button Everlasting)",
          "Lagenophora stipitata (Common Bottle-daisy)",
          "Hydrocotyle laxiflora (Stinking Pennywort)",
          "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
          "Deyeuxia quadriseta (Reed Bent-grass)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Austrostipa muelleri (Wiry Spear-grass)",
          "Dianella revoluta s.s. (Black-anther Flax-lily)",
          "Lepidosperma filiforme (Common Rapier-sedge)",
          "Dichelachne rara (Common Plume-grass)",
          "Poa morrisii (Soft Tussock-grass)",
          "Poa tenera (Slender Tussock-grass)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Pteridium esculentum (Austral Bracken)",
          "Cassytha pubescens s.s. (Downy Dodder-laurel)",
          "Billardiera scandens (Common Apple-berry)",
          "Comesperma volubile (Love Creeper)",
          "Clematis aristata (Mountain Clematis)"
        ]
      }
    ]
  },

  // 18 – Riparian Forest
  "18": {
    description:
      "Riparian Forest occurs along permanent or semi-permanent streams in sheltered valleys and lower slopes. Dominated by Manna Gum, Mountain Ash, or Silver Wattle, it features a complex understorey of ferns, grasses, and moisture-loving herbs. These forests serve as wildlife corridors, filter runoff, and are vital for flood resilience.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus viminalis (Manna Gum)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Pomaderris aspera (Hazel Pomaderris)",
          "Acacia melanoxylon (Blackwood)",
          "Notelaea ligustrina (Privet Mock-olive)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Olearia lirata (Snowy Daisy-bush)",
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Melaleuca squarrosa (Scented Paperbark)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Urtica incisa (Scrub Nettle)",
          "Austrocynoglossum latifolium (Forest Hound's-tongue)",
          "Lobelia pedunculata s.l. (Matted Pratia)",
          "Lobelia pratioides (Poison Lobelia)",
          "Gahnia clarkei (Tall Saw-sedge)",
          "Lepidosperma laterale var. majus (Variable Sword-sedge)",
          "Carex appressa (Tall Sedge)",
          "Poa ensiformis (Sword Tussock-grass)",
          "Carex gaudichaudiana (Fen Sedge)",
          "Isolepis inundata (Swamp Club-sedge)",
          "Poa tenera (Slender Tussock-grass)",
          "Pteridium esculentum (Austral Bracken)",
          "Blechnum wattsii (Hard Water-fern)",
          "Blechnum nudum (Fishbone Water-fern)",
          "Clematis aristata (Mountain Clematis)"
        ]
      }
    ]
  },

  // 20 – Heathy Dry Forest
  "20": {
    description:
      "Heathy Dry Forest grows on nutrient-poor soils and is characterised by stringybark eucalypts and a dense understorey of heaths, peas, and grasses. Common species include Brown Stringybark and Blackwood. It supports high biodiversity and responds strongly to fire cycles.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus goniocalyx s.l. (Bundy)",
          "Eucalyptus macrorhyncha (Red Stringybark)",
          "Eucalyptus dives (Broad-leaved Peppermint)",
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Monotoca scoparia (Prickly Broom-heath)",
          "Acacia pycnantha (Golden Wattle)",
          "Acacia paradoxa (Hedge Wattle)",
          "Phyllanthus hirtellus (Thyme Spurge)",
          "Hovea heterophylla (Common Hovea)",
          "Leucopogon virgatus (Common Beard-heath)",
          "Tetratheca labillardierei (Glandular Pink-bells)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Senecio tenuiflorus (Slender Fireweed)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Wahlenbergia gracilis s.l. (Sprawling Bluebell)",
          "Opercularia varia (Variable Stinkweed)",
          "Goodenia lanata (Trailing Goodenia)",
          "Joycea pallida (Silvertop Wallaby-grass)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Stylidium graminifolium s.l. (Grass Trigger-plant)",
          "Poa sieberiana (Grey Tussock-grass)",
          "Microlaena stipoides var. stipoides (Weeping Grass)"
        ]
      }
    ]
  },

  // 21 – Shrubby Dry Forest
  "21": {
    description:
      "Found on rocky, well-drained ridges and slopes, this EVC has a sparse eucalypt canopy (such as Red Ironbark) above a rich shrub layer of wattles, peas, and tea-trees. It provides habitat for small mammals, honeyeaters, and invertebrates and thrives under low-intensity fire regimes.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus tricarpa (Red Ironbark)",
          "Eucalyptus baxteri (Brown Stringybark)",
          "Eucalyptus polyanthemos (Red Box)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Acacia pycnantha (Golden Wattle)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Spyridium parvifolium (Dusty Miller)",
          "Acacia myrtifolia (Myrtle Wattle)",
          "Daviesia leptophylla (Narrow-leaf Hop-bush)",
          "Pultenaea daphnoides (Large-leaf Bush-pea)",
          "Hibbertia stricta s.l. (Upright Guinea-flower)",
          "Platylobium obtusangulum (Common Flat-pea)",
          "Isopogon ceratophyllus (Horny Cone-bush)",
          "Pultenaea humilis (Dwarf Bush-pea)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Xanthorrhoea australis (Austral Grass-tree)",
          "Joycea pallida (Silvertop Wallaby-grass)",
          "Dianella revoluta (Black-anther Flax-lily)",
          "Lepidosperma semiteres (Wire Rapier-sedge)",
          "Poa australis spp. agg. (Tussock Grass)"
        ]
      }
    ]
  },

  // 22 – Grassy Dry Forest
  "22": {
    description:
      "Grassy Dry Forest is a light-filled forest on lower slopes and ranges, where open canopies of Yellow Box, Red Box, or Broad-leaved Peppermint shelter a grassy understorey. Lacking dense shrubs, it’s dominated by wallaby grasses, wildflowers, and sun orchids.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus macrorhyncha (Red Stringybark)",
          "Eucalyptus goniocalyx s.l. (Bundy)",
          "Eucalyptus obliqua (Messmate Stringybark)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Epacris impressa (Common Heath)",
          "Hovea heterophylla (Common Hovea)",
          "Pimelea humilis (Common Rice-flower)",
          "Acacia aculeatissima (Thin-leaf Wattle)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Senecio tenuiflorus (Slender Fireweed)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Viola hederacea (Ivy-leaf Violet)",
          "Hypericum gramineum (Small St John's Wort)",
          "Dichondra repens (Kidney-weed)",
          "Hydrocotyle laxiflora (Stinking Pennywort)",
          "Goodenia lanata (Trailing Goodenia)",
          "Joycea pallida (Silvertop Wallaby-grass)",
          "Poa sieberiana (Grey Tussock-grass)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Dianella revoluta s.l. (Black-anther Flax-lily)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Pteridium esculentum (Austral Bracken)",
          "Hardenbergia violacea (Purple Coral-pea)"
        ]
      }
    ]
  },

  // 23 – Herb-rich Foothill Forest
  "23": {
    description:
      "This diverse forest occurs on moderate slopes with fertile loamy soils. A tall canopy of Messmate (Eucalyptus obliqua), Mountain Grey Gum (Eucalyptus cypellocarpa), and Manna Gum (Eucalyptus viminalis) shades a lush understorey teeming with grasses, ferns, orchids, lilies, and tuberous herbs. The open structure and rich plant diversity are the result of regular low-intensity fire, shallow nutrient cycling, and a long history of Aboriginal land care. Though less common now due to logging and fragmentation, this EVC remains a stronghold of southern Victoria’s botanical richness.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus ovata (Swamp Gum)",
          "Eucalyptus obliqua (Messmate Stringybark)",
          "Eucalyptus viminalis ssp. viminalis (Manna Gum)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Acacia melanoxylon (Blackwood)",
          "Leptospermum continentale (Prickly Tea-tree)",
          "Acacia verticillata (Prickly Moses)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Bursaria spinosa (Sweet Bursaria)",
          "Pimelea humilis (Common Rice-flower)",
          "Hibbertia riparia (Erect Guinea-flower)",
          "Bossiaea prostrata (Creeping Bossiaea)",
          "Acrotriche serrulata (Honey-pots)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Senecio tenuiflorus (Slender Fireweed)",
          "Pterostylis longifolia s.l. (Tall Greenhood)",
          "Euchiton collinus s.s. (Creeping Cudweed)",
          "Hypericum gramineum (Small St John's Wort)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Viola hederacea (Ivy-leaf Violet)",
          "Hydrocotyle laxiflora (Stinking Pennywort)",
          "Juncus procerus (Tall Rush)",
          "Lepidosperma laterale var. majus (Variable Sword-sedge)",
          "Deyeuxia quadriseta (Reed Bent-grass)",
          "Lepidosperma longitudinale (Pithy Sword-sedge)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Lomandra sororia (Small Mat-rush)",
          "Lepidosperma laterale var. laterale (Variable Sword-sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Pteridium esculentum (Austral Bracken)",
          "Clematis aristata (Mountain Clematis)",
          "Billardiera scandens (Common Apple-berry)"
        ]
      }
    ]
  },

  // 45 – Shrubby Foothill Forest
  "45": {
    description:
      "Shrubby Foothill Forest is a tall eucalypt forest that grows on upper slopes and ridges, typically featuring a canopy of Messmate and Broad-leaved Peppermint above a dense and diverse shrubby understorey of wattles, peas, and tea-trees. The ground layer includes ferns, lilies, and native grasses, forming a structurally rich habitat that supports birds, insects, and small mammals. It responds well to low-intensity fire and forms part of a mosaic with both dry and wet forest types across foothill landscapes.",
    recommendations: [
      // plant list to drop in when ready
    ]
  },

  // 47 – Valley Grassy Forest
  "47": {
    description:
      "Valley Grassy Forest is a species-rich open forest that occurs on lower slopes, valleys, and gentle rises with fertile soils and moderate rainfall. It typically features a tall but scattered canopy of Candlebark, Swamp Gum, or Messmate over a diverse ground layer of tussock grasses, lilies, orchids, and herbs. Shrubs are generally sparse, allowing for a light-filled understory that bursts into colour in spring. Once common across central and eastern Victoria, this forest type is now vulnerable due to agriculture, weed pressure, and soil disturbance.",
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
          "Acacia mearnsii (Black Wattle)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Myoporum sp. 1 (Sticky Boobialla)",
          "Acacia pycnantha (Golden Wattle)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Pimelea humilis (Common Rice-flower)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Veronica gracilis (Slender Speedwell)",
          "Poranthera microphylla (Small Poranthera)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Drosera peltata ssp. auriculata (Tall Sundew)",
          "Solenogyne dominii (Smooth Solenogyne)",
          "Oxalis corniculata s.l. (Yellow Wood-sorrel)",
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

  // 48 – Heathy Woodland
  "48": {
    description: "",
    recommendations: []
  },

  // 53 – Swamp Scrub
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
          "Dichondra repens (Kidney-weed)",
          "Apium prostratum ssp. prostratum (Sea Celery)",
          "Juncus procerus (Tall Rush)",
          "Poa labillardierei (Common Tussock-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Phragmites australis (Common Reed)",
          "Schoenoplectus tabernaemontani (River Club-sedge)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Ficinia nodosa (Knobby Club-sedge)",
          "Calystegia sepium (Large Bindweed)",
          "Blechnum cartilagineum (Gristle Fern)"
        ]
      }
    ]
  },

  // 55 – Plains Grassy Woodland (Gippsland Plain variant)
  "55": {
    description:
      "A scattered woodland on fertile plains, typically with River Red Gum, Yellow Box, or Grey Box above a grassy and herb-rich ground layer. Often lacks a dense shrub layer, allowing high light penetration that supports a wide variety of native wildflowers. Once widespread across Victoria’s volcanic and sedimentary plains, less than 3% remains, making its remnants vital for the survival of woodland birds, native bees, and grassland flora.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus tereticornis ssp. mediana (Gippsland Red-gum)",
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Allocasuarina littoralis (Black Sheoak)",
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Kunzea ericoides (Burgan)",
          "Pimelea humilis (Common Rice-flower)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Hypericum gramineum (Small St John's Wort)",
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Dichondra repens (Kidney-weed)",
          "Poranthera microphylla (Small Poranthera)",
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

  // 55_61 – Plains Grassy Woodland (Volcanic Plain variant)
  "55_61": {
    description:
      "Plains Grassy Woodland is an open, sunlit woodland once widespread across the heavy basalt clays of western Victoria. Scattered River Red Gums, Grey Box, and Yellow Gums form a broad canopy over a ground layer rich with kangaroo grass, native lilies, wildflowers, and seasonal herbs. This EVC thrives in landscapes with seasonal waterlogging and cracking clay soils, and is shaped by a long history of fire management and Aboriginal cultivation. Today, less than 3% of this ecosystem remains, making it one of Victoria’s most threatened woodland communities. With a low shrub layer and high herb diversity, Plains Grassy Woodland forms a vital link between grassland and forest — a spacious, grassy ecosystem built on story, fire, and deep time.",
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
          "Hymenanthera dentata s.l. (Tree Violet)",
          "Leptospermum lanigerum (Woolly Tea-tree)"
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

  // 56 – Floodplain Riparian Woodland
  "56": {
    description:
      "Floodplain Riparian Woodland occurs on the seasonally flooded river flats and lower terraces of large watercourses, often forming a transition between wetland and drier woodland types. It is typically dominated by River Red Gum (Eucalyptus camaldulensis) with a sparse to moderate shrub layer of Blackwood, River Bottlebrush, or Sweet Bursaria, and a diverse understorey of grasses, sedges, and herbs. These woodlands are crucial for bank stability, flood mitigation, and as faunal corridors, but have been heavily impacted by river regulation, weed invasion, and grazing.",
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
          "Juncus amabilis (Hollow Rush)",
          "Cyperus spp. (Flat-sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Eleocharis acuta (Common Spike-sedge)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // 61 – Box–Ironbark Forest
  "61": { description: "", recommendations: [] },

  // 64 – Rocky Chenopod Woodland
  "64": { description: "", recommendations: [] },

  // 67 – Alluvial Terraces Herb-rich Woodland
  "67": { description: "", recommendations: [] },

  // 68 – Creekline Grassy Woodland
  "68": { description: "", recommendations: [] },

  // 71 – Hills Herb-rich Woodland
  "71": { description: "", recommendations: [] },

  // 72 – Granitic Hills Woodland
  "72": { description: "", recommendations: [] },

  // 83 – Swampy Riparian Woodland
  "83": {
    description:
      "Swampy Riparian Woodland occupies low-lying stream margins and seasonally waterlogged flats, where fluctuating water tables support a mix of wetland and woodland species. Dominated by Swamp Gum (Eucalyptus ovata) and sometimes River Red Gum, it has a patchy understorey of sedges, tussock grasses, and moisture-loving herbs, with scattered shrubs such as wattles or wiry tea-tree. These systems are important for frog habitat, water filtration, and as biolinks, but are now rare and vulnerable due to drainage, pasture conversion, and erosion.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus ovata (Swamp Gum)",
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Acacia melanoxylon (Blackwood)",
          "Melaleuca ericifolia (Swamp Paperbark)",
          "Leptospermum lanigerum (Woolly Tea-tree)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Leptospermum continentale (Prickly Tea-tree)",
          "Coprosma quadrifida (Prickly Currant-bush)",
          "Bursaria spinosa (Sweet Bursaria)"
        ]
      },
      {
        layer: "Herb Layer",
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

  // 104 – Lignum Swamp
  "104": { description: "", recommendations: [] },

  // 125 – Plains Grassy Wetland
  "125": { description: "", recommendations: [] },

  // 128 – Grassy Forest
  "128": { description: "", recommendations: [] },

  // 132_61 – Heavier-soils Plains Grassland
  "132_61": { description: "", recommendations: [] },

  // 132_63 – Low-rainfall Plains Grassland
  "132_63": { description: "", recommendations: [] },

  // 164 – Creekline Herb-rich Woodland
  "164": {
    description:
      "Creekline Herb-rich Woodland occurs along minor drainage lines and ephemeral creeks on fertile soils, where intermittent flows create moist microhabitats ideal for herbaceous diversity. A sparse eucalypt canopy—often Swamp Gum, Manna Gum, or Snow Gum—sits above an open shrub layer or none at all, allowing sunlight to nourish a vibrant ground cover of grasses, sedges, and wildflowers. This EVC provides crucial ecological functions such as water filtration, erosion control, and habitat for frogs, insects, and small mammals.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus rubida (Candlebark)",
          "Eucalyptus viminalis (Manna Gum)",
          "Eucalyptus ovata (Swamp Gum)",
          "Eucalyptus radiata ssp. radiata (Narrow-leaf Peppermint)"
        ]
      },
      {
        layer: "Sub-Canopy Layer",
        plants: [
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Leptospermum continentale (Prickly Tea-tree)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Cassinia aculeata (Common Cassinia)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Senecio minimus (Shrubby Fireweed)",
          "Senecio linearifolius (Fireweed Groundsel)",
          "Lobelia anceps (Angled Lobelia)",
          "Senecio sp. aff. tenuiflorus (Beaked Fireweed)",
          "Oxalis exilis (Shady Wood-sorrel)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Poa labillardierei (Common Tussock-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Poa clelandii (Noah's Ark)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Imperata cylindrica (Blady Grass)",
          "Pteridium esculentum (Austral Bracken)",
          "Adiantum aethiopicum (Common Maidenhair)",
          "Glycine clandestina (Twining Glycine)"
        ]
      }
    ]
  },

  // 175 – Grassy Woodland
  "175": {
    description:
      "Grassy Woodland is a scattered open woodland found on gentle slopes and undulating plains, typically with a sparse canopy of Grey Box, Yellow Box, or Red Gum over a species-rich ground layer of grasses, lilies, and wildflowers. The shrub layer is usually sparse, giving way to a light-filled understorey dominated by Themeda triandra (Kangaroo Grass) and seasonal herbs. Once widespread across the Victorian Volcanic Plain, this community has been heavily cleared, with remnants now vital for supporting threatened woodland birds and grassland invertebrates.",
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

  // 641 – Riparian Woodland
  "641": {
    description:
      "Riparian Woodland is a tall, open woodland that lines the banks of rivers, creeks, and ephemeral streams, particularly those that flow across Victoria’s volcanic plains. It is dominated by River Red Gums, with a diverse understorey of sedges, grasses, and moisture-adapted herbs. These woodlands thrive in seasonally flooded soils, and act as corridors for wildlife, water filtration, and cultural passage. Once common along waterways such as Merri Creek, Moonee Ponds Creek, and Werribee River, Riparian Woodland has been severely fragmented and degraded, especially in urban areas. Today, it is a priority for both ecological restoration and cultural renewal.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
      },
      {
        layer: "Shrub Layer",
        plants: [
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer: "Herb Layer",
        plants: [
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Viminaria juncea (Golden Spray)",
          "Rubus parvifolius (Small-leaf Bramble)",
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
          "Triglochin procerum (Water-ribbons)",
          "Eleocharis acuta (Common Spike-sedge)",
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // 851 – Stream Bank Shrubland
  "851": {
    description:
      "Stream Bank Shrubland grows along rocky creeks and flood-prone gullies, where Sweet Bursaria, Tree Violet, and Silver Wattle form dense shrub layers. This narrow EVC hugs seasonal waterways and supports sedges, rushes, and herbs adapted to disturbance. A vital habitat corridor, it is now rare due to stream modification, grazing, and weed invasion.",
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red-gum)"
        ]
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

  // 934 – Brackish Grassland
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
  // Legacy map (hidden via CSS)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Address lookup
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // Email gate: reveal plants on submit
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
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => {
      if (!r.ok) throw new Error(`Geocode failed (${r.status})`);
      return r.json();
    })
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const [lat, lon] = [+results[0].lat, +results[0].lon];
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
        url  = "https://opendata.maps.vic.gov.au/geoserver/wfs" +
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
      const pt   = turf.point([lon, lat]),
            feat = data.features.find(f =>
                     f.geometry.type === "Polygon" &&
                     turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
                   ) || data.features[0],
            p    = feat.properties;

      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  document.getElementById("modal-evc-name").textContent   = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "Not specified";
  document.getElementById("modal-evc-region").textContent = region || "Not specified";
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
        `<ul>${sec.plants.map(p => `<li>${p}</li>`).join("")}</ul>`;
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
