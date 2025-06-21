// Global variables
let map;
let marker;
let currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Attach the submit handler to the form
  const addressForm = document.getElementById("address-form");
  addressForm.addEventListener("submit", searchEVC);
});

/**
 * Geocode the address and fetch EVC data
 */
function searchEVC(event) {
  // prevent the form from reloading the page
  event.preventDefault();

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

      // Update the map and marker
      map.setView([latNum, lonNum], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([latNum, lonNum]).addTo(map);

      // Fetch EVC data
      fetchEVCData(latNum, lonNum);
    })
    .catch(err => {
      console.error("Error fetching geocoding results:", err);
      alert("There was a problem looking up that address.");
    });
}

/**
 * Fetches EVC data from the Victorian Gov API
 */
function fetchEVCData(lat, lon) {
  const bboxSize = 0.02;
  const bbox = [lon - bboxSize, lat - bboxSize, lon + bboxSize, lat + bboxSize].join(",");
  const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(wfsUrl)
    .then(res => res.json())
    .then(data => {
      if (!data.features || !data.features.length) {
        document.getElementById("modal-evc-name").textContent = "No data";
        document.getElementById("evc-modal").style.display = "flex";
        return;
      }

      const point = turf.point([lon, lat]);
      let feature = data.features.find(f => {
        if (f.geometry.type === "Polygon") {
          return turf.booleanPointInPolygon(point, turf.polygon(f.geometry.coordinates));
        }
      }) || data.features[0];

      const props = feature.properties;
      const name   = props.x_evcname || "Unknown";
      const code   = props.evc         || "Unknown";
      const status = props.evc_bcs_desc|| "Not specified";
      const region = props.bioregion   || "Not specified";

      displayEVCInfo(name, code, status, region);
    })
    .catch(err => {
      console.error("Error fetching EVC data:", err);
      alert("There was a problem retrieving your EVC.");
    });
}

/**
 * Show modal, populate fields, map, etc.
 */
function displayEVCInfo(name, code, status, region) {
  currentEvcCode = code;

  // populate modal text
  document.getElementById("modal-evc-name").textContent    = name;
  document.getElementById("modal-evc-status").textContent  = status;
  document.getElementById("modal-evc-region").textContent  = region;
  // description logic assumed in modal already

  // prefill hidden form inputs
  document.getElementById("gf-address").value = document.getElementById("address-input").value;
  document.getElementById("gf-evcCode").value = code;

  // show the modal
  document.getElementById("evc-modal").style.display = "flex";
}

// close button for the modal
document.addEventListener("click", e => {
  if (e.target.id === "modal-close" || e.target.id === "evc-modal") {
    document.getElementById("evc-modal").style.display = "none";
  }
});
