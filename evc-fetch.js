// evc-fetch.js

// Your curated descriptions & plant-lists
const curatedPlants = {
  "175": {
    description: "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
    recommendations: [
      { layer: "Tree Canopy", plants: ["Eucalyptus radiata s.l. (Narrow-leaf Peppermint)", "Eucalyptus melliodora (Yellow Box)", "Eucalyptus microcarpa (Grey Box)"] },
      { layer: "Understorey Tree / Large Shrub", plants: ["Acacia mearnsii (Black Wattle)", "Allocasuarina littoralis (Black Sheoak)", "Exocarpos cupressiformis (Cherry Ballart)"] },
      { layer: "Medium Shrub", plants: ["Leptospermum continentale (Prickly Tea-tree)", "Epacris impressa (Common Heath)", "Cassinia aculeata (Common Cassinia)", "Acacia paradoxa (Hedge Wattle)"] },
      { layer: "Small Shrub", plants: ["Pimelea humilis (Common Rice-flower)", "Hibbertia riparia (Erect Guinea-flower)"] },
      { layer: "Prostrate Shrub", plants: ["Bossiaea prostrata (Creeping Bossiaea)", "Astroloma humifusum (Cranberry Heath)", "Acrotriche serrulata (Honey-pots)"] },
      { layer: "Large Herb", plants: ["Pterostylis longifolia s.l. (Tall Greenhood)"] },
      { layer: "Medium Herb", plants: ["Gonocarpus tetragynus (Common Raspwort)", "Drosera peltata ssp. auriculata (Tall Sundew)"] },
      { layer: "Small Herb", plants: ["Dichondra repens (Kidney-weed)", "Opercularia varia (Variable Stinkweed)", "Drosera whittakeri ssp. aberrans (Scented Sundew)"] },
      { layer: "Large Tufted Graminoid", plants: ["Deyeuxia quadriseta (Reed Bent-grass)", "Xanthorrhoea minor ssp. lutea (Small Grass-tree)", "Lomandra longifolia (Spiny-headed Mat-rush)"] },
      { layer: "Large Non-tufted Graminoid", plants: ["Gahnia radula (Thatch Saw-sedge)"] },
      { layer: "Medium to Small Tufted Graminoid", plants: ["Lomandra filiformis (Wattle Mat-rush)", "Themeda triandra (Kangaroo Grass)", "Poa sieberiana (Grey Tussock-grass)", "Lepidosperma laterale (Variable Sword-sedge)"] },
      { layer: "Medium to Tiny Non-tufted Graminoid", plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"] },
      { layer: "Ground Fern", plants: ["Pteridium esculentum (Austral Bracken)"] },
      { layer: "Scrambler / Climber", plants: ["Comesperma volubile (Love Creeper)", "Billardiera scandens (Common Apple-berry)"] }
    ]
  },
  "47": {
    description: "Valley Grassy Forest occurs under moderate rainfall regimes of 700–800 mm per annum on fertile, well-drained colluvial or alluvial soils on gently undulating lower slopes and valley floors. Open forest to 20 m tall that may carry a variety of eucalypts, over a sparse shrub cover. In season, a rich array of herbs, lilies, grasses and sedges dominate the ground layer.",
    recommendations: [
      { layer: "Tree Canopy", plants: ["Eucalyptus radiata s.l. (Narrow-leaf Peppermint)", "Eucalyptus leucoxylon (Yellow Gum)", "Eucalyptus melliodora (Yellow Box)", "Eucalyptus rubida (Candlebark)"] },
      { layer: "Understorey Tree / Large Shrub", plants: ["Acacia mearnsii (Black Wattle)"] },
      { layer: "Medium Shrub", plants: ["Myoporum sp. 1 (Sticky Boobialla)", "Acacia pycnantha (Golden Wattle)", "Bursaria spinosa ssp. spinosa (Sweet Bursaria)"] },
      { layer: "Small Shrub", plants: ["Pimelea humilis (Common Rice-flower)"] },
      { layer: "Prostrate Shrub", plants: ["Bossiaea prostrata (Creeping Bossiaea)"] },
      { layer: "Large Herb", plants: ["Veronica gracilis (Slender Speedwell)"] },
      { layer: "Medium Herb", plants: ["Poranthera microphylla (Small Poranthera)", "Gonocarpus tetragynus (Common Raspwort)", "Drosera peltata ssp. auriculata (Tall Sundew)"] },
      { layer: "Small Herb", plants: ["Solenogyne dominii (Smooth Solenogyne)", "Oxalis corniculata s.l. (Yellow Wood-sorrel)", "Oxalis exilis (Shady Wood-sorrel)", "Opercularia varia (Variable Stinkweed)"] },
      { layer: "Large Tufted Graminoid", plants: ["Austrostipa rudis (Veined Spear-grass)", "Austrostipa mollis (Supple Spear-grass)"] },
      { layer: "Large Non-tufted Graminoid", plants: ["Gahnia radula (Thatch Saw-sedge)"] },
      { layer: "Medium to Small Tufted Graminoid", plants: ["Themeda triandra (Kangaroo Grass)", "Lomandra filiformis (Wattle Mat-rush)", "Tricoryne elatior (Yellow Rush-lily)", "Arthropodium strictum s.l. (Chocolate Lily)"] },
      { layer: "Medium to Tiny Non-tufted Graminoid", plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"] },
      { layer: "Scrambler / Climber", plants: ["Billardiera scandens (Common Apple-berry)"] }
    ]
  },
  "55": {
    description: "EVC 55 represents a lowland vegetation community with open woodlands and native grasses adapted to drier conditions. Dense planting with drought-tolerant species is key.",
    recommendations: [
      { layer: "Tree Canopy", plants: ["Eucalyptus camaldulensis (River Red Gum)", "Allocasuarina verticillata (Drooping Sheoak)"] },
      { layer: "Tree Layer", plants: ["Acacia dealbata (Silver Wattle)", "Allocasuarina littoralis (Black Sheoak)"] },
      { layer: "Sub Tree Layer", plants: ["Callistemon citrinus (Bottlebrush)", "Grevillea robusta (Silk Oak)"] },
      { layer: "Shrub Layer", plants: ["Hakea salicifolia (Willow-leaved Hakea)", "Leptospermum scoparium (Manuka)"] },
      { layer: "Ground Covers", plants: ["Dichondra repens (Kidney Weed)", "Myoporum parvifolium (Creeping Boobialla)"] }
    ]
  },
  "180": {
    description: "A tall eucalypt woodland found along riverbanks and floodplains. It features shrubs and a mix of wetland herbs and sedges in the ground layer. Grows in fertile soils that flood from time to time, in low-lying areas with modest rainfall.",
    recommendations: [
      { layer: "Tree Canopy", plants: ["Eucalyptus camaldulensis (River Red Gum)", "Eucalyptus tereticornis ssp. mediana (Gippsland Red Gum)", "Eucalyptus ovata (Swamp Gum)"] },
      { layer: "Understorey Tree / Large Shrub", plants: ["Acacia implexa (Lightwood)", "Acacia melanoxylon (Blackwood)"] },
      { layer: "Medium Shrub", plants: ["Ozothamnus ferrugineus (Tree Everlasting)", "Bursaria spinosa ssp. spinosa (Sweet Bursaria)", "Hymenanthera dentata s.l. (Tree Violet)"] },
      { layer: "Large Herb", plants: ["Urtica incisa (Scrub Nettle)", "Persicaria subsessilis (Hairy Knotweed)", "Senecio quadridentatus (Cottony Fireweed)"] },
      { layer: "Medium Herb", plants: ["Acaena novae-zelandiae (Bidgee-widgee)", "Hydrocotyle hirta (Hairy Pennywort)", "Stellaria pungens (Prickly Starwort)", "Veronica plebeia (Trailing Speedwell)"] },
      { layer: "Small Herb", plants: ["Oxalis corniculata s.l. (Yellow Wood-sorrel)", "Dichondra repens (Kidney-weed)"] },
      { layer: "Large Tufted Graminoid", plants: ["Carex appressa (Tall Sedge)", "Poa labillardierei (Common Tussock-grass)"] },
      { layer: "Large Non-tufted Graminoid", plants: ["Phragmites australis (Common Reed)"] },
      { layer: "Medium to Small Tufted Graminoid", plants: ["Juncus amabilis (Hollow Rush)", "Cyperus spp. (Flat-sedge)"] },
      { layer: "Medium to Tiny Non-tufted Graminoid", plants: ["Microlaena stipoides var. stipoides (Weeping Grass)", "Eleocharis acuta (Common Spike-sedge)"] },
      { layer: "Scrambler / Climber", plants: ["Calystegia sepium (Large Bindweed)"] },
      { layer: "Bryophytes / Lichens", plants: ["— often a carpet layer in the flood zone"] }
    ]
  }
};

let map, marker;

document.addEventListener("DOMContentLoaded", () => {
  // map initialization
  map = L.map("map").setView([-37.8136,144.9631],8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:"© OpenStreetMap contributors"
  }).addTo(map);

  // form submit
  const form = document.getElementById("address-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    searchEVC();
  });

  // button click fallback
  document.getElementById("search-button").addEventListener("click", e => {
    e.preventDefault();
    searchEVC();
  });

  // close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
});

