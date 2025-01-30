document.addEventListener("DOMContentLoaded", function () {
    fetch("evc-plant-data.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("search-button").addEventListener("click", function () {
                searchEVC(data);
            });
        })
        .catch(error => console.error("Error fetching EVC data:", error));
});

function searchEVC(data) {
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
            getEVCData(lat, lon, data);
        })
        .catch(error => console.error("Error fetching address:", error));
}

function getEVCData(lat, lon, data) {
    const evcCode = "175"; // Replace with dynamic lookup based on lat/lon
    const evc = data.find(e => e.EVC_Code === evcCode);

    if (!evc) {
        document.getElementById("evc-details").innerHTML = "<p>No data found for this EVC.</p>";
        document.getElementById("download-button").style.display = "none"; // Hide button if no EVC
        return;
    }

    // Display only the EVC information (No plant list)
    document.getElementById("evc-details").innerHTML = `
        <h4>${evc.EVC_Name} (EVC ${evc.EVC_Code})</h4>
        <p><b>Description:</b> ${evc.Description}</p>
    `;

    // Show the "Download Curated Plant List" button
    document.getElementById("download-button").style.display = "block";
}
