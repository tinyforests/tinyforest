// evc-fetch.js

// Global variables
let map;
let marker;
let currentEvcCode;  // will hold the last found EVC code

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the Leaflet map centered on Melbourne
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Attach search button listener
  document.getElementById("search-button").addEventListener("click", searchEVC);
});

/**
 * Geocode the address and fetch EVC data
 */
function searchEVC() {
  const address = document.getElementById("address-input").value;
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
      const lat = parseFloat(results[0].lat);
      const lon = parseFloat(results[0].lon);

      // Update map and marker
      map.setView([lat, lon], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);

      // Fetch EVC data for the coordinates
      fetchEVCData(lat, lon);
    })
    .catch(err => console.error("Error fetching geocoding results:", err));
}

/**
 * Fetches EVC data from the Victorian Gov API using a narrow bbox
 */
function fetchEVCData(lat, lon) {
  const bboxSize = 0.02;
  const bbox = [lon - bboxSize, lat - bboxSize, lon + bboxSize, lat + bboxSize].join(",");
  const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(wfsUrl)
    .then(res => res.json())
    .then(data => {
      if (data.features && data.features.length) {
        const point = turf.point([lon, lat]);
        let bestFeature = data.features.find(f => {
          if (f.geometry && f.geometry.type === "Polygon") {
            const poly = turf.polygon(f.geometry.coordinates);
            return turf.booleanPointInPolygon(point, poly);
          }
          return false;
        }) || data.features[0];

        const props = bestFeature.properties;
        const evcName = props.x_evcname || "Unknown";
        const evcCode = props.evc || "Unknown";
        const conservationStatus = props.evc_bcs_desc || "Not Specified";
        const bioregion = props.bioregion || "Not Specified";

        displayEVCInfo(evcName, evcCode, conservationStatus, bioregion);
      } else {
        document.getElementById("evc-details").innerHTML = "<p>No EVC data found for this location.</p>";
        document.getElementById("download-button").style.display = "none";
      }
    })
    .catch(err => {
      console.error("Error fetching EVC data:", err);
      document.getElementById("evc-details").innerHTML = "<p>Error retrieving EVC data.</p>";
      document.getElementById("download-button").style.display = "none";
    });
}

/**
 * Displays the EVC information and wires the purchase button
 */
function displayEVCInfo(evcName, evcCode, conservationStatus, bioregion) {
  // Store for later button linking
  currentEvcCode = evcCode;

  // Populate details
  document.getElementById("evc-details").innerHTML = `
    <p><b>Your EVC:</b> ${evcName}</p>
    <p><b>EVC Code:</b> ${evcCode}</p>
    <p><b>Conservation Status:</b> ${conservationStatus}</p>
    <p><b>Bioregion:</b> ${bioregion}</p>
  `;

  // Show & setup purchase button
  const btn = document.getElementById("download-button");
  btn.style.display = "block";
  btn.onclick = () => {
    window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(evcCode)}`;
  };
}
