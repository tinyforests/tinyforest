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
                const lon = parseFloat(data[0].lon
