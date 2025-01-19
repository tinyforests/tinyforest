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
    // This function will integrate the WMS/WFS EVC dataset
    console.log(`Fetching EVC data for Lat: ${lat}, Lon: ${lon}`);

    // TODO: Fetch data from WMS/WFS API and display the result
}
