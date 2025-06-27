// evc-fetch.js

// — Curated plants data, now with slug+label for each plant —
const curatedPlants = {
  "175": {
    description:
      "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
    recommendations: [
      {
        layer:
          "Canopy Layer (topmost layer: tallest, mature trees providing shade, regulating temperature, and supporting wildlife)",
        plants: [
          { slug: "eucalyptus-radiata", label: "Eucalyptus radiata s.l. (Narrow-leaf Peppermint)" },
          { slug: "allocasuarina-verticillata", label: "Allocasuarina verticillata (Drooping Sheoak)" }
        ]
      },
      {
        layer:
          "Sub-Canopy Layer (shorter trees beneath the canopy contributing to forest structure and biodiversity)",
        plants: [
          { slug: "acacia-mearnsii", label: "Acacia mearnsii (Black Wattle)" },
          { slug: "allocasuarina-littoralis", label: "Allocasuarina littoralis (Black Sheoak)" },
          { slug: "exocarpos-cupressiformis", label: "Exocarpos cupressiformis (Cherry Ballart)" }
        ]
      },
      {
        layer:
          "Shrub Layer (various shrubs offering habitat and food for smaller animals and insects)",
        plants: [
          { slug: "leptospermum-continentale", label: "Leptospermum continentale (Prickly Tea-tree)" },
          { slug: "epacris-impressa", label: "Epacris impressa (Common Heath)" },
          { slug: "cassinia-aculeata", label: "Cassinia aculeata (Common Cassinia)" },
          { slug: "acacia-paradoxa", label: "Acacia paradoxa (Hedge Wattle)" },
          { slug: "pimelea-humilis", label: "Pimelea humilis (Common Rice-flower)" },
          { slug: "hibbertia-riparia", label: "Hibbertia riparia (Erect Guinea-flower)" },
          { slug: "bossiaea-prostrata", label: "Bossiaea prostrata (Creeping Bossiaea)" },
          { slug: "astroloma-humifusum", label: "Astroloma humifusum (Cranberry Heath)" },
          { slug: "acrotriche-serrulata", label: "Acrotriche serrulata (Honey-pots)" }
        ]
      },
      {
        layer:
          "Herb Layer (ground-level herbs, grasses and ferns stabilising soils and retaining moisture)",
        plants: [
          { slug: "pterostylis-longifolia", label: "Pterostylis longifolia s.l. (Tall Greenhood)" },
          { slug: "gonocarpus-tetragynus", label: "Gonocarpus tetragynus (Common Raspwort)" },
          { slug: "drosera-peltata", label: "Drosera peltata ssp. auriculata (Tall Sundew)" },
          { slug: "dichondra-repens", label: "Dichondra repens (Kidney-weed)" },
          { slug: "opercularia-varia", label: "Opercularia varia (Variable Stinkweed)" },
          { slug: "drosera-whittakeri", label: "Drosera whittakeri ssp. aberrans (Scented Sundew)" },
          { slug: "deyeuxia-quadriseta", label: "Deyeuxia quadriseta (Reed Bent-grass)" },
          { slug: "xanthorrhoea-minor", label: "Xanthorrhoea minor ssp. lutea (Small Grass-tree)" },
          { slug: "lomandra-longifolia", label: "Lomandra longifolia (Spiny-headed Mat-rush)" },
          { slug: "gahnia-radula", label: "Gahnia radula (Thatch Saw-sedge)" },
          { slug: "lomandra-filiformis", label: "Lomandra filiformis (Wattle Mat-rush)" },
          { slug: "themeda-triandra", label: "Themeda triandra (Kangaroo Grass)" },
          { slug: "poa-sieberiana", label: "Poa sieberiana (Grey Tussock-grass)" },
          { slug: "lepidosperma-laterale", label: "Lepidosperma laterale (Variable Sword-sedge)" },
          { slug: "microlaena-stipoides", label: "Microlaena stipoides var. stipoides (Weeping Grass)" },
          { slug: "pteridium-esculentum", label: "Pteridium esculentum (Austral Bracken)" },
          { slug: "comesperma-volubile", label: "Comesperma volubile (Love Creeper)" },
          { slug: "billardiera-scandens", label: "Billardiera scandens (Common Apple-berry)" }
        ]
      }
    ]
  }
  // …you can add further EVC codes here…
};

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // legacy hidden map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 1) Address form
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // 2) Close
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // 3) Email gate → reveal plants
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("modal-plants").style.display = "block";
    const btn = e.target.querySelector("button");
    btn.textContent = "Plants Shown";
    btn.disabled = true;
    // later: send to backend / Google Form here
  });
});

function geocodeAddress(address) {
  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  )
    .then(r => r.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const lat = +results[0].lat,
            lon = +results[0].lon;
      map.setView([lat, lon], 12);
      marker && map.removeLayer(marker);
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
        throw new Error("EVC service error. Try again later.");
      return JSON.parse(txt);
    })
    .then(data => {
      if (!data.features?.length)
        throw new Error("No EVC data found for this location.");
      const pt = turf.point([lon, lat]),
            feat =
              data.features.find(f =>
                f.geometry.type === "Polygon" &&
                turf.booleanPointInPolygon(
                  pt,
                  turf.polygon(f.geometry.coordinates)
                )
              ) || data.features[0],
            p = feat.properties;
      displayModal(
        p.x_evcname,
        p.evc_bcs_desc,
        p.bioregion,
        p.evc,
        lat,
        lon
      );
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  // header
  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

  // description
  const info = curatedPlants[code];
  document.getElementById("modal-evc-description").textContent = info
    ? info.description
    : "No description available.";

  // build & hide plant links
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.innerHTML = "";
  if (info?.recommendations) {
    info.recommendations.forEach(sec => {
      const wr = document.createElement("div");
      wr.className = "layer";
      wr.innerHTML =
        `<h3>${sec.layer}</h3>` +
        "<ul>" +
        sec.plants
          .map(
            p =>
              `<li><a href="plant.html?slug=${p.slug}">${p.label}</a></li>`
          )
          .join("") +
        "</ul>";
      plantsDiv.appendChild(wr);
    });
  }
  plantsDiv.style.display = "none";

  // in-modal map
  modalMap && modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // show
  const m = document.getElementById("evc-modal");
  m.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
