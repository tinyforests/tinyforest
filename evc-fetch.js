document.addEventListener("DOMContentLoaded", function () {
    fetch("evc-plant-data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data); // View plant data in browser console
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
            console.log(`Coordinates: ${lat}, ${lon}`);
            getEVCData(lat, lon, data);
        })
        .catch(error => console.error("Error fetching address:", error));
}

function getEVCData(lat, lon, data) {
    const evcCode = "175"; // Replace with dynamic lookup if needed
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
