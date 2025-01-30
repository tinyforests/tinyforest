document.addEventListener("DOMContentLoaded", function () {
    // Load the plant data JSON
    fetch("evc-plant-data.json")
        .then(response => response.json())
        .then(plantData => {
            document.getElementById("search-button").addEventListener("click", function () {
                searchEVC(plantData);
            });
        })
        .catch(error => console.error("Error fetching EVC plant list:", error));
});

// Function to fetch EVC based on address input
function searchEVC(plantData) {
    const address = document.getElementById("address-input").value;
    if (!address) {
        alert("Please enter an address.");
        return;
    }

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then(response => response.json())
        .then(results => {
            if (results.length === 0) {
                alert("Address not found.");
                return;
            }

            const lat = parseFloat(results[0].lat);
            const lon = parseFloat(results[0].lon);

            // Fetch the EVC data dynamically
            fetchEVCData(lat, lon, plantData);
        })
        .catch(error => console.error("Error fetching address:", error));
}

// Function to get EVC data dynamically from Victorian Government API
function fetchEVCData(lat, lon, plantData) {
    const bboxSize = 0.01;
    const bbox = [lon - bboxSize, lat - bboxSize, lon + bboxSize, lat + bboxSize].join(',');

    const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?` +
                   `service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&` +
                   `bbox=${bbox},EPSG:4326&outputFormat=application/json`;

    fetch(wfsUrl)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const properties = data.features[0].properties;
                const evcCode = properties.evc || "Unknown";  // Extract EVC Code
                const evcName = properties.x_evcname || "Unknown";  // Extract EVC Name
                const conservationStatus = properties.evc_bcs_desc || "Not Specified";  // Conservation Status
                const bioregion = properties.bioregion || "Not Specified";  // Bioregion Name

                // Find matching EVC in evc-plant-data.json
                const evcDetails = plantData.find(e => e.EVC_Code === evcCode);

                // Display EVC details
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

// Function to display EVC information
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

    document.getElementById("download-button").style.display = evcDetails ? "block" : "none";
}
