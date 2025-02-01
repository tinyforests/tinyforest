// Global variables for the map and marker
let map;
let marker;

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded, initializing map...");

  // Initialize the Leaflet map with a default view (Melbourne)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);
  console.log("Map initialized.");

  // Attach event listener to the search button
  document.getElementById("search-button").addEventListener("click", function () {
    console.log("Search button clicked.");
    searchEVC();
  });
});

// Function to geocode the address and fetch EVC data from the Victorian Government API
function searchEVC() {
  const address = document.getElementById("address-input").value;
  console.log("Address entered:", address);
  if (!address) {
    alert("Please enter an address.");
    return;
  }

  // Geocode the address using Nominatim
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(response => response.json())
    .then(results => {
      console.log("Geocoding results:", results);
      if (results.length === 0) {
        alert("Address not found.");
        return;
      }

      // Use the first geocoding result
      const lat = parseFloat(results[0].lat);
      const lon = parseFloat(results[0].lon);
      console.log("Coordinates found:", lat, lon);

      // Update map view and add/update marker
      map.setView([lat, lon], 12);
      if (marker) {
        map.removeLayer(marker);
      }
      marker = L.marker([lat, lon]).addTo(map);

      // Fetch EVC data from the Victorian Government API
      fetchEVCData(lat, lon);
    })
    .catch(error => console.error("Error fetching geocoding results:", error));
}

// Function to fetch EVC data using the government WFS API
function fetchEVCData(lat, lon) {
  // Use a narrower bbox for a more accurate, focused search
  const bboxSize = 0.02;
  const bbox = [lon - bboxSize, lat - bboxSize, lon + bboxSize, lat + bboxSize].join(',');
  // Note the updated typeName for pre-1750 EVC data
  const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?` +
                 `service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:pre1750_evcbcs&` +
                 `bbox=${bbox},EPSG:4326&outputFormat=application/json`;
  console.log("Fetching EVC data from:", wfsUrl);

  fetch(wfsUrl)
    .then(response => response.json())
    .then(data => {
      console.log("EVC data received:", data);
      if (data.features && data.features.length > 0) {
        let bestFeature = null;
        const point = turf.point([lon, lat]);

        // Use Turf.js to select the feature that contains the search point
        for (const feature of data.features) {
          if (feature.geometry && feature.geometry.type === "Polygon") {
            const poly = turf.polygon(feature.geometry.coordinates);
            if (turf.booleanPointInPolygon(point, poly)) {
              bestFeature = feature;
              break;
            }
          }
        }
        // Fallback: if none contain the point, select the first feature
        if (!bestFeature) bestFeature = data.features[0];

        const properties = bestFeature.properties;
        console.log("Selected Properties:", properties);

        // Extract the properties (adjust keys if necessary based on the API's response)
        const evcCode = properties.evc || "Unknown";
        const evcName = properties.x_evcname || "Unknown";
        const conservationStatus = properties.evc_bcs_desc || "Not Specified";
        const bioregion = properties.bioregion || "Not Specified";

        // Display the EVC information and show the purchase button
        displayEVCInfo(evcName, evcCode, conservationStatus, bioregion);
      } else {
        document.getElementById("evc-details").innerHTML = "<p>No EVC data found for this location.</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching EVC data:", error);
      document.getElementById("evc-details").innerHTML = "<p>Error retrieving EVC data.</p>";
    });
}

// Function to display the EVC information and show the purchase button
function displayEVCInfo(evcName, evcCode, conservationStatus, bioregion) {
  document.getElementById("evc-details").innerHTML = `
    <p><b>Your EVC:</b> ${evcName}</p>
    <p><b>EVC Code:</b> ${evcCode}</p>
    <p><b>Conservation Status:</b> ${conservationStatus}</p>
    <p><b>Bioregion:</b> ${bioregion}</p>
  `;
  // Show the purchase button
  document.getElementById("download-button").style.display = "block";
  console.log("EVC information displayed.");
}
