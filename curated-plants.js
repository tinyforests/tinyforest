(function() {
  // Local data for curated plant recommendations based on the Miyawaki method.
  // This object now includes sample entries for EVC 175, 180, 200, 2, 55, 3, and 7.
  const recommendationData = {
    "175": {
      description: "EVC 175 is characterized by moist, temperate conditions with fertile soils. For a 10sqm area using the Miyawaki method, dense planting is required to rapidly restore biodiversity. The recommendations below are grouped into simplified forest layers to achieve a multi-layered, self-sustaining forest.",
      recommendations: [
        {
          layer: "Understorey Tree / Large Shrub (T)",
          plants: [
            "Acacia mearnsii (Black Wattle)",
            "Allocasuarina littoralis (Black Sheoak)",
            "Exocarpos cupressiformis (Cherry Ballart)"
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Leptospermum continentale (Prickly Tea-tree)",
            "Epacris impressa (Common Heath)",
            "Cassinia aculeata (Common Cassinia)",
            "Acacia paradoxa (Hedge Wattle)"
          ]
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Pimelea humilis (Common Rice-flower)",
            "Hibbertia riparia (Erect Guinea-flower)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Bossiaea prostrata (Creeping Bossiaea)",
            "Astroloma humifusum (Cranberry Heath)",
            "Acrotriche serrulata (Honey-pots)"
          ]
        },
        {
          layer: "Large Herb (LH)",
          plants: [
            "Pterostylis longifolia s.l. (Tall Greenhood)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus tetragynus (Common Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Dichondra repens (Kidney-weed)",
            "Opercularia varia (Variable Stinkweed)",
            "Drosera whittakeri ssp. aberrans (Scented Sundew)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Deyeuxia quadriseta (Reed Bent-grass)",
            "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
            "Lomandra longifolia (Spiny-headed Mat-rush)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Gahnia radula (Thatch Saw-sedge)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lomandra filiformis (Wattle Mat-rush)",
            "Themeda triandra (Kangaroo Grass)",
            "Poa sieberiana (Grey Tussock-grass)",
            "Lepidosperma laterale (Variable Sword-sedge)"
          ]
        },
        {
          layer: "Medium to Tiny Non-tufted Graminoid (MNG)",
          plants: [
            "Microlaena stipoides var. stipoides (Weeping Grass)"
          ]
        },
        {
          layer: "Ground Fern (GF)",
          plants: [
            "Pteridium esculentum (Austral Bracken)"
          ]
        },
        {
          layer: "Scrambler or Climber (SC)",
          plants: [
            "Comesperma volubile (Love Creeper)",
            "Billardiera scandens (Common Apple-berry)"
          ]
        }
      ]
    },
    "180": {
      description: "EVC 180 typically occurs in drier, sclerophyll conditions on well‐drained soils. For dense, rapid establishment using the Miyawaki method, drought-tolerant species are essential. The following recommendations represent a balanced, multi-layered approach for EVC 180.",
      recommendations: [
        {
          layer: "Canopy Layer",
          plants: [
            "Eucalyptus camaldulensis (River Red Gum)",
            "Eucalyptus microtheca (Coolibah)"
          ]
        },
        {
          layer: "Tree Layer",
          plants: [
            "Acacia aneura (Mulga)",
            "Acacia pycnantha (Golden Wattle)"
          ]
        },
        {
          layer: "Sub Tree Layer",
          plants: [
            "Callistemon sieberi (River Bottlebrush)",
            "Banksia menziesii (Menzies' Banksia)"
          ]
        },
        {
          layer: "Shrub Layer",
          plants: [
            "Hakea salicifolia (Willow-leaved Hakea)",
            "Leptospermum scoparium (Manuka)"
          ]
        },
        {
          layer: "Ground Covers",
          plants: [
            "Dichondra repens (Kidney Weed)",
            "Myoporum parvifolium (Creeping Boobialla)"
          ]
        }
      ]
    },
    "200": {
      description: "EVC 200 represents a mosaic of woodland and open forest with mixed sclerophyll and grassy understory. For a dense Miyawaki forest in a 10sqm area, a diverse selection of species is required to quickly form a closed canopy and rich understorey.",
      recommendations: [
        {
          layer: "Canopy Layer",
          plants: [
            "Eucalyptus obliqua (Messmate)",
            "Eucalyptus viminalis (Manna Gum)"
          ]
        },
        {
          layer: "Tree Layer",
          plants: [
            "Acacia dealbata (Silver Wattle)",
            "Allocasuarina verticillata (Drooping Sheoak)"
          ]
        },
        {
          layer: "Sub Tree Layer",
          plants: [
            "Grevillea juniperina (Juniper Grevillea)",
            "Callistemon viminalis (Weeping Bottlebrush)"
          ]
        },
        {
          layer: "Shrub Layer",
          plants: [
            "Prostanthera incisa (Cut-leaf Mint Bush)",
            "Melaleuca linariifolia (Snow-in-summer)"
          ]
        },
        {
          layer: "Ground Covers",
          plants: [
            "Wahlenbergia spp. (Bluebell)",
            "Scaevola aemula (Fan Flower)"
          ]
        }
      ]
    },
    "2": {
      description: "EVC 2: Coast Banksia Woodland is restricted to near coastal localities on secondary or tertiary dunes behind Coastal Dune Scrub. It is usually dominated by a woodland overstorey of Coast Banksia (Banksia integrifolia) up to 15 m tall over a medium shrub layer. The understorey consists of herbs, sedges, and scramblers. The recommendations below have been organized into life form categories:",
      recommendations: [
        {
          layer: "Canopy Layer",
          plants: [
            "Banksia integrifolia (Coast Banksia)"
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Leucopogon parviflorus (Coast Beard-heath)",
            "Rhagodia candolleana ssp. candolleana (Seaberry Saltbush)",
            "Leptospermum laevigatum (Coast Tea-tree)"
          ]
        },
        {
          layer: "Large Herb (LH)",
          plants: [
            "Senecio minimus (Shrubby Fireweed)",
            "Haloragis brownii (Swamp Raspwort)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Sambucus gaudichaudiana (White Elderberry)",
            "Viola hederacea sensu Willis (1972) (Ivy-leaf Violet)",
            "Lobelia anceps (Angled Lobelia)",
            "Sarcocornia quinqueflora (Beaded Glasswort)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Hydrocotyle sibthorpioides (Shining Pennywort)",
            "Dichondra repens (Kidney-weed)"
          ]
        },
        {
          layer: "Ground Fern (GF)",
          plants: [
            "Pteridium esculentum (Austral Bracken)"
          ]
        },
        {
          layer: "Scrambler/Climber (SC)",
          plants: [
            "Galium australe (Tangled Bedstraw)",
            "Clematis microphylla (Small-leaved Clematis)"
          ]
        }
      ]
    },
    "55": {
      description: "EVC 55 represents a distinct lowland vegetation community with open woodlands and native grasses adapted to drier conditions. For a 10sqm area using the Miyawaki method, dense planting with drought-tolerant species is key to mimicking this environment. The following recommendations are grouped into simplified forest layers:",
      recommendations: [
        {
          layer: "Canopy Layer",
          plants: [
            "Eucalyptus camaldulensis (River Red Gum)",
            "Allocasuarina verticillata (Drooping Sheoak)"
          ]
        },
        {
          layer: "Tree Layer",
          plants: [
            "Acacia dealbata (Silver Wattle)",
            "Allocasuarina littoralis (Black Sheoak)"
          ]
        },
        {
          layer: "Sub Tree Layer",
          plants: [
            "Callistemon citrinus (Bottlebrush)",
            "Grevillea robusta (Silk Oak)"
          ]
        },
        {
          layer: "Shrub Layer",
          plants: [
            "Hakea salicifolia (Willow-leaved Hakea)",
            "Leptospermum scoparium (Manuka)"
          ]
        },
        {
          layer: "Ground Covers",
          plants: [
            "Dichondra repens (Kidney Weed)",
            "Myoporum parvifolium (Creeping Boobialla)"
          ]
        }
      ]
    },
    "3": {
      description: "EVC 3: Damp Sands Herb-rich Woodland is characterized by sandy soils and a diverse, herbaceous understorey. This vegetation community supports a mix of trees, shrubs, and herbs adapted to damp, sandy conditions. The recommendations below are grouped according to life form categories observed in this community.",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "Eucalyptus viminalis ssp. pryoriana (Rough-barked Manna Gum)"
          ]
        },
        {
          layer: "Understorey Tree / Large Shrub (T)",
          plants: [
            "Acacia mearnsii (Black Wattle)",
            "Acacia melanoxylon (Blackwood)"
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Epacris impressa (Common Heath)",
            "Leptospermum continentale (Prickly Tea-tree)",
            "Banksia marginata (Silver Banksia)",
            "Leptospermum myrsinoides (Heath Tea-tree)"
          ]
        }
