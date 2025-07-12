// evc-fetch.js

// — Curated plants data (add all your EVC entries here) —
const curatedPlants = {
  // … your other EVC entries up to 22 …

  "22": {
    // Grassy Dry Forest (Victorian Volcanic Plain)
    description:
      "Grassy Dry Forest is a light-filled forest on lower slopes and ranges, where open canopies of Stringybark eucalypts shelter a grassy understorey. Lacking dense shrubs, it’s dominated by wallaby grasses, wildflowers, and sun orchids.",
    recommendations: [
      {
        layer: "Tree Canopy (30% cover)",
        plants: [
          "Eucalyptus macrorhyncha (Red Stringybark)",
          "Eucalyptus goniocalyx s.l. (Bundy)",
          "Eucalyptus obliqua (Messmate Stringybark)"
        ]
      },
      {
        layer: "Understorey Tree / Large Shrub (5% cover)",
        plants: ["Acacia dealbata (Silver Wattle)"]
      },
      {
        layer: "Medium Shrub (10% cover)",
        plants: ["Epacris impressa (Common Heath)"]
      },
      {
        layer: "Small Shrub (5% cover)",
        plants: [
          "Hovea heterophylla (Common Hovea)",
          "Pimelea humilis (Common Rice-flower)",
          "Acacia aculeatissima (Thin-leaf Wattle)"
        ]
      },
      {
        layer: "Prostrate Shrub (1% cover)",
        plants: ["Acrotriche serrulata (Honey-pots)"]
      },
      {
        layer: "Large Herb (5% cover)",
        plants: ["Senecio tenuiflorus (Slender Fireweed)"]
      },
      {
        layer: "Medium Herb (20% cover)",
        plants: [
          "Gonocarpus tetragynus (Common Raspwort)",
          "Viola hederacea sensu Willis (Ivy-leaf Violet)",
          "Hypericum gramineum (Small St John’s Wort)"
        ]
      },
      {
        layer: "Small / Prostrate Herb (5% cover)",
        plants: [
          "Dichondra repens (Kidney-weed)",
          "Hydrocotyle laxiflora (Stinking Pennywort)",
          "Goodenia lanata (Trailing Goodenia)"
        ]
      },
      {
        layer: "Large Tufted Grass (5% cover)",
        plants: ["Joycea pallida (Silvertop Wallaby-grass)"]
      },
      {
        layer: "Medium / Small Tufted Grass (30% cover)",
        plants: [
          "Poa sieberiana (Grey Tussock-grass)",
          "Lomandra filiformis (Wattle Mat-rush)",
          "Dianella revoluta s.l. (Black-anther Flax-lily)"
        ]
      },
      {
        layer: "Tiny / Non-tufted Grass (1% cover)",
        plants: ["Microlaena stipoides var. stipoides (Weeping Grass)"]
      },
      {
        layer: "Ground Fern (1% cover)",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler / Climber (1% cover)",
        plants: ["Hardenbergia violacea (Purple Coral-pea)"]
      }
    ]
    // you can add recruitment, organicLitter, logs here if you like
  },

  "23": {
    // Herb-rich Foothill Forest (Victorian Volcanic Plain) – EVC 23
    description:
      "This diverse forest occurs on moderate slopes with fertile loamy soils. A tall canopy of Messmate (Eucalyptus obliqua), Mountain Grey Gum (Eucalyptus cypellocarpa), and Manna Gum (Eucalyptus viminalis) shades a lush understorey teeming with grasses, ferns, orchids, lilies, and tuberous herbs.\n\nThe open structure and rich plant diversity are the result of regular low-intensity fire, shallow nutrient cycling, and a long history of Aboriginal land care. Though less common now due to logging and fragmentation, this EVC remains a stronghold of southern Victoria’s botanical richness.",
    recruitment: "Continuous",
    organicLitter: "40% cover",
    logs: "20 m per 0.1 ha",
    recommendations: [
      {
        layer: "Tree Canopy (40% cover)",
        plants: [
          "Eucalyptus ovata (Swamp Gum)",
          "Eucalyptus obliqua (Messmate Stringybark)",
          "Eucalyptus viminalis ssp. viminalis (Manna Gum)"
        ]
      },
      {
        layer: "Understorey Tree / Large Shrub (10% cover)",
        plants: ["Acacia melanoxylon (Blackwood)"]
      },
      {
        layer: "Medium Shrub (20% cover)",
        plants: [
          "Leptospermum continentale (Prickly Tea-tree)",
          "Acacia verticillata (Prickly Moses)",
          "Ozothamnus ferrugineus (Tree Everlasting)",
          "Bursaria spinosa (Sweet Bursaria)"
        ]
      },
      {
        layer: "Small Shrub (1% cover)",
        plants: ["Pimelea humilis (Common Rice-flower)"]
      },
      {
        layer: "Large Herb (5% cover)",
        plants: [
          "Senecio tenuiflorus (Slender Fireweed)",
          "Pterostylis longifolia s.l. (Tall Greenhood)"
        ]
      },
      {
        layer: "Medium Herb (15% cover)",
        plants: [
          "Euchiton collinus s.s. (Creeping Cudweed)",
          "Hypericum gramineum (Small St John’s Wort)",
          "Gonocarpus tetragynus (Common Raspwort)",
          "Viola hederacea sensu Willis (Ivy-leaf Violet)"
        ]
      },
      {
        layer: "Small / Prostrate Herb (5% cover)",
        plants: ["Hydrocotyle laxiflora (Stinking Pennywort)"]
      },
      {
        layer: "Large Tufted Grass (20% cover)",
        plants: [
          "Juncus procerus (Tall Rush)",
          "Lepidosperma laterale var. majus (Variable Sword-sedge)",
          "Deyeuxia quadriseta (Reed Bent-grass)"
        ]
      },
      {
        layer: "Large Non-tufted Grass (5% cover)",
        plants: ["Lepidosperma longitudinale (Pithy Sword-sedge)"]
      },
      {
        layer: "Medium / Small Tufted Grass (10% cover)",
        plants: [
          "Lomandra filiformis (Wattle Mat-rush)",
          "Lomandra sororia (Small Mat-rush)",
          "Lepidosperma laterale var. laterale (Variable Sword-sedge)"
        ]
      },
      {
        layer: "Tiny / Non-tufted Grass (10% cover)",
        plants: [
          "Microlaena stipoides var. stipoides (Weeping Grass)",
          "Poa tenera (Slender Tussock-grass)"
        ]
      },
      {
        layer: "Ground Fern (5% cover)",
        plants: ["Pteridium esculentum (Austral Bracken)"]
      },
      {
        layer: "Scrambler / Climber (5% cover)",
        plants: [
          "Clematis aristata (Mountain Clematis)",
          "Billardiera scandens (Common Apple-berry)"
        ]
      }
    ]
  }

  // …add any further EVCs here…
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize hidden main map (for legacy)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Address lookup
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // 3) Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // 4) Email gate to reveal plants
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    const plantsDiv = document.getElementById("modal-plants");
    plantsDiv.style.display = "block";
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
    .then(res => {
      if (!res.ok) throw new Error(`Geocode failed (${res.status})`);
      return res.json();
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
      if (txt.trim().startsWith("<")) {
        console.error("EVC service error:", txt.slice(0,200));
        throw new Error("Error retrieving EVC data. Please try again later.");
      }
      return JSON.parse(txt);
    })
    .then(data => {
      if (!data.features?.length) throw new Error("No EVC data found for this location.");
      const pt   = turf.point([lon, lat]),
            feat = data.features.find(f =>
              f.geometry.type === "Polygon" &&
              turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
            ) || data.features[0],
            p    = feat.properties;
      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, String(p.evc), lat, lon);
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  // Populate header info
  document.getElementById("modal-evc-name").textContent   = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "Not specified";
  document.getElementById("modal-evc-region").textContent = region || "Not specified";

  // Description
  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent =
    info?.description || "No description available.";

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
  if (modalMap) modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // Show modal & fix Leaflet sizing
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
