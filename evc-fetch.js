document.addEventListener("DOMContentLoaded", function () {
    fetch("evc-plant-data.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("search-button").addEventListener("click", function () {
                searchEVC(data);
            });
        })
        .catch(error => console.error("Error fetching EVC plant list:", error));
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
    const evcCode = "175"; // Replace this with dynamic lookup based on lat/lon
    const evc = data.find(e => e.EVC_Code === evcCode);

    if (!evc) {
        document.getElementById("evc-details").innerHTML = "<p>No plant list found for this EVC.</p>";
        return;
    }

    let plantListHTML = `
        <h4>${evc.EVC_Name}</h4>
        <p><b>Description:</b> ${evc.Description}</p>
        <h4>Recommended Plants:</h4>
        <ul>
    `;

    evc.Plant_Species.forEach(species => {
        plantListHTML += `
            <li>
                <b>${species.Common_Name}</b> (*${species.Scientific_Name}*) - 
                ${species.Layer}, ${species.Soil_Type}, ${species.Sunlight}, 
                ${species.Water_Requirement} Water
            </li>
        `;
    });

    plantListHTML += "</ul>";

    document.getElementById("evc-details").innerHTML = plantListHTML;
}
