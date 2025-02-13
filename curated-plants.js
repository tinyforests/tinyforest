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
            "No canopy species provided"  // Placeholder – update when canopy species are available.
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
          plants: [
            "Wahlenbergia spp. (Bluebell)",
            "Scaevola aemula (Fan Flower)"
          ]
        }
      ]
    },
    "2": {
      description: "EVC 2: Coast Banksia Woodland is restricted to near coastal localities on secondary or tertiary dunes behind Coastal Dune Scrub. Dominated by Banksia integrifolia up to 15 m tall over a medium shrub layer, the understorey includes herbs, sedges, and scramblers.",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 55 represents a distinct lowland vegetation community with open woodlands and native grasses adapted to drier conditions. Dense planting with drought-tolerant species is key. The following are grouped into simplified forest layers.",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 3: Damp Sands Herb-rich Woodland is characterized by sandy soils and a diverse, herbaceous understorey. It supports a mix of trees, shrubs, and herbs adapted to damp, sandy conditions.",
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
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Leucopogon virgatus (Common Beard-heath)",
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Amperea xiphoclada var. xiphoclada (Broom Spurge)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Astroloma humifusum (Cranberry Heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus tetragynus (Common Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Viola hederacea sensu Willis (1972) (Ivy-leaf Violet)",
            "Geranium solanderi s.l. (Austral Cranesbill)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Hydrocotyle laxiflora (Stinking Pennywort)",
            "Opercularia varia (Variable Stinkweed)",
            "Dichondra repens (Kidney-weed)",
            "Poranthera microphylla (Small Poranthera)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Lomandra longifolia (Spiny-headed Mat-rush)",
            "Austrostipa mollis (Supple Spear-grass)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Tetrarrhena juncea (Forest Wire-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)",
            "Dianella revoluta s.l. (Black-anther Flax-lily)",
            "Lomandra filiformis (Wattle-headed Mat-rush)",
            "Poa sieberiana (Grey Tussock-grass)"
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
        }
      ]
    },
    "6": {
      description: "EVC 6: Sand Heathland is characterized by sandy soils and a low, heathland vegetation structure dominated by medium and small shrubs along with a variety of herbs and graminoids that thrive in drier conditions.",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "No canopy species provided"  // Placeholder for EVC 6 canopy.
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Epacris impressa (Common Heath)",
            "Banksia marginata (Silver Banksia)",
            "Leptospermum continentale (Prickly Tea-tree)",
            "Leptospermum myrsinoides (Heath Tea-tree)"
          ]
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Platylobium obtusangulum (Common Flat-pea)",
            "Hibbertia fasciculata var. prostrata (Bundled Guinea-flower)",
            "Leucopogon virgatus (Common Beard-heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus humilis (Shade Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Gahnia radula (Thatch Saw-sedge)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Xanthorrhoea minor ssp. lutea (Small Grass-tree)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)"
          ]
        },
        {
          layer: "Medium to Tiny Non-tufted Graminoid (MNG)",
          plants: [
            "Hypolaena fastigiata (Tassel Rope-rush)",
            "Schoenus brevifolius (Zig-zag Bog-sedge)"
          ]
        },
        {
          layer: "Ground Fern (GF)",
          plants: [
            "Pteridium esculentum (Austral Bracken)"
          ]
        }
      ]
    },
    "55": {
      description: "EVC 55 represents a distinct lowland vegetation community with open woodlands and native grasses adapted to drier conditions. Dense planting with drought-tolerant species is key. The following are grouped into simplified forest layers:",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 3: Damp Sands Herb-rich Woodland is characterized by sandy soils and a diverse, herbaceous understorey. This vegetation community supports trees, shrubs, and herbs adapted to damp, sandy conditions.",
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
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Leucopogon virgatus (Common Beard-heath)",
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Amperea xiphoclada var. xiphoclada (Broom Spurge)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Astroloma humifusum (Cranberry Heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus tetragynus (Common Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Viola hederacea sensu Willis (1972) (Ivy-leaf Violet)",
            "Geranium solanderi s.l. (Austral Cranesbill)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Hydrocotyle laxiflora (Stinking Pennywort)",
            "Opercularia varia (Variable Stinkweed)",
            "Dichondra repens (Kidney-weed)",
            "Poranthera microphylla (Small Poranthera)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Lomandra longifolia (Spiny-headed Mat-rush)",
            "Austrostipa mollis (Supple Spear-grass)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Tetrarrhena juncea (Forest Wire-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)",
            "Dianella revoluta s.l. (Black-anther Flax-lily)",
            "Lomandra filiformis (Wattle-headed Mat-rush)",
            "Poa sieberiana (Grey Tussock-grass)"
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
        }
      ]
    },
    "7": {
      // EVC 7: Clay Heathland – Gippsland Plain bioregion
      description: "EVC 7: Clay Heathland – Gippsland Plain is characterized by clay soils and a woodland overstorey of large trees with a 10% canopy cover of Swamp Stringybark, along with a rich understorey comprising medium shrubs, small shrubs, herbs, and graminoids. The understorey has a projective foliage cover of about 75%, and recruitment is episodic (approximately 30-year fire intervals).",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "Eucalyptus conspicua (Swamp Stringybark)",
            "Banksia serrata (Saw Banksia)"  // if desired, you can include both
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Allocasuarina paludosa (Scrub Sheoak)",
            "Leptospermum continentale (Prickly Tea-tree)",
            "Epacris impressa (Common Heath)",
            "Hakea teretifolia ssp. hirsuta (Dagger Hakea)"
          ]
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Dampiera stricta (Blue Dampiera)",
            "Dillwynia sericea s.l. (Showy Parrot-pea)",
            "Hibbertia empetrifolia s.l. (Tangled Guinea-flower)",
            "Sphaerolobium vimineum s.l. (Leafless Globe-pea)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Xanthosia pusilla spp. agg. (Heath Xanthosia)"
          ]
        },
        {
          layer: "Large Herb (LH)",
          plants: [
            "Euphrasia collina (Purple Eyebright)",
            "Hybanthus vernonii ssp. vernonii (Erect Violet)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus teucrioides s.l. (Germander Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Helichrysum scorpioides (Button Everlasting)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Dillwynia glaberrima (Showy Parrot-pea)"  // if not already in SS; adjust if needed
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Anisopogon avenaceus (Oat Spear-grass)",
            "Xanthorrhoea resinosa (Spear Grass-tree)",
            "Deyeuxia quadriseta (Reed Bent-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Themeda triandra (Kangaroo Grass)",
            "Patersonia sericea (Silky Purple-flag)",
            "Lomandra filiformis (Wattle Mat-rush)",
            "Patersonia glabrata (Leafy Purple-flag)"
          ]
        },
        {
          layer: "Medium to Tiny Non-tufted Graminoid (MNG)",
          plants: [
            "Schoenus brevifolius (Zig-zag Bog-sedge)",
            "Lepidosperma neesii (Stiff Rapier-sedge)",
            "Entolasia marginata (Bordered Panic)",
            "Schoenus lepidosperma (Slender Bog-sedge)"
          ]
        },
        {
          layer: "Ground Fern (GF)",
          plants: [
            "Lindsaea linearis (Screw Fern)"
          ]
        }
      ]
    },
    "55": {
      description: "EVC 55 represents a distinct lowland vegetation community with open woodlands and native grasses adapted to drier conditions. Dense planting with drought-tolerant species is key. The following recommendations are grouped into simplified forest layers:",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 3: Damp Sands Herb-rich Woodland is characterized by sandy soils and a diverse, herbaceous understorey. This vegetation community supports trees, shrubs, and herbs adapted to damp, sandy conditions.",
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
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Leucopogon virgatus (Common Beard-heath)",
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Amperea xiphoclada var. xiphoclada (Broom Spurge)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Astroloma humifusum (Cranberry Heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus tetragynus (Common Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Viola hederacea sensu Willis (1972) (Ivy-leaf Violet)",
            "Geranium solanderi s.l. (Austral Cranesbill)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Hydrocotyle laxiflora (Stinking Pennywort)",
            "Opercularia varia (Variable Stinkweed)",
            "Dichondra repens (Kidney-weed)",
            "Poranthera microphylla (Small Poranthera)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Lomandra longifolia (Spiny-headed Mat-rush)",
            "Austrostipa mollis (Supple Spear-grass)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Tetrarrhena juncea (Forest Wire-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)",
            "Dianella revoluta s.l. (Black-anther Flax-lily)",
            "Lomandra filiformis (Wattle-headed Mat-rush)",
            "Poa sieberiana (Grey Tussock-grass)"
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
        }
      ]
    },
    "6": {
      description: "EVC 6: Sand Heathland is characterized by sandy soils and a low, heathland vegetation structure dominated by medium and small shrubs along with various herbs and graminoids that thrive in drier conditions.",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "No canopy species provided" // Placeholder for EVC 6
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Epacris impressa (Common Heath)",
            "Banksia marginata (Silver Banksia)",
            "Leptospermum continentale (Prickly Tea-tree)",
            "Leptospermum myrsinoides (Heath Tea-tree)"
          ]
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Platylobium obtusangulum (Common Flat-pea)",
            "Hibbertia fasciculata var. prostrata (Bundled Guinea-flower)",
            "Leucopogon virgatus (Common Beard-heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus humilis (Shade Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Gahnia radula (Thatch Saw-sedge)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Xanthorrhoea minor ssp. lutea (Small Grass-tree)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)"
          ]
        },
        {
          layer: "Medium to Tiny Non-tufted Graminoid (MNG)",
          plants: [
            "Hypolaena fastigiata (Tassel Rope-rush)",
            "Schoenus brevifolius (Zig-zag Bog-sedge)"
          ]
        },
        {
          layer: "Ground Fern (GF)",
          plants: [
            "Pteridium esculentum (Austral Bracken)"
          ]
        }
      ]
    },
    "55": {
      description: "EVC 55 represents a distinct lowland vegetation community with open woodlands and native grasses adapted to drier conditions. Dense planting with drought-tolerant species is key. The following recommendations are grouped into simplified forest layers:",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 3: Damp Sands Herb-rich Woodland is characterized by sandy soils and a diverse, herbaceous understorey. This vegetation community supports trees, shrubs, and herbs adapted to damp, sandy conditions.",
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
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Leucopogon virgatus (Common Beard-heath)",
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Amperea xiphoclada var. xiphoclada (Broom Spurge)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Astroloma humifusum (Cranberry Heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus tetragynus (Common Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Viola hederacea sensu Willis (1972) (Ivy-leaf Violet)",
            "Geranium solanderi s.l. (Austral Cranesbill)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Hydrocotyle laxiflora (Stinking Pennywort)",
            "Opercularia varia (Variable Stinkweed)",
            "Dichondra repens (Kidney-weed)",
            "Poranthera microphylla (Small Poranthera)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Lomandra longifolia (Spiny-headed Mat-rush)",
            "Austrostipa mollis (Supple Spear-grass)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Tetrarrhena juncea (Forest Wire-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)",
            "Dianella revoluta s.l. (Black-anther Flax-lily)",
            "Lomandra filiformis (Wattle-headed Mat-rush)",
            "Poa sieberiana (Grey Tussock-grass)"
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
        }
      ]
    },
    "7": {
      description: "EVC 7: Clay Heathland – Gippsland Plain is characterized by clay soils and a woodland overstorey of large trees with a 10% canopy cover of Swamp Stringybark and Banksia serrata, over a rich understorey. The understorey includes a mix of shrubs, herbs, and graminoids with a total foliage cover of about 75%.",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "Eucalyptus conspicua (Swamp Stringybark)",
            "Banksia serrata (Saw Banksia)"
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Allocasuarina paludosa (Scrub Sheoak)",
            "Leptospermum continentale (Prickly Tea-tree)",
            "Epacris impressa (Common Heath)",
            "Hakea teretifolia ssp. hirsuta (Dagger Hakea)"
          ]
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Dampiera stricta (Blue Dampiera)",
            "Dillwynia sericea s.l. (Showy Parrot-pea)",
            "Hibbertia empetrifolia s.l. (Tangled Guinea-flower)",
            "Sphaerolobium vimineum s.l. (Leafless Globe-pea)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Xanthosia pusilla spp. agg. (Heath Xanthosia)"
          ]
        },
        {
          layer: "Large Herb (LH)",
          plants: [
            "Euphrasia collina (Purple Eyebright)",
            "Hybanthus vernonii ssp. vernonii (Erect Violet)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus teucrioides s.l. (Germander Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Helichrysum scorpioides (Button Everlasting)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Opercularia varia (Variable Stinkweed)",
            "Drosera pygmaea (Tiny Sundew)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Anisopogon avenaceus (Oat Spear-grass)",
            "Xanthorrhoea resinosa (Spear Grass-tree)",
            "Deyeuxia quadriseta (Reed Bent-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Themeda triandra (Kangaroo Grass)",
            "Patersonia sericea (Silky Purple-flag)",
            "Lomandra filiformis (Wattle Mat-rush)",
            "Patersonia glabrata (Leafy Purple-flag)"
          ]
        },
        {
          layer: "Medium to Tiny Non-tufted Graminoid (MNG)",
          plants: [
            "Schoenus brevifolius (Zig-zag Bog-sedge)",
            "Lepidosperma neesii (Stiff Rapier-sedge)",
            "Entolasia marginata (Bordered Panic)",
            "Schoenus lepidosperma (Slender Bog-sedge)"
          ]
        },
        {
          layer: "Ground Fern (GF)",
          plants: [
            "Lindsaea linearis (Screw Fern)"
          ]
        }
      ]
    },
    "55": {
      description: "EVC 55 represents a distinct lowland vegetation community with open woodlands and native grasses adapted to drier conditions. Dense planting with drought-tolerant species is key. The following recommendations are grouped into simplified forest layers:",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 3: Damp Sands Herb-rich Woodland is characterized by sandy soils and a diverse, herbaceous understorey. This vegetation community supports a mix of trees, shrubs, and herbs adapted to damp, sandy conditions.",
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
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Leucopogon virgatus (Common Beard-heath)",
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Amperea xiphoclada var. xiphoclada (Broom Spurge)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Astroloma humifusum (Cranberry Heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus tetragynus (Common Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Viola hederacea sensu Willis (1972) (Ivy-leaf Violet)",
            "Geranium solanderi s.l. (Austral Cranesbill)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Hydrocotyle laxiflora (Stinking Pennywort)",
            "Opercularia varia (Variable Stinkweed)",
            "Dichondra repens (Kidney-weed)",
            "Poranthera microphylla (Small Poranthera)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Lomandra longifolia (Spiny-headed Mat-rush)",
            "Austrostipa mollis (Supple Spear-grass)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Tetrarrhena juncea (Forest Wire-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)",
            "Dianella revoluta s.l. (Black-anther Flax-lily)",
            "Lomandra filiformis (Wattle-headed Mat-rush)",
            "Poa sieberiana (Grey Tussock-grass)"
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
        }
      ]
    },
    "6": {
      description: "EVC 6: Sand Heathland is characterized by sandy soils and a low, heathland vegetation structure dominated by a mix of medium shrubs, small shrubs, and various herbs and graminoids that thrive in drier conditions.",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "No canopy species provided" // Placeholder
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Epacris impressa (Common Heath)",
            "Banksia marginata (Silver Banksia)",
            "Leptospermum continentale (Prickly Tea-tree)",
            "Leptospermum myrsinoides (Heath Tea-tree)"
          ]
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Platylobium obtusangulum (Common Flat-pea)",
            "Hibbertia fasciculata var. prostrata (Bundled Guinea-flower)",
            "Leucopogon virgatus (Common Beard-heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus humilis (Shade Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Gahnia radula (Thatch Saw-sedge)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Xanthorrhoea minor ssp. lutea (Small Grass-tree)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)"
          ]
        },
        {
          layer: "Medium to Tiny Non-tufted Graminoid (MNG)",
          plants: [
            "Hypolaena fastigiata (Tassel Rope-rush)",
            "Schoenus brevifolius (Zig-zag Bog-sedge)"
          ]
        },
        {
          layer: "Ground Fern (GF)",
          plants: [
            "Pteridium esculentum (Austral Bracken)"
          ]
        }
      ]
    },
    "55": {
      description: "EVC 55 represents a distinct lowland vegetation community with open woodlands and native grasses adapted to drier conditions. Dense planting with drought-tolerant species is key. The following recommendations are grouped into simplified forest layers:",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 3: Damp Sands Herb-rich Woodland is characterized by sandy soils and a diverse, herbaceous understorey. This vegetation community supports trees, shrubs, and herbs adapted to damp, sandy conditions.",
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
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Leucopogon virgatus (Common Beard-heath)",
            "Dillwynia glaberrima (Smooth Parrot-pea)",
            "Amperea xiphoclada var. xiphoclada (Broom Spurge)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Astroloma humifusum (Cranberry Heath)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus tetragynus (Common Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Viola hederacea sensu Willis (1972) (Ivy-leaf Violet)",
            "Geranium solanderi s.l. (Austral Cranesbill)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Hydrocotyle laxiflora (Stinking Pennywort)",
            "Opercularia varia (Variable Stinkweed)",
            "Dichondra repens (Kidney-weed)",
            "Poranthera microphylla (Small Poranthera)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Lomandra longifolia (Spiny-headed Mat-rush)",
            "Austrostipa mollis (Supple Spear-grass)"
          ]
        },
        {
          layer: "Large Non-tufted Graminoid (LNG)",
          plants: [
            "Tetrarrhena juncea (Forest Wire-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Lepidosperma concavum (Sandhill Sword-sedge)",
            "Dianella revoluta s.l. (Black-anther Flax-lily)",
            "Lomandra filiformis (Wattle-headed Mat-rush)",
            "Poa sieberiana (Grey Tussock-grass)"
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
        }
      ]
    },
    "7": {
      description: "EVC 7: Clay Heathland – Gippsland Plain is characterized by clay soils and a woodland overstorey with a 10% canopy cover of Swamp Stringybark and Saw Banksia, over a rich understorey with a total foliage cover of about 75%. Recruitment is episodic with fire intervals around 30 years.",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "Eucalyptus conspicua (Swamp Stringybark)",
            "Banksia serrata (Saw Banksia)"
          ]
        },
        {
          layer: "Medium Shrub (MS)",
          plants: [
            "Allocasuarina paludosa (Scrub Sheoak)",
            "Leptospermum continentale (Prickly Tea-tree)",
            "Epacris impressa (Common Heath)",
            "Hakea teretifolia ssp. hirsuta (Dagger Hakea)"
          ]
        },
        {
          layer: "Small Shrub (SS)",
          plants: [
            "Dampiera stricta (Blue Dampiera)",
            "Dillwynia sericea s.l. (Showy Parrot-pea)",
            "Hibbertia empetrifolia s.l. (Tangled Guinea-flower)",
            "Sphaerolobium vimineum s.l. (Leafless Globe-pea)"
          ]
        },
        {
          layer: "Prostrate Shrub (PS)",
          plants: [
            "Xanthosia pusilla spp. agg. (Heath Xanthosia)"
          ]
        },
        {
          layer: "Large Herb (LH)",
          plants: [
            "Euphrasia collina (Purple Eyebright)",
            "Hybanthus vernonii ssp. vernonii (Erect Violet)"
          ]
        },
        {
          layer: "Medium Herb (MH)",
          plants: [
            "Gonocarpus teucrioides s.l. (Germander Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Helichrysum scorpioides (Button Everlasting)"
          ]
        },
        {
          layer: "Small Herb (SH)",
          plants: [
            "Opercularia varia (Variable Stinkweed)",
            "Drosera pygmaea (Tiny Sundew)"
          ]
        },
        {
          layer: "Large Tufted Graminoid (LTG)",
          plants: [
            "Anisopogon avenaceus (Oat Spear-grass)",
            "Xanthorrhoea resinosa (Spear Grass-tree)",
            "Deyeuxia quadriseta (Reed Bent-grass)"
          ]
        },
        {
          layer: "Medium to Small Tufted Graminoid (MTG)",
          plants: [
            "Themeda triandra (Kangaroo Grass)",
            "Patersonia sericea (Silky Purple-flag)",
            "Lomandra filiformis (Wattle Mat-rush)",
            "Patersonia glabrata (Leafy Purple-flag)"
          ]
        },
        {
          layer: "Medium to Tiny Non-tufted Graminoid (MNG)",
          plants: [
            "Schoenus brevifolius (Zig-zag Bog-sedge)",
            "Lepidosperma neesii (Stiff Rapier-sedge)",
            "Entolasia marginata (Bordered Panic)",
            "Schoenus lepidosperma (Slender Bog-sedge)"
          ]
        },
        {
          layer: "Ground Fern (GF)",
          plants: [
            "Lindsaea linearis (Screw Fern)"
          ]
        }
      ]
    },
    "55": {
      description: "EVC 55 represents a distinct lowland vegetation community with open woodlands and native grasses adapted to drier conditions. Dense planting with drought-tolerant species is key. The following recommendations are grouped into simplified forest layers:",
      recommendations: [
        {
          layer: "Tree Canopy",
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
      description: "EVC 3: Damp Sands Herb-rich Woodland is characterized by sandy soils and a diverse, herbaceous understorey. This vegetation community supports trees, shrubs, and herbs adapted to damp, sandy conditions.",
      recommendations: [
        {
          layer: "Tree Canopy",
          plants: [
            "Eucalyptus viminalis ssp. pryor
