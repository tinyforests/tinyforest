(function() {
  // Updated local data for curated plant recommendations based on the Miyawaki method.
  // Every entry now starts with a "Tree Canopy" group.
  const recommendationData = {
    "175": {
      description: "EVC 175 is characterized by moist, temperate conditions with fertile soils. For a 10sqm area using the Miyawaki method, dense planting is required to rapidly restore biodiversity. The recommendations below are grouped into life form categories.",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "No canopy species provided" // Update when canopy species become available.
          ]
        },
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
      description: "EVC 180 typically occurs in drier, sclerophyll conditions on well‐drained soils. Drought-tolerant species are essential for rapid establishment. The following represent a balanced, multi-layered approach for EVC 180.",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 200 represents a mosaic of woodland and open forest with mixed sclerophyll and grassy understory. A diverse selection is required to quickly form a closed canopy and rich understorey.",
      recommendations: [
        {
          layer: "Tree Canopy",
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
          plants