function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  if (!address) {
    alert("Please enter an address.");
    return;
  }
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => r.json())
    .then(res => {
      if (!res.length) throw new Error("Address not found.");
      const { lat, lon } = res[0];
      map.setView([lat, lon], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch(err => {
      console.error(err);
      alert(err.message || "Error finding address.");
    });
}

function fetchEVCData(lat, lon) {
  const bboxSize = 0.02;
  const bbox = [lon - bboxSize, lat - bboxSize, lon + bboxSize, lat + bboxSize].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features.length) throw new Error("No EVC data found.");
      const pt = turf.point([lon, lat]);
      const feat = data.features.find(f =>
        f.geometry && f.geometry.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];
      const p = feat.properties;
      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc);
    })
    .catch(err => {
      console.error(err);
      alert(err.message || "Error retrieving EVC data.");
    });
}

function displayModal(name, status, region, code) {
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "Not specified";
  document.getElementById("modal-evc-region").textContent = region || "Not specified";

  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent =
    info ? info.description : "No description available.";

  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info && info.recommendations) {
    info.recommendations.forEach(layerObj => {
      const d = document.createElement("div");
      d.className = "layer";
      const h3 = document.createElement("h3");
      h3.textContent = layerObj.layer;
      d.appendChild(h3);
      const ul = document.createElement("ul");
      layerObj.plants.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        ul.appendChild(li);
      });
      d.appendChild(ul);
      plantsDiv.appendChild(d);
    });
    plantsDiv.style.display = "block";
  } else {
    plantsDiv.style.display = "none";
  }

  document.getElementById("evc-modal").style.display = "flex";
}
