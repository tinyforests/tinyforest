let map, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the base map (hidden behind modal, but required for geocoding)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Wire up Find My Garden
  document.getElementById("search-button")
    .addEventListener("click", searchEVC);

  // Modal close handlers
  document.getElementById("modal-close")
    .addEventListener("click", () => evcModal().style.display = "none");
  document.getElementById("evc-modal")
    .addEventListener("click", e => {
      if (e.target.id === "evc-modal") evcModal().style.display = "none";
    });
});

function evcModal() {
  return document.getElementById("evc-modal");
}

/**
 * Geocode and fetch EVC
 */
function searchEVC() {
  const addr = document.getElementById("address-input").value.trim();
  if (!addr) {
    alert("Please enter an address.");
    return;
  }

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}`)
    .then(r => r.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const lat = +results[0].lat, lon = +results[0].lon;
      fetchEVCData(lat, lon, addr);
    })
    .catch(err => {
      alert(err.message);
    });
}

/**
 * Fetch EVC details
 */
function fetchEVCData(lat, lon, address) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url =
    "https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0" +
    "&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs" +
    `&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      if (!data.features || !data.features.length) {
        throw new Error("No EVC data found.");
      }

      const pt = turf.point([lon, lat]);
      let feat = data.features.find(f =>
        f.geometry.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const p = feat.properties;
      displayEVCInfo(
        p.x_evcname || "Unknown",
        p.evc || "Unknown",
        p.evc_bcs_desc || "Not Specified",
        p.bioregion || "Not Specified",
        address
      );
    })
    .catch(err => {
      alert(err.message);
    });
}

/**
 * Populate & show modal
 */
function displayEVCInfo(name, code, status, region, address) {
  currentEvcCode = code;
  document.getElementById("modal-evc-name").textContent   = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;
  document.getElementById("modal-evc-description").textContent =
    getDescriptionFor(code);

  // prefill form
  document.getElementById("gf-address").value = address;
  document.getElementById("gf-evcCode").value = code;

  evcModal().style.display = "flex";
}

// Simple lookup for descriptions by EVC code
function getDescriptionFor(code) {
  const desc = {
    "175": "A variable open eucalypt woodland to 15 m tall or occasionally Sheoak woodland to 10 m tall over a diverse ground layer of grasses and herbs. The shrub component is usually sparse. It occurs on sites with moderate fertility on gentle slopes or undulating hills on a range of geologies.",
    "47": "Valley Grassy Forest occurs under moderate rainfall regimes of 700-800 mm per annum on fertile well-drained colluvial or alluvial soils on gently undulating lower slopes and valley floors. Open forest to 20 m tall that may carry a variety of eucalypts, usually species which prefer more moist or more fertile conditions over a sparse shrub cover. In season, a rich array of herbs, lilies, grasses and sedges dominate the ground layer but at the drier end of the spectrum the ground layer may be sparse and slightly less diverse, but with the moisture-loving species still remaining.",
    "FPW": "A tall eucalypt woodland found along riverbanks and floodplains. It features shrubs and a mix of wetland herbs and sedges in the ground layer. Grows in fertile soils that flood from time to time, in low-lying areas with modest rainfall."
    // …add any others here…
  };
  return desc[code] || "Description not available for this EVC.";
}
