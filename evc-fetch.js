// evc-fetch.js

// — Curated plants data for all EVCs —
const curatedPlants = {
  // Grassy Woodland (EVC 175)
  "175": {
    description: `
Grassy Woodland is a lightly treed, herb-rich ecosystem once widespread across the undulating volcanic plains of western and central Victoria. It features scattered eucalypts, especially Grey Box and Yellow Gum, over an open ground layer rich with native grasses, wildflowers, and tuberous lilies. On fertile soils, this ecosystem bursts into colour through spring and early summer.

It is highly threatened, with most remnants cleared for agriculture. Today, only small, fragmented patches remain, often along roadsides, rail reserves, and public lands. Grassy Woodland holds immense value for pollinators, woodland birds, and traditional seasonal foods.
    `.trim(),
    recommendations: [
      {
        layer:
          "Canopy Layer (tall, mature trees providing shade, regulating temperature, and supporting wildlife)",
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
          "Sub-Canopy Layer (shorter trees beneath the canopy contributing to structure and biodiversity)",
        plants: [
          "Bursaria spinosa (Sweet Bursaria)",
          "Cassinia arcuata (Drooping Cassinia)",
          "Acacia pycnantha (Golden Wattle)",
          "Hymenanthera dentata s.l. (Tree Violet)"
        ]
      },
      {
        layer:
          "Shrub Layer (various shrubs offering habitat and food for smaller animals and insects)",
        plants: [
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

  // Stream Bank Shrubland (EVC 851)
  "851": {
    description: `
This rare and endangered plant community once lined the small rivers and ephemeral creeks of Victoria’s volcanic plains. Shaped by flood and stone, Stream Bank Shrubland thrives in rocky or gravelly streambeds where water flows seasonally. It’s defined by tall, moisture-loving shrubs like Sweet Bursaria, Tree Violet, and Silver Wattle, often beneath a scattered overstorey of River Red Gum.

These green ribbons form vital ecological corridors, supporting movement across otherwise cleared or open landscapes. The understory hosts sedges, grasses, and fast-growing herbs that respond quickly to flood or disturbance. Restoring this EVC brings back habitat, resilience, and cultural continuity to waterways across the volcanic plain.
    `.trim(),
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

  // Plains Grassy Woodland (EVC 55_61 – Victorian Volcanic Plain)
  "55_61": {
    description: `
Plains Grassy Woodland is an open, sunlit woodland once widespread across the heavy basalt clays of western Victoria. Scattered River Red Gums, Grey Box, and Yellow Gums form a broad canopy over a ground layer rich with kangaroo grass, native lilies, wildflowers, and seasonal herbs. This EVC thrives in landscapes with seasonal waterlogging and cracking clay soils, and is shaped by a long history of fire management and Aboriginal cultivation.

Today, less than 3% of this ecosystem remains, making it one of Victoria’s most threatened woodland communities. With a low shrub layer and high herb diversity, Plains Grassy Woodland forms a vital link between grassland and forest — a spacious, grassy ecosystem built on story, fire, and deep time.
    `.trim(),
    recommendations: [
      {
        layer: "Canopy Layer",
        plants: [
          "Eucalyptus camaldulensis (River Red-Gum)",
          "Grey Box (Eucalyptus microcarpa)",
          "Eucalyptus leucoxylon (Yellow Gum)"
        ]
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
          "Acaena echinata (Sheep's Burr)",
          "Microlaena stipoides var. stipoides (Weeping Grass)"
        ]
      },
      {
        layer: "Graminoid Layer",
        plants: [
          "Austrostipa mollis (Supple Spear-grass)",
          "Austrostipa bigeniculata (Kneed Spear-grass)",
          "Themeda triandra (Kangaroo Grass)",
          "Elymus scaber var. scaber (Common Wheat-grass)"
        ]
      }
    ]
  },

  // Swamp Scrub (EVC 53 – Gippsland Plain)
  "53": {
    description: `
Swamp Scrub is a dense, wetland-edge vegetation community found across the low-lying floodplains, soaks, and swamp margins of the Gippsland Plain. It’s dominated by thickets of woolly tea-tree, swamp paperbark, and coastal bottlebrush, often growing around permanent or seasonal wetlands.

Beneath the tangled canopy, the ground is cool and shaded, supporting sedges, mosses, and ferns adapted to waterlogged soils. These scrubs play a vital role in water purification, erosion control, and wildlife habitat. Once common across Gippsland, Swamp Scrub is now classified as endangered, with most remnants surviving in small, fragmented pockets near creeks, estuaries, and floodplain depressions.
    `.trim(),
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
          "Lobelia anceps (Angled Lobelia)"
        ]
      },
      {
        layer: "Graminoid Layer",
        plants: [
          "Crassula helmsii (Swamp Crassula)",
          "Juncus procerus (Tall Rush)",
          "Poa labillardierei (Common Tussock-grass)",
          "Gahnia radula (Thatch Saw-sedge)",
          "Phragmites australis (Common Reed)",
          "Baumea rubiginosa s.l. (Soft Twig-rush)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Juncus gregiflorus (Green Rush)",
          "Eleocharis acuta (Common Spike-sedge)"
        ]
      },
      {
        layer: "Fern Layer",
        plants: [
          "Blechnum cartilagineum (Gristle Fern)"
        ]
      },
      {
        layer: "Climber Layer",
        plants: [
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // Brackish Grassland (EVC 934 – Gippsland Plain)
  "934": {
    description: `
Brackish Grassland is a salt-tolerant grassy ecosystem found in low-lying areas of the Gippsland Plain, where saline groundwater or estuarine flooding influences the soil. These open, wind-exposed grasslands are dominated by saltbushes, low sedges, and halophytic herbs, with few or no trees.

Though sparse in appearance, this EVC supports high biodiversity, including rare orchids, seasonal wetland species, and migratory bird habitat. Brackish Grassland is highly threatened, with much of its extent cleared, drained, or grazed. Its remaining fragments survive in coastal flats, behind dunes, and around salt lakes, telling stories of salinity, resilience, and edge-dwelling.
    `.trim(),
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
          "Utricularia tenella (Pink Bladderwort)"
        ]
      },
      {
        layer: "Graminoid Layer",
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
  },

  // Floodplain Riparian Woodland (EVC 56 – Gippsland Plain)
  "56": {
    description: `
Floodplain Riparian Woodland occurs along the broad, seasonally inundated river valleys of the Gippsland Plain — including the Avon, Latrobe, Mitchell, and Thomson Rivers.

These woodlands are shaped by floods, sediment, and groundwater, supporting tall River Red Gums over a complex understorey of grasses, sedges, and moisture-tolerant herbs. The canopy provides critical habitat for birds, gliders, and microbats, while the ground layer responds dynamically to both flood and fire.

Much of this ecosystem has been lost to clearing, levee construction, or grazing. Today, it remains in narrow bands along rivers — holding ecological richness and cultural knowledge in its flood-sculpted form.
    `.trim(),
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
          "Dichondra repens (Kidney-weed)"
        ]
      },
      {
        layer: "Graminoid Layer",
        plants: [
          "Carex appressa (Tall Sedge)",
          "Poa labillardierei (Common Tussock-grass)",
          "Phragmites australis (Common Reed)",
          "Juncus amabilis (Hollow Rush)",
          "Cyperus spp. (Flat-sedge)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Eleocharis acuta (Common Spike-sedge)"
        ]
      },
      {
        layer: "Climber Layer",
        plants: [
          "Calystegia sepium (Large Bindweed)"
        ]
      }
    ]
  },

  // Riparian Woodland (EVC 641 – Victorian Volcanic Plain) ◀ NEW
  "641": {
    description: `
Riparian Woodland is a tall, open woodland that lines the banks of rivers, creeks, and ephemeral streams, particularly those that flow across Victoria’s volcanic plains. It is dominated by River Red Gums, with a diverse understorey of sedges, grasses, and moisture-adapted herbs. These woodlands thrive in seasonally flooded soils, and act as corridors for wildlife, water filtration, and cultural passage.

Once common along waterways such as Merri Creek, Moonee Ponds Creek, and Werribee River, Riparian Woodland has been severely fragmented and degraded, especially in urban areas. Today, it is a priority for both ecological restoration and cultural renewal.
    `.trim(),
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
  }
};

// — Leaflet map, geocoding, WFS + modal logic —
// [rest of your logic remains unchanged…]
