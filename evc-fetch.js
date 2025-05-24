// evc-fetch.js

// Global variables
let map;
let marker;
let currentEvcCode;  // will hold the last-found EVC code

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize Leaflet map centered on Melbourne
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Wire up the address search button
  document.getElementById("search-button").addEventListener("click", searchEVC);

  // 3) Wire up the plant-list button
  const plantBtn = document.getElementById("download-button");
  plantBtn.style.display = "none";  // hidden until we have an EVC
  plantBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!currentEvcCode) {
      alert("Please search for an address first.");
      return;
    }
    fetchCuratedPlants(currentEvcCode);
  });
});

/**
 * Geocode the address and kick off EVC lookup
 */
function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  if (!address) {
    alert("Please enter an address.");
    return;
  }

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(results => {
      if (!results.length) {
        alert("Address not found.");
        return;
      }
      const { lat, lon } = results[0];
      updateMapAndMarker(parseFloat(lat), parseFloat(lon));
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
function updateMapAndMarker(lat, lon) {
  map.setView([lat, lon], 12);
  if (marker) map.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(map);
}

/**
 * Fetch EVC data from the Victoria WFS API
 */
function fetchEVCData(lat, lon) {
  const bboxSize = 0.02;
  const bbox = [
    lon - bboxSize,
    lat - bboxSize,
    lon + bboxSize,
    lat + bboxSize
  ].join(",");
  const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(wfsUrl)
    .then(res => res.json())
    .then(data => {
      if (data.features && data.features.length) {
        const pt = turf.point([lon, lat]);
        // find the polygon containing our point, or just take the first
        const best = data.features.find(f => {
          if (f.geometry?.type === "Polygon") {
            return turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates));
          }
          return false;
        }) || data.features[0];

        const { x_evcname, evc, evc_bcs_desc, bioregion } = best.properties;
        displayEVCInfo(
          x_evcname || "Unknown",
          evc || "Unknown",
          evc_bcs_desc || "Not Specified",
          bioregion || "Not Specified"
        );
      } else {
        document.getElementById("evc-details").innerHTML =
          "<p>No EVC data found for this location.</p>";
        document.getElementById("download-button").style.display = "none";
      }
    })
    .catch(err => {
      console.error("Error fetching EVC data:", err);
      document.getElementById("evc-details").innerHTML =
        "<p>Error retrieving EVC data.</p>";
      document.getElementById("download-button").style.display = "none";
    });
}

/**
 * Populate the EVC info panel (but do NOT redirect on the button)
 */
function displayEVCInfo(name, code, status, region) {
  currentEvcCode = code;
  document.getElementById("evc-details").innerHTML = `
    <p><strong>Your EVC:</strong> ${name}</p>
    <p><strong>EVC Code:</strong> ${code}</p>
    <p><strong>Conservation Status:</strong> ${status}</p>
    <p><strong>Bioregion:</strong> ${region}</p>
  `;

  // reveal the button—click is now purely for in-page fetch
  document.getElementById("download-button").style.display = "inline-block";
}

/**
 * Fetch curated plant list for this EVC and render it
 */
function fetchCuratedPlants(evcCode) {
  fetch(`api/curated-plants?evcCode=${encodeURIComponent(evcCode)}`)
    .then(res => res.json())
    .then(plants => renderPlantList(plants))
    .catch(err => {
      console.error("Error fetching curated plants:", err);
      alert("Could not load plant list. Please try again later.");
    });
}

/**
 * Render the list of plants into #curated-list
 */
function renderPlantList(plants) {
  const list = document.getElementById("curated-list");
  if (!plants.length) {
    list.innerHTML = "<li>No plants found for this EVC.</li>";
  } else {
    list.innerHTML = plants
      .map(p => `<li>${p.commonName} (<em>${p.scientificName}</em>)</li>`)
      .join("");
  }
  list.style.display = "block";
}
