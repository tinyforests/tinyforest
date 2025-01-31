// Declare global variables for the map and marker so they can be updated later
let map;
let marker;

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Leaflet map with a default view (Melbourne)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Load the plant data JSON file (ensure "evc-plant-data.json" is in the correct location)
  fetch("evc-plant-data.json")
    .then(response => response.json())
    .then(plantData => {
      // Add click event listener to the search button
      document.getElementById("search-button").addEventListener("click", function () {
        searchEVC(plantData);
      });
    })
    .catch(error => console.error("Error fetching EVC plant list:", error));
});

// Function to geocode the address and fetch EVC data
function searchEVC(plantData) {
  const address = document.getElementById("address-input").value;
  if (!address) {
    alert("Please enter an address.");
    return;
  }

  // Use the Nominatim API to geocode the address
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(response => response.json())
    .then(results => {
      if (results.length === 0) {
        alert("Address not found.");
        return;
      }

      // Use the first result from Nominatim
      const lat = parseFloat(results[0].lat);
      const lon = parseFloat(results[0].lon);

      // Update the map view and add or update a marker at the found coordinates
      map.setView([lat, lon], 12);
      if (marker) {
        map.removeLayer(marker);
      }
      marker = L.marker([lat, lon]).addTo(map);

      // Fetch the EVC data using the coordinates and plant data
      fetchEVCData(lat, lon, plantData);
    })
    .catch(error => console.error("Error fetching address:", error));
}

// Function to fetch EVC data from the Victorian Government WFS API
function fetchEVCData(lat, lon, plantData) {
  const bboxSize = 0.01; // Defines a small bounding box around the coordinate
  const bbox = [lon - bboxSize, lat - bboxSize, lon + bboxSize, lat + bboxSize].join(',');
  // Construct the WFS URL; adjust typeName if the service changes
  const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?` +
                 `service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&` +
                 `bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  console.log("Fetching EVC data from:", wfsUrl);

  fetch(wfsUrl)
    .then(response => response.json())
    .then(data => {
      if (data.features && data.features.length > 0) {
        const properties = data.features[0].properties;
        const evcCode = properties.evc || "Unknown";       // Extract EVC Code
        const evcName = properties.x_evcname || "Unknown";   // Extract EVC Name
        const conservationStatus = properties.evc_bcs_desc || "Not Specified";  // Conservation Status
        const bioregion = properties.bioregion || "Not Specified";              // Bioregion Name

        // Find matching EVC details from the plant data JSON
        const evcDetails = plantData.find(e => e.EVC_Code === evcCode);

        // Display the EVC information on the page
        displayEVCInfo(evcCode, evcName, conservationStatus, bioregion, evcDetails);
      } else {
        document.getElementById("evc-details").innerHTML = "<p>No EVC data found for this location.</p>";
        document.getElementById("download-button").style.display = "none";
      }
    })
    .catch(error => {
      console.error("Error fetching EVC data:", error);
      document.getElementById("evc-details").innerHTML = "<p>Error retrieving EVC data.</p>";
      document.getElementById("download-button").style.display = "none";
    });
}

// Function to display the EVC information in the designated container
function displayEVCInfo(evcCode, evcName, conservationStatus, bioregion, evcDetails) {
  let additionalInfo = "";
  if (evcDetails) {
    additionalInfo = `<p><b>Description:</b> ${evcDetails.Description || "No additional description available."}</p>`;
  }
  document.getElementById("evc-details").innerHTML = `
    <p><b>Your EVC:</b> ${evcName} (EVC ${evcCode})</p>
    <p><b>Conservation Status:</b> ${conservationStatus}</p>
    <p><b>Bioregion:</b> ${bioregion}</p>
    ${additionalInfo}
  `;
  // Only show the download button if additional EVC details are available
  document.getElementById("download-button").style.display = evcDetails ? "block" : "none";
}
