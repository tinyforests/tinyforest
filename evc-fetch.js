let map, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Button click
  document.getElementById("search-button")
    .addEventListener("click", searchEVC);

  // Modal close
  document.getElementById("modal-close")
    .addEventListener("click", () => evcModal().style.display = "none");
  document.getElementById("evc-modal")
    .addEventListener("click", e => {
      if (e.target.id === "evc-modal") evcModal().style.display = "none";
    });
});

// helper
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
      if (!results.length) {
        alert("Address not found.");
        return;
      }
      const lat = +results[0].lat, lon = +results[0].lon;
      showOnMap(lat, lon);
      fetchEVCData(lat, lon);
    })
    .catch(err => {
      console.error(err);
      alert("Error looking up address.");
    });
}

function showOnMap(lat, lon) {
  map.setView([lat, lon], 12);
  if (marker) map.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(map);
}

/**
 * Fetch EVC details
 */
function fetchEVCData(lat, lon) {
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
        alert("No EVC data found.");
        return;
      }
      const pt = turf.point([lon, lat]);
      let feat = data.features.find(f =>
        f.geometry.type === "Polygon"
        && turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const p = feat.properties;
      displayEVCInfo(
        p.x_evcname || "Unknown",
        p.evc || "Unknown",
        p.evc_bcs_desc || "Not specified",
        p.bioregion || "Not specified"
      );
    })
    .catch(err => {
      console.error(err);
      alert("Error retrieving EVC data.");
    });
}

/**
 * Populate & show modal
 */
function displayEVCInfo(name, code, status, region) {
  currentEvcCode = code;
  document.getElementById("modal-evc-name").textContent   = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

  // prefill form
  document.getElementById("gf-address").value = 
    document.getElementById("address-input").value.trim();
  document.getElementById("gf-evcCode").value = code;

  evcModal().style.display = "flex";
}
