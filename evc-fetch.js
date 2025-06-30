// evc-fetch.js

// — Curated plants data —
// Keys correspond to EVC codes, with “55_61” for the Victorian Volcanic Plain variant.
const curatedPlants = {
  "175": {
    description:
      "Grassy Woodland is a lightly treed, herb-rich ecosystem once widespread across the undulating volcanic plains of western and central Victoria. It features scattered eucalypts—especially Grey Box and Yellow Gum—over an open ground layer rich with native grasses, wildflowers, and tuberous lilies. Highly threatened, only small patches remain along roadsides, rail reserves, and public lands. Grassy Woodland supports pollinators, woodland birds, and traditional seasonal foods.",
    recommendations: [
      {
        layer:
          "Canopy Layer (tallest mature trees providing shade and structure)",
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
          "Shrub Layer (woody shrubs offering habitat and food for smaller fauna)",
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
          "Herb Layer (ground-level herbs, grasses and ferns stabilising soils)",
        plants: [
          "Acaena echinata (Sheep’s Burr)",
          "Einadia nutans ssp. nutans (Nodding Saltbush)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Crassula sieberiana (Sieber Crassula)",
          "Dichondra repens (Kidney-weed)"
        ]
      },
      {
        layer:
          "Graminoid & Ground-cover Layer (sedges, rushes and grasses forming structure)",
        plants: [
          "Lomandra filiformis (Wattle Mat-rush)",
          "Austrostipa scabra (Rough Spear-grass)",
          "Austrodanthonia caespitosa (Common Wallaby-grass)",
          "Dianella revoluta s.l. (Black-anther Flax-lily)",
          "Microlaena stipoides var. stipoides (Weeping Grass)"
        ]
      },
      {
        layer:
          "Scrambler/Climber Layer (vines adding vertical connection)",
        plants: ["Clematis microphylla (Small-leaved Clematis)"]
      }
    ]
  },

  "55_61": {
    description:
      "Plains Grassy Woodland is an open, sunlit woodland once widespread across the heavy basalt clays of western Victoria. Scattered River Red Gums, Grey Box, and Yellow Gums form a broad canopy over a ground layer rich with kangaroo grass, native lilies, wildflowers, and seasonal herbs. This EVC thrives in landscapes with seasonal waterlogging and cracking clay soils, and is shaped by a long history of fire management and Aboriginal cultivation. Today, less than 3% remains, making it one of Victoria’s most threatened woodland communities.",
    recommendations: [
      {
        layer:
          "Canopy Layer (tall mature trees regulating microclimate and providing shade)",
        plants: ["Eucalyptus camaldulensis (River Red-gum)"]
      },
      {
        layer:
          "Shrub Layer (woody shrubs offering habitat and food for wildlife)",
        plants: [
          "Acacia pycnantha (Golden Wattle)",
          "Acacia paradoxa (Hedge Wattle)",
          "Pimelea humilis (Common Rice-flower)",
          "Astroloma humifusum (Cranberry Heath)",
          "Bossiaea prostrata (Creeping Bossiaea)"
        ]
      },
      {
        layer:
          "Herb Layer (ground-level herbs, grasses and ferns stabilising soils)",
        plants: [
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Acaena echinata (Sheep’s Burr)",
          "Dichondra repens (Kidney-weed)",
          "Hydrocotyle laxiflora (Stinking Pennywort)"
        ]
      },
      {
        layer:
          "Graminoid Layer (grasses and rushes providing structural cover)",
        plants: [
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

  "851": {
    description:
      "This rare and endangered plant community once lined the small rivers and ephemeral creeks of Victoria’s volcanic plains. Shaped by flood and stone, Stream Bank Shrubland thrives in rocky or gravelly streambeds where water flows seasonally. It’s defined by tall, moisture-loving shrubs like Sweet Bursaria, Tree Violet, and Silver Wattle, often beneath a scattered overstorey of River Red Gum. These green ribbons form vital ecological corridors, supporting movement across otherwise cleared or open landscapes. The understory hosts sedges, grasses, and fast-growing herbs that respond quickly to flood or disturbance. Restoring this EVC brings back habitat, resilience, and cultural continuity to waterways across the volcanic plain.",
    recommendations: [
      {
        layer:
          "Canopy Layer (tallest trees providing shade, regulating temperature)",
        plants: ["Eucalyptus camaldulensis (River Red-gum)"]
      },
      {
        layer:
          "Sub-Canopy Layer (shorter trees contributing to structure & diversity)",
        plants: ["Acacia mearnsii (Black Wattle)", "Acacia melanoxylon (Blackwood)"]
      },
      {
        layer:
          "Shrub Layer (woody shrubs offering habitat and food)",
        plants: [
          "Leptospermum lanigerum (Woolly Tea-tree)",
          "Hymenanthera dentata s.l. (Tree Violet)",
          "Bursaria spinosa ssp. spinosa (Sweet Bursaria)",
          "Callistemon sieberi (River Bottlebrush)"
        ]
      },
      {
        layer:
          "Herb Layer (ground-level herbs, grasses & ferns stabilising soils)",
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
          "Graminoid & Fern Layer (sedges, rushes, grasses & ferns forming ground cover)",
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
          "Scrambler/Climber Layer (vines adding vertical structure)",
        plants: ["Calystegia sepium (Large Bindweed)"]
      }
    ]
  }
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize (hidden) main map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Address form submit → geocode
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

  // 4) Email “gate” — reveal plants on submit
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    document.getElementById("modal-plants").style.display = "block";
    btn.textContent = "Plants Shown";
    btn.disabled = true;
    // TODO: wire to backend or Google Form if desired
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
    .then(r => r.text())
    .then(txt => {
      if (txt.trim().startsWith("<"))
        throw new Error("EVC service error (returned XML).");
      return JSON.parse(txt);
    })
    .then(data => {
      if (!data.features?.length)
        throw new Error("No EVC data found for this location.");
      const pt = turf.point([lon, lat]),
        feat =
          data.features.find(
            f =>
              f.geometry.type === "Polygon" &&
              turf.booleanPointInPolygon(
                pt,
                turf.polygon(f.geometry.coordinates)
              )
          ) || data.features[0],
        p = feat.properties;

      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  // Populate modal header
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent =
    status || "Not specified";
  document.getElementById("modal-evc-region").textContent =
    region || "Not specified";

  // Determine the key in our curatedPlants map
  let raw = String(code),
    key = raw.replace(/\./g, "_");
  // override for the 55→55_61 variant in the VVP
  if (raw === "55" && region === "Victorian Volcanic Plain") {
    key = "55_61";
  }

  const info = curatedPlants[key] || {};
  document.getElementById("modal-evc-description").textContent =
    info.description || "No description available.";

  // Build & initially hide the plant list
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

  // In-modal mini-map
  if (modalMap) modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // Show modal
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  // fix leaflet sizing
  setTimeout(() => modalMap.invalidateSize(), 0);
}
