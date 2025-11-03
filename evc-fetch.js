// evc-fetch.js - Tiny Forest EVC Finder

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize main map (hidden via CSS)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Address search form
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // Location button
  const locationBtn = document.getElementById("location-button");
  if (locationBtn && "geolocation" in navigator) {
    locationBtn.addEventListener("click", () => {
      locationBtn.disabled = true;
      locationBtn.textContent = "Getting location...";
      
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude: lat, longitude: lon } = position.coords;
          map.setView([lat, lon], 12);
          marker && map.removeLayer(marker);
          marker = L.marker([lat, lon]).addTo(map);
          fetchEVCData(lat, lon);
          locationBtn.textContent = "📍 Use My Location";
          locationBtn.disabled = false;
        },
        error => {
          alert("Could not get your location. Please enter an address instead.");
          locationBtn.textContent = "📍 Use My Location";
          locationBtn.disabled = false;
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0
        }
      );
    });
  }

  // Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });
});

function geocodeAddress(address) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(r => {
      if (!r.ok) throw new Error(`Geocode failed (${r.status})`);
      return r.json();
    })
    .then(results => {
      if (!results.length) throw new Error("Address not found.");
      const [lat, lon] = [+results[0].lat, +results[0].lon];
      map.setView([lat, lon], 12);
      marker && map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch(err => alert(err.message));
}

function fetchEVCData(lat, lon) {
  const d = 0.02,
        bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`,
        url  = "https://opendata.maps.vic.gov.au/geoserver/wfs" +
               "?service=WFS&version=1.0.0&request=GetFeature" +
               "&typeName=open-data-platform:nv2005_evcbcs" +
               `&bbox=${bbox},EPSG:4326` +
               "&outputFormat=application/json";

  fetch(url)
    .then(r => r.text())
    .then(txt => {
      if (txt.trim().startsWith("<"))
        throw new Error("EVC service error. Try again later.");
      return JSON.parse(txt);
    })
    .then(data => {
      if (!data.features?.length)
        throw new Error("No EVC data found for this location.");
      
      const feature = data.features[0];
      const props = feature.properties;
      const evcCode = props.EVC || props.EVC_CODE || "Unknown";
      const evcName = props.EVC_NAME || "Unknown EVC";
      const bioregion = props.BIOREGION || "Unknown";
      
      showEvcModal(evcCode, evcName, bioregion, lat, lon);
    })
    .catch(err => alert(err.message));
}

function showEvcModal(evcCode, name, bioregion, lat, lon) {
  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-status").textContent = evcCode;
  document.getElementById("modal-evc-region").textContent = bioregion;
  
  const plantsDiv = document.getElementById("modal-plants");
  plantsDiv.style.display = "none";
  
  // Load plant data from external JSON
  fetch("curated-plants.json")
    .then(r => r.json())
    .then(data => {
      const evcData = data.evcs[evcCode];
      
      if (evcData && evcData.recommendations) {
        document.getElementById("modal-evc-description").textContent = evcData.description || "";
        
        // Render plant layers
        plantsDiv.innerHTML = "";
        evcData.recommendations.forEach(layer => {
          const layerDiv = document.createElement("div");
          layerDiv.className = "layer";
          
          const layerTitle = document.createElement("h3");
          layerTitle.textContent = layer.layer;
          layerDiv.appendChild(layerTitle);
          
          const plantList = document.createElement("ul");
          layer.plants.forEach(plant => {
            const li = document.createElement("li");
            li.textContent = plant;
            
            // Add camera icon if image exists
            const commonName = plant.match(/\(([^)]+)\)/)?.[1];
            if (commonName) {
              const slug = commonName.toLowerCase()
                .replace(/['']/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
              
              const img = new Image();
              img.src = `images/plants/${slug}.jpg`;
              img.onload = () => {
                const icon = document.createTextNode(" 📷");
                li.appendChild(icon);
                li.style.cursor = "pointer";
                
                li.addEventListener("mouseenter", (e) => {
                  const tooltip = document.createElement("div");
                  tooltip.className = "plant-image-tooltip";
                  tooltip.innerHTML = `<img src="images/plants/${slug}.jpg" alt="${commonName}">`;
                  document.body.appendChild(tooltip);
                  
                  const rect = li.getBoundingClientRect();
                  const tooltipRect = tooltip.getBoundingClientRect();
                  
                  if (window.innerWidth > 768) {
                    tooltip.style.left = (rect.left - tooltipRect.width - 10) + "px";
                    tooltip.style.top = (rect.top + (rect.height - tooltipRect.height) / 2) + "px";
                  } else {
                    tooltip.style.left = "50%";
                    tooltip.style.top = (rect.bottom + 10) + "px";
                    tooltip.style.transform = "translateX(-50%)";
                  }
                });
                
                li.addEventListener("mouseleave", () => {
                  document.querySelectorAll(".plant-image-tooltip").forEach(t => t.remove());
                });
              };
            }
            
            plantList.appendChild(li);
          });
          
          layerDiv.appendChild(plantList);
          plantsDiv.appendChild(layerDiv);
        });
        
        // Forest Kit Section
        const kitSection = document.createElement("div");
        kitSection.style.marginTop = "40px";
        kitSection.style.padding = "30px";
        kitSection.style.background = "#f7fafc";
        kitSection.style.borderRadius = "8px";
        kitSection.style.border = "2px solid #e2e8f0";
        
        const kitTitle = document.createElement("h2");
        kitTitle.textContent = "Get your Ecological Garden Kit";
        kitTitle.style.fontFamily = "'Abril Fatface', serif";
        kitTitle.style.fontSize = "2.5rem";
        kitTitle.style.marginBottom = "20px";
        kitTitle.style.color = "#3d4535";
        kitTitle.style.letterSpacing = "-2px";
        kitTitle.style.lineHeight = "1.2em";
        kitSection.appendChild(kitTitle);
        
        const kitDescription = document.createElement("p");
        kitDescription.textContent = `Get a curated collection of indigenous plants for ${name}.`;
        kitDescription.style.fontFamily = "'IBM Plex Mono', monospace";
        kitDescription.style.fontSize = "1.1rem";
        kitDescription.style.marginBottom = "20px";
        kitDescription.style.color = "#666";
        kitSection.appendChild(kitDescription);
        
        const kitButton = document.createElement("button");
        kitButton.textContent = "Buy Forest Kit";
        kitButton.style.padding = "1rem 2rem";
        kitButton.style.backgroundColor = "#3d4535";
        kitButton.style.color = "#fff0dc";
        kitButton.style.border = "none";
        kitButton.style.borderRadius = "8px";
        kitButton.style.fontFamily = "'IBM Plex Mono', monospace";
        kitButton.style.fontWeight = "700";
        kitButton.style.fontSize = "1rem";
        kitButton.style.cursor = "pointer";
        kitButton.style.width = "100%";
        kitButton.addEventListener("click", () => {
          window.open("https://forms.gle/YOUR_FORM_ID", "_blank");
        });
        kitSection.appendChild(kitButton);
        
        plantsDiv.appendChild(kitSection);
        
      } else {
        document.getElementById("modal-evc-description").textContent = 
          "Plant recommendations coming soon for this EVC.";
        plantsDiv.innerHTML = "";
      }
      
      plantsDiv.style.display = "block";
    })
    .catch(err => {
      console.error('Failed to load plant data:', err);
      document.getElementById("modal-evc-description").textContent = 
        "Plant data currently unavailable. Please try again later.";
      plantsDiv.innerHTML = "";
    });

  // Setup modal map
  modalMap && modalMap.remove();
  modalMap = L.map("modal-map").setView([lat, lon], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(modalMap);
  L.marker([lat, lon]).addTo(modalMap);

  // Show modal
  const modal = document.getElementById("evc-modal");
  modal.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}
