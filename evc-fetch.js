// evc-fetch.js

// — Curated plants data (add all your EVC entries here) —
const curatedPlants = {
  "175": {
    description: "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
    recommendations: [
      { layer: "Tree Canopy", plants: ["Eucalyptus radiata s.l. (Narrow-leaf Peppermint)", "Eucalyptus melliodora (Yellow Box)", "Eucalyptus microcarpa (Grey Box)"] },
      { layer: "Understorey Tree / Large Shrub (T)", plants: ["Acacia mearnsii (Black Wattle)", "Allocasuarina littoralis (Black Sheoak)", "Exocarpos cupressiformis (Cherry Ballart)"] },
      { layer: "Medium Shrub (MS)", plants: ["Leptospermum continentale (Prickly Tea-tree)", "Epacris impressa (Common Heath)", "Cassinia aculeata (Common Cassinia)", "Acacia paradoxa (Hedge Wattle)"] },
      /* …other layers… */
    ]
  },
  "47": {
    description: "Valley Grassy Forest occurs under moderate rainfall regimes of 700-800 mm per annum on fertile well-drained colluvial or alluvial soils on gently undulating lower slopes and valley floors. Open forest to 20 m tall that may carry a variety of eucalypts, usually species which prefer more moist or more fertile conditions over a sparse shrub cover. In season, a rich array of herbs, lilies, grasses and sedges dominate the ground layer but at the drier end of the spectrum the ground layer may be sparse and slightly less diverse, but with the moisture-loving species still remaining.",
    recommendations: [
      { layer: "Tree Canopy", plants: ["Eucalyptus radiata s.l. (Narrow-leaf Peppermint)", "Eucalyptus leucoxylon (Yellow Gum)", "Eucalyptus melliodora (Yellow Box)", "Eucalyptus rubida (Candlebark)"] },
      { layer: "Understorey Tree / Large Shrub (T)", plants: ["Acacia mearnsii (Black Wattle)", "Acacia melanoxylon (Blackwood)"] },
      /* …etc… */
    ]
  },
  /* Add your other EVC codes here */
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
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch(err => {
      console.error(err);
      alert(err.message);
    });
}

function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`;
  const url =
    `https://opendata.maps.vic.gov.au/geoserver/wfs` +
    `?service=WFS` +
    `&version=1.0.0` +
    `&request=GetFeature` +
    `&typeName=open-data-platform:nv2005_evcbcs` +
    `&bbox=${bbox},EPSG:4326` +
    `&outputFormat=application/json`;

  fetch(url)
    .then(res => res.text())
    .then(text => {
      if (text.trim().startsWith("<")) {
        console.error("EVC WFS returned HTML:", text.slice(0, 200));
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
    .catch(err => {
      console.error(err);
      alert(err.message);
    });
}

function displayModal(name, status, region, code, lat, lon) {
  // --- Populate text ---
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent =
    status || "Not specified";
  document.getElementById("modal-evc-region").textContent =
    region || "Not specified";

  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // --- Build plant list ---
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info?.recommendations) {
    info.recommendations.forEach(layerObj => {
      const row = document.createElement("div");
      row.className = "layer";
      const h3 = document.createElement("h3");
      h3.textContent = layerObj.layer + ".";
      row.appendChild(h3);
      const ul = document.createElement("ul");
      layerObj.plants.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        ul.appendChild(li);
      });
      row.appendChild(ul);
      plantsDiv.appendChild(row);
    });
    plantsDiv.style.display = "block";
  } else {
    plantsDiv.style.display = "none";
  }

  // --- Initialize in-modal map ---
  if (modalMap) {
    modalMap.remove();
  }
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // --- Show modal and fix Leaflet sizing ---
  const modal = document.getElementById("evc-modal");
  modal.style.display = "flex";

  // Leaflet needs a size invalidation when container was hidden
  setTimeout(() => {
    modalMap.invalidateSize();
  }, 0);
}
