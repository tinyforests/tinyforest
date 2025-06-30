// evc-fetch.js

// — Curated plants data (add all your EVC entries here) —
const curatedPlants = {
  "175": {
    description:
      "Grassy Woodland is a lightly treed, herb-rich ecosystem once widespread across the undulating volcanic plains of western and central Victoria. It features scattered eucalypts, especially Grey Box and Yellow Gum, over an open ground layer rich with native grasses, wildflowers, and tuberous lilies. On fertile soils, this ecosystem bursts into colour through spring and early summer. It is highly threatened, with most remnants cleared for agriculture. Today, only small, fragmented patches remain, often along roadsides, rail reserves, and public lands. Grassy Woodland holds immense value for pollinators, woodland birds, and traditional seasonal foods.",
    recommendations: [
      {
        layer:
          "Canopy Layer (topmost layer: tallest, mature trees providing shade, regulating temperature, and supporting wildlife)",
        plants: [
          "Eucalyptus ovata (Swamp Gum)",
          "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)",
          "Eucalyptus viminalis (Manna Gum)"
        ]
      },
      {
        layer:
          "Sub-Canopy Layer (shorter trees beneath the canopy contributing to forest structure and biodiversity)",
        plants: [
          "Allocasuarina verticillata (Drooping Sheoak)",
          "Acacia implexa (Lightwood)",
          "Acacia mearnsii (Black Wattle)"
        ]
      },
      {
        layer:
          "Shrub Layer (various shrubs offering habitat and food for smaller animals and insects)",
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
          "Herb Layer (ground-level herbs, grasses and ferns stabilising soils and retaining moisture)",
        plants: [
          "Oxalis perennans (Grassland Wood-sorrel)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Acaena echinata (Sheep’s Burr)",
          "Einadia nutans ssp. nutans (Nodding Saltbush)",
          "Crassula sieberiana (Sieber Crassula)",
          "Dichondra repens (Kidney-weed)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Austrostipa scabra (Rough Spear-grass)",
          "Austrodanthonia caespitosa (Common Wallaby-grass)",
          "Dianella revoluta s.l. (Black-anther Flax-lily)",
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Clematis microphylla (Small-leaved Clematis)"
        ]
      }
    ]
  },

  "934": {
    description:
      "Brackish Grassland is a salt-tolerant grassy ecosystem found in low-lying areas of the Gippsland Plain, where saline groundwater or estuarine flooding influences the soil. These open, wind-exposed grasslands are dominated by saltbushes, low sedges, and halophytic herbs, with few or no trees. Though sparse in appearance, this EVC supports high biodiversity, including rare orchids, seasonal wetland species, and migratory bird habitat. Brackish Grassland is highly threatened, with much of its extent cleared, drained, or grazed. Its remaining fragments survive in coastal flats, behind dunes, and around salt lakes, telling stories of salinity, resilience, and edge dwelling.",
    recommendations: [
      {
        layer:
          "Herb Layer (ground-level herbs, grasses and ferns stabilising soils and retaining moisture)",
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

  // …add your other EVCs here…
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
    // TODO: wire this to your backend or Google Form later
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
      const lat = +results[0].lat;
      const lon = +results[0].lon;
      map.setView([lat, lon], 12);
      marker && map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch(err => alert(err.message));
}

function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`;
  const url =
    "https://opendata.maps.vic.gov.au/geoserver/wfs" +
    "?service=WFS&version=1.0.0&request=GetFeature" +
    "&typeName=open-data-platform:nv2005_evcbcs" +
    `&bbox=${bbox},EPSG:4326` +
    "&outputFormat=application/json";

  fetch(url)
    .then(res => res.text())
    .then(text => {
      if (text.trim().startsWith("<")) {
        throw new Error("Error retrieving EVC data. Please try again later.");
      }
      return JSON.parse(text);
    })
    .then(data => {
      if (!data.features?.length) {
        throw new Error("No EVC data found for this location.");
      }
      const pt = turf.point([lon, lat]);
      const feat =
        data.features.find(
          f =>
            f.geometry?.type === "Polygon" &&
            turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
        ) || data.features[0];

      const p = feat.properties;
      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  // Populate header
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

  // Description
  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // Build & initially hide plant list
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
  if (modalMap) modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // Show modal
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
