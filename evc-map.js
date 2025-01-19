document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    
    searchButton.addEventListener("click", function () {
        const address = document.getElementById("address-input").value;
        if (!address) {
            alert("Please enter an address.");
            return;
        }

        // Fetch coordinates using OpenStreetMap Nominatim API
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    alert("Address not found. Try again.");
                    return;
                }

                const lat = data[0].lat;
                const lon = data[0].lon;

                console.log(`Coordinates: ${lat}, ${lon}`);
                alert(`Coordinates found! Lat: ${lat}, Lon: ${lon}`);

                // Call function to fetch EVC data
                fetchEVCData(lat, lon);
            })
            .catch(error => console.error("Error fetching coordinates:", error));
    });
});

function fetchEVCData(lat, lon) {
    // Define a small bounding box around the coordinates
    const bboxSize = 0.001; // ~111 meters
    const bbox = [
        lon - bboxSize, lat - bboxSize,  // Min longitude, Min latitude
        lon + bboxSize, lat + bboxSize   // Max longitude, Max latitude
    ].join(',');

    // Construct the WFS request URL
    const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?` +
                   `service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&` +
                   `bbox=${bbox},EPSG:4326&outputFormat=application/json`;

    console.log("Fetching EVC data from WFS:", wfsUrl);

    // Fetch data from the WFS service
    fetch(wfsUrl)
        .then(response => response.json())
        .then(data => {
            if (data.features.length > 0) {
                const evcName = data.features[0].properties.evc_name; // Extract the EVC name
                document.getElementById("evc-result").innerHTML = `<b>Your EVC:</b> ${evcName}`;
                console.log("EVC Data:", evcName);
            } else {
                document.getElementById("evc-result").innerHTML = "No EVC data found for this location.";
                console.log("No EVC data found.");
            }
        })
        .catch(error => {
            console.error("Error fetching EVC data:", error);
            document.getElementById("evc-result").innerHTML = "Error retrieving EVC data. Please try again.";
        });
}


    // TODO: Fetch data from WMS/WFS API and display the result
}
