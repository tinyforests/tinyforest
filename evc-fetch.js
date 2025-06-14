// evc-fetch.js

// Global variables
let map;
let marker;
let currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize the Leaflet map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Handle the form submission instead of button click
  const form = document.getElementById("address-form");
  form.addEventListener("submit", e => {
    e.preventDefault();    // STOP the browser navigating away
    searchEVC();
  });

  // 3) Wire up the “View Curated Plant List” button
  const plantBtn = document.getElementById("download-button");
  plantBtn.style.display = "none"; // hide until we have an EVC
  plantBtn.addEventListener("click", () => {
    if (!currentEvcCode) {
      return alert("Please search for an address first.");
    }
    // redirect to curated-plants page
    window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(currentEvcCode)}`;
  });
});

/**
 * Geocode the address and kick off EVC lookup
 */
function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  if (!address) {
    return alert("Please enter an address.");
  }

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(results => {
      if (!results.length) {
        return alert("Address not found.");
      }
      const { lat, lon } = results[0];
      updateMap(parseFloat(lat), parseFloat(lon));
      fetchEVCData(parseFloat(lat), parseFloat(lon));
    })
    .catch(err => {
      console.error("Error fetching geocoding results:", err);
      alert("Error finding that address.");
    });
}

/**
 * Update map view and marker position
 */
function updateMap(lat, lon) {
  map.setView([lat, lon], 12);
  if (marker) map.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(map);
}

/**
 * Fetch EVC data from the Victoria WFS API
 */
function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features || !data.features.length) {
        document.getElementById("evc-details").innerHTML = "<p>No EVC data found for this location.</p>";
        document.getElementById("download-button").style.display = "none";
      } else {
        const pt = turf.point([lon, lat]);
        const feature = data.features.find(f =>
          f.geometry?.type === "Polygon" &&
          turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
        ) || data.features[0];

        const { x_evcname, evc, evc_bcs_desc, bioregion } = feature.properties;
        displayEVCInfo(
          x_evcname || "Unknown",
          evc || "Unknown",
          evc_bcs_desc || "Not Specified",
          bioregion || "Not Specified"
        );
      }
    })
    .catch(err => {
      console.error("Error fetching EVC data:", err);
      document.getElementById("evc-det
