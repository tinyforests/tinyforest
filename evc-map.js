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

                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);

                console.log(`Coordinates: ${lat}, ${lon}`);

                // Call function to fetch EVC data
                fetchEVCData(lat, lon);
            })
            .catch(error => console.error("Error fetching coordinates:", error));
    });
});

function fetchEVCData(lat, lon) {
    const bboxSize = 0.01; // Increased BBOX size for broader coverage (~1km)
    const bbox = [
        lon - bboxSize, lat - bboxSize,  // Min longitude, Min latitude
        lon + bboxSize, lat + bboxSize   // Max longitude, Max latitude
    ].join(',');

    const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?` +
                   `service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&` +
                   `bbox=${bbox},EPSG:4326&outputFormat=application/json`;

    console.log("Constructed WFS URL:", wfsUrl);

    fetch(wfsUrl)
        .then(response => response.json())
        .then(data => {
            console.log("WFS Response:", data); // Log the entire response

            if (data.features && data.features.length > 0) {
                const featureProperties = data.features[0].properties; // Log feature properties
                console.log("Feature Properties:", featureProperties);

                // Use the correct property name for EVC
                const evc = featureProperties.evc;
                if (evc) {
                    document.getElementById("evc-result").innerHTML = `<b>Your EVC:</b> ${evc}`;
                } else {
                    document.getElementById("evc-result").innerHTML = "EVC name not found in the response.";
                }
            } else {
                document.getElementById("evc-result").innerHTML = "No EVC data found for this location.";
                console.log("No features found in WFS response.");
            }
        })
        .catch(error => {
            console.error("Error fetching WFS data:", error);
            document.getElementById("evc-result").innerHTML = "Error retrieving EVC data. Please try again.";
        });
}
