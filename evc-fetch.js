// Global refs
let map;
let marker;
let currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Wire up button click
  document.getElementById("search-button")
    .addEventListener("click", () => {
      searchEVC();
    });

  // Modal close handlers
  document.getElementById("modal-close")
    .addEventListener("click", () => {
      document.getElementById("evc-modal").style.display = "none";
    });
  document.getElementById("evc-modal")
    .addEventListener("click", e => {
      if (e.target.id === "evc-modal") {
        document.getElementById("evc-modal").style.display = "none";
      }
    });
});

/**
 * Geocode the address and fetch EVC
 */
function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  if (!address) {
    alert("Please enter an address.");
    return;
  }

  fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  )
    .then(res => res.json())
    .then(results => {
      if (!results.length) {
        alert("Address not found.");
        return;
      }
      const latNum = parseFloat(results[0].lat),
        lonNum = parseFloat(results[0].lon);

      // Update map
      map.setView([latNum, lonNum], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([latNum, lonNum]).addTo(map);

      fetchEVCData(latNum, lonNum);
    })
    .catch(err => {
      console.error("Geocode error:", err);
      alert("Problem looking up that address.");
    });
}

/**
 * Fetch EVC data
 */
function fetchEVCData(lat, lon) {
  const delta = 0.02;
  const bbox = [lon - delta, lat - delta, lon + delta, lat + delta].join(",");
  const url =
    `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0` +
    `&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs` +
    `&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features || !data.features.length) {
        alert("No EVC data found for this location.");
        return;
      }

      const pt = turf.point([lon, lat]);
      let feat =
        data.features.find(f => {
          return (
            f.geometry.type === "Polygon" &&
            turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
          );
        }) || data.features[0];

      const p = feat.properties;
      displayEVCInfo(
        p.x_evcname || "Unknown",
        p.evc || "Unknown",
        p.evc_bcs_desc || "Not specified",
        p.bioregion || "Not specified"
      );
    })
    .catch(err => {
      console.error("EVC fetch error:", err);
      alert("Problem retrieving EVC data.");
    });
}

/**
 * Populate and show modal
 */
function displayEVCInfo(name, code, status, region) {
  currentEvcCode = code;

  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

  document.getElementById("gf-address").value =
    document.getElementById("address-input").value.trim();
  document.getElementById("gf-evcCode").value = code;

  document.getElementById("evc-modal").style.display = "flex";
}
