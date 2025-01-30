document.addEventListener("DOMContentLoaded", function () {
    fetch("evc-descriptions.json") // Fetch EVC descriptions from local JSON
        .then(response => response.json())
        .then(evcDescriptions => {
            document.getElementById("search-button").addEventListener("click", function () {
                searchEVC(evcDescriptions);
            });
        })
        .catch(error => console.error("Error fetching EVC descriptions:", error));
});

function searchEVC(evcDescriptions) {
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
            getEVCData(lat, lon, evcDescriptions);
        })
        .catch(error => console.error("Error fetching address:", error));
}

function getEVCData(lat, lon, evcDescriptions) {
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
                const evcCode = properties.evc;  // Get the EVC Code
                const evcName = properties.x_evcname;  // Get the EVC Name

                // Check if description exists in JSON
                const evcDesc = evcDescriptions[evcCode] ? evcDescriptions[evcCode].Description : "No description available.";

                displayEVCInfo(evcCode, evcName, evcDesc);
            } else {
                document.getElementById("evc-details").innerHTML = "<p>No EVC data found for this location.</p>";
                document.getElementById("download-button").style.display = "none";
            }
        })
        .catch(error => {
            console.error("Error fetching EVC data:", error);
            document.getElementById("evc-details").innerHTML = "Error retrieving EVC data.";
        });
}

function displayEVCInfo(evcCode, evcName, evcDesc) {
    document.getElementById("evc-details").innerHTML = `
        <h4>${evcName} (EVC ${evcCode})</h4>
        <p><b>Description:</b> ${evcDesc}</p>
    `;

    document.getElementById("download-button").style.display = "block";
}
