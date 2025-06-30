// evc-fetch.js

const curatedPlants = {
  "175": { /* …Grassy Woodland… */ },
  "55_61": { /* …Plains Grassy Woodland (VVP)… */ },
  "55":    { /* …Plains Grassy Woodland (Gippsland)… */ },

  // —— New: Stream Bank Shrubland (EVC 851) ——
  "851": {
    description:
      "This rare and endangered plant community once lined the small rivers and ephemeral creeks of Victoria’s volcanic plains. Shaped by flood and stone, Stream Bank Shrubland thrives in rocky or gravelly streambeds where water flows seasonally. It’s defined by tall, moisture-loving shrubs like Sweet Bursaria, Tree Violet, and Silver Wattle, often beneath a scattered overstorey of River Red Gum. These green ribbons form vital ecological corridors, supporting movement across otherwise cleared or open landscapes. The understory hosts sedges, grasses, and fast-growing herbs that respond quickly to flood or disturbance. Restoring this EVC brings back habitat, resilience, and cultural continuity to waterways across the volcanic plain.",
    recommendations: [
      {
        layer:
          "Canopy Layer (tallest trees providing shade, regulating temperature, and supporting wildlife)",
        plants: ["Eucalyptus camaldulensis (River Red-gum)"]
      },
      {
        layer:
          "Sub-Canopy Layer (shorter trees beneath the canopy contributing to forest structure and biodiversity)",
        plants: [
          "Acacia mearnsii (Black Wattle)",
          "Acacia melanoxylon (Blackwood)"
        ]
      },
      {
        layer:
          "Shrub Layer (various shrubs offering habitat and food for smaller animals and insects)",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Hymenanthera dentata s.l. (Tree Violet)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Callistemon sieberi (River Bottlebrush)"
        ]
      },
      {
        layer:
          "Herb Layer (ground-level herbs, grasses and ferns stabilising soils and retaining moisture)",
        plants: [
          "Persicaria decipiens (Slender Knotweed)",
          "Epilobium billardierianum (Variable Willow-herb)",
          "Acaena novae-zelandiae (Bidgee-widgee)",
          "Hydrocotyle verticillata (Shield Pennywort)",
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Crassula helmsii (Swamp Crassula)",
          "Dichondra repens (Kidney-weed)",
          "Apium prostratum ssp. prostratum (Sea Celery)"
        ]
      },
      {
        layer:
          "Graminoid & Fern Layer (sedges, rushes and grasses forming structural groundcovers)",
        plants: [
          "Poa labillardierei (Common Tussock-grass)",
          "Lomandra longifolia (Spiny-headed Mat-rush)",
          "Phragmites australis (Common Reed)",
          "Schoenoplectus tabernaemontani (River Club-sedge)",
          "Triglochin procerum s.l. (Water Ribbons)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Ficinia nodosa (Knobby Club-sedge)"
        ]
      },
      {
        layer:
          "Scrambler/Climber Layer (vines and climbers adding vertical connection)",
        plants: ["Calystegia sepium (Large Bindweed)"]
      }
    ]
  }
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // …existing initialization code…
});

function geocodeAddress(address) { /* … */ }
function fetchEVCData(lat, lon) { /* … */ }
function displayModal(name, status, region, code, lat, lon) {
  // …populate header & description…
  // lookup key:
  let raw = String(code).replace(/\s+/g, ""),
      key = raw.replace(/\./g, "_");
  if (raw === "55" && region === "Victorian Volcanic Plain") key = "55_61";

  const info = curatedPlants[key] || {};
  document.getElementById("modal-evc-description").textContent =
    info.description || "No description available.";

  // build & hide plant list
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  info.recommendations?.forEach(sec => {
    const wr = document.createElement("div");
    wr.className = "layer";
    wr.innerHTML =
      `<h3>${sec.layer}</h3><ul>` +
      sec.plants.map(p => `<li>${p}</li>`).join("") +
      `</ul>`;
    plantsDiv.appendChild(wr);
  });
  plantsDiv.style.display = "none";

  // …rest of modal/map logic…
}
