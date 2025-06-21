// Global references
let map;
let marker;
let currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize Leaflet map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Wire up the address form submit
  document.getElementById("address-form")
    .addEventListener("submit", searchEVC);

  // 3) Modal close button
  document.getElementById("modal-close")
    .addEventListener("click", () => {
      document.getElementById("evc-modal").style.display = "none";
    });

  // 4) Click outside modal content to close
  document.getElementById("evc-modal")
    .addEventListener("click", e => {
      if (e.target.id === "evc-modal") {
        document.getElementById("evc-modal").style.display = "none";
      }
    });
});

/**
 * Handles the address-form submission
 */
function searchEVC(event) {
  event.preventDefault(); // STOP page reload

  const address = document.getElementById("address-input").value.trim();
  if (!address) {
    alert("Please enter an address.");
    return;
  }

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(results => {
      if (!results.length) {
        alert("Address not found.");
        return;
      }
      const { lat, lon } = results[0];
      const latNum = parseFloat(lat), lonNum = parseFloat(lon);

      // Update map & marker
      map.setView([latNum, lonNum], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([latNum, lonNum]).addTo(map);

      // Fetch the EVC data now
      fetchEVCData(latNum, lonNum);
    })
    .catch(err => {
      console.error("Geocode error:", err);
      alert("Problem looking up that address.");
    });
}

/**
 * Fetches EVC data from Victoria’s API
 */
function fetchEVCData(lat, lon) {
  const delta = 0.02;
  const bbox = [lon - delta, lat - delta, lon + delta, lat + delta].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0` +
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
      let feat = data.features.find(f => {
        return f.geometry.type === "Polygon"
          && turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates));
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
 * Populate and show the modal
 */
function displayEVCInfo(name, code, status, region) {
  currentEvcCode = code;

  // Populate text
  document.getElementById("modal-evc-name").textContent   = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;

  // Pre-fill hidden form inputs
  document.getElementById("gf-address").value = 
    document.getElementById("address-input").value.trim();
  document.getElementById("gf-evcCode").value = code;

  // Show the modal
  document.getElementById("evc-modal").style.display = "flex";
}
