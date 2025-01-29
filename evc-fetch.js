document.addEventListener("DOMContentLoaded", function () {
    loadMenu();
    initMap();

    fetch("evc-plant-data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data); // Debug: View plant data in console
            document.getElementById("search-button").addEventListener("click", function () {
                searchEVC(data);
            });
        })
        .catch(error => console.error("Error fetching EVC plant list:", error));
});

// Function to dynamically load the menu
function loadMenu() {
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading menu:", error));
}

// Initialize the map
function initMap() {
    window.map = L.map('map').setView([-37.8136, 144.9631], 8); // Default: Melbourne

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(window.map);
}

// Function to search for EVC based on address
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
            console.log(`Coordinates: ${lat}, ${lon}`);
            updateMap(lat, lon);
            getEVCData(lat, lon, data);
        })
        .catch(error => console.error("Error fetching address:", error));
}

// Update map with marker on searched location
function updateMap(lat, lon) {
    window.map.setView([lat, lon], 12);
    if (window.marker) {
        window.map.removeLayer(window.marker);
    }
    window.marker = L.marker([lat, lon]).addTo(window.map);
}

// Function to fetch EVC data
function getEVCData(lat, lon, data) {
    const evcCode = "175"; // Replace with dynamic lookup later
    const evc = data.find(e => e.EVC_Code === evcCode);

    if (!evc) {
        document.getElementById("evc-details").innerHTML = "<p>No plant list found for this EVC.</p>";
        return;
    }

    document.getElementById("evc-details").innerHTML = `
        <p><b>Your EVC:</b> ${evc.EVC_Name}</p>
        <p><b>Conservation Status:</b> ${evc.Conservation_Status}</p>
        <p><b>Bioregion:</b> ${evc.Bioregion}</p>
        <h4>Recommended Plants:</h4>
        <ul>
            ${evc.Plant_Species.map(species => `
                <li>
                    <b>${species.Common_Name}</b> (*${species.Scientific_Name}*) - 
                    ${species.Layer}, ${species.Soil_Type}, ${species.Sunlight}, 
                    ${species.Water_Requirement} Water
                </li>
            `).join("")}
        </ul>
    `;

    // Show the download button
    document.getElementById("download-button").style.display = "block";

    // Stripe Payment for Download
    document.getElementById("download-button").addEventListener("click", function () {
        const stripe = Stripe("your-stripe-public-key"); // Replace with actual key
        stripe.redirectToCheckout({
            lineItems: [{ price: "price_12345", quantity: 1 }],
            mode: "payment",
            successUrl: "https://yourwebsite.com/success",
            cancelUrl: "https://yourwebsite.com/cancel"
        });
    });
}
