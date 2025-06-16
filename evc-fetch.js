// evc-fetch.js

let modalMap, marker, currentEvcCode, currentAddress;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the modal map
  modalMap = L.map("modal-map", { zoomControl: false }).setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);

  // Handle address lookup form submission
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    currentAddress = addr;
    searchEVC(addr);
  });

  // Handle “Send List” button click (no form submission)
  document.getElementById("email-submit").addEventListener("click", () => {
    const email = document.getElementById("email-input").value.trim();
    if (!email) return alert("Please enter an email address.");
    recordSubmission(currentAddress, currentEvcCode, email);
    loadPlantList();
  });

  // Close the modal on × click
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
});

/**
 * Geocode the address and fetch EVC data
 */
function searchEVC(address) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const { lat, lon } = results[0];
      fetchEVCData(+lat, +lon);
    })
    .catch(err => {
      console.error("Geocode error:", err);
      alert(err.message || "Error finding that address.");
    });
}

/**
 * Fetch EVC data from Victorian Gov API and show modal
 */
function fetchEVCData(lat, lon) {
  const delta = 0.02;
  const bbox = [lon - delta, lat - delta, lon + delta, lat + delta].join(",");
  const url = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features || !data.features.length) {
        throw new Error("No EVC data for this location.");
      }
      const pt = turf.point([lon, lat]);
      const feature = data.features.find(f =>
        f.geometry?.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const { x_evcname, evc_bcs_desc, bioregion, evc } = feature.properties;
      currentEvcCode = evc || "";
      showModal(x_evcname, evc_bcs_desc, bioregion, evc, lat, lon);
    })
    .catch(err => {
      console.error("EVC fetch error:", err);
      alert(err.message || "Error retrieving EVC data.");
    });
}

/**
 * Populate and display the modal with EVC info and map
 */
function showModal(name, status, bioregion, code, lat, lon) {
  // Text fields
  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = bioregion;
  document.getElementById("modal-plants").innerHTML = "";    // clear previous list
  document.getElementById("email-input").value = "";         // clear email field

  // Load description from JSON
  fetch("curated-plants.json")
    .then(res => res.json())
    .then(json => {
      const desc = json[code]?.description || "";
      document.getElementById("modal-evc-description").textContent = desc;
    })
    .catch(err => {
      console.error("Description load error:", err);
      document.getElementById("modal-evc-description").textContent = "";
    });

  // Center and mark the map
  modalMap.setView([lat, lon], 12);
  if (marker) modalMap.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(modalMap);

  // Show the modal
  document.getElementById("evc-modal").style.display = "flex";
}

/**
 * Load and display the curated plant list in the modal
 */
function loadPlantList() {
  if (!currentEvcCode) return;

  fetch("curated-plants.json")
    .then(res => res.json())
    .then(json => {
      const entry = json[currentEvcCode];
      const container = document.getElementById("modal-plants");
      container.innerHTML = "";
      entry.recommendations.forEach(layer => {
        const section = document.createElement("div");
        section.className = "layer";
        const heading = document.createElement("h3");
        heading.textContent = layer.layer;
        section.appendChild(heading);
        const ul = document.createElement("ul");
        layer.plants.forEach(plant => {
          const li = document.createElement("li");
          li.textContent = plant;
          ul.appendChild(li);
        });
        section.appendChild(ul);
        container.appendChild(section);
      });
    })
    .catch(err => {
      console.error("Plant list load error:", err);
    });
}

/**
 * Save an entry of address + EVC + email to localStorage
 */
function recordSubmission(address, evcCode, email) {
  const key = "tinyforest_submissions";
  const submissions = JSON.parse(localStorage.getItem(key) || "[]");
  submissions.push({
    timestamp: new Date().toISOString(),
    address: address || "",
    evcCode: evcCode || "",
    email
  });
  localStorage.setItem(key, JSON.stringify(submissions));
}
