// evc-fetch.js - Cleaned version with external JSON loading

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // Legacy map (hidden via CSS)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Address lookup
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // Geolocation button
  document.getElementById("location-button").addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    const btn = document.getElementById("location-button");
    btn.textContent = "📍 Getting location...";
    btn.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        // Update map
        map.setView([lat, lon], 12);
        marker && map.removeLayer(marker);
        marker = L.marker([lat, lon]).addTo(map);
        
        // Fetch EVC data
        fetchEVCData(lat, lon);
        
        // Reset button
        btn.textContent = "📍 Use My Location";
        btn.disabled = false;
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Unable to get your location. Please enter your address instead.");
        btn.textContent = "📍 Use My Location";
        btn.disabled = false;
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });

  // Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // Email form - just for lead capture now, plants show immediately
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    btn.textContent = "Thanks! Check your email soon.";
    btn.disabled = true;
    // Form still submits to Google Forms in background via iframe
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
      const pt   = turf.point([lon, lat]),
            feat = data.features.find(f =>
                     f.geometry.type === "Polygon" &&
                     turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
                   ) || data.features[0],
            p    = feat.properties;

      displayModal(p.x_evcname, p.evc_bcs_desc, p.bioregion, p.evc, lat, lon);
    })
    .catch(err => alert(err.message));
}

function displayModal(name, status, region, code, lat, lon) {
  // Set basic info from API
  document.getElementById("modal-evc-name").textContent = name || "Unknown";
  document.getElementById("modal-evc-status").textContent = status || "Not specified";
  document.getElementById("modal-evc-region").textContent = region || "Not specified";

  // Fetch curated plant data from external JSON
  fetch('curated-plants.json')
    .then(r => {
      if (!r.ok) throw new Error('Could not load plant data');
      return r.json();
    })
    .then(data => {
      const evcInfo = data.evcs[code];
      
      // Set description
      const descriptionEl = document.getElementById("modal-evc-description");
      if (evcInfo?.description) {
        descriptionEl.textContent = evcInfo.description;
      } else {
        descriptionEl.textContent = "We're still researching plants for this EVC. Check back soon!";
        descriptionEl.style.fontStyle = "italic";
        descriptionEl.style.color = "#666";
      }

      // Build plant list
      const plantsDiv = document.getElementById("modal-plants");
      plantsDiv.innerHTML = "";
      
      if (evcInfo?.recommendations && evcInfo.recommendations.length > 0) {
        // Add title
        const titleEl = document.createElement("h2");
        titleEl.textContent = "Here's your plant list";
        titleEl.style.fontFamily = "'Abril Fatface', serif";
        titleEl.style.fontSize = "28px";
        titleEl.style.marginTop = "30px";
        titleEl.style.marginBottom = "20px";
        titleEl.style.color = "inherit"; // Match EVC title color
        plantsDiv.appendChild(titleEl);

        // Add plant layers
        evcInfo.recommendations.forEach(sec => {
          const layerDiv = document.createElement("div");
          layerDiv.className = "layer";
          layerDiv.style.marginBottom = "20px";
          
          const heading = document.createElement("h3");
          heading.textContent = sec.layer;
          heading.style.fontWeight = "700";
          heading.style.fontSize = "16px";
          heading.style.marginBottom = "10px";
          heading.style.color = "inherit"; // Match description text color
          layerDiv.appendChild(heading);
          
          const list = document.createElement("ul");
          list.style.listStyle = "none";
          list.style.padding = "0";
          list.style.margin = "0";
          
          sec.plants.forEach(plant => {
            const item = document.createElement("li");
            item.textContent = plant;
            item.style.padding = "8px 0";
            item.style.borderBottom = "1px solid #e2e8f0";
            item.style.fontSize = "14px";
            list.appendChild(item);
          });
          layerDiv.appendChild(list);
          
          plantsDiv.appendChild(layerDiv);
        });

        // Add Forest Kit section
        const kitSection = document.createElement("div");
        kitSection.style.marginTop = "40px";
        kitSection.style.padding = "30px";
        kitSection.style.background = "#f7fafc";
        kitSection.style.borderRadius = "8px";
        kitSection.style.border = "2px solid #e2e8f0";
        
        const kitTitle = document.createElement("h2");
        kitTitle.textContent = "Get your forest kit";
        kitTitle.style.fontFamily = "'Abril Fatface', serif";
        kitTitle.style.fontSize = "28px";
        kitTitle.style.marginBottom = "15px";
        kitTitle.style.color = "#3d4535";
        kitSection.appendChild(kitTitle);
        
        const kitDescription = document.createElement("p");
        kitDescription.textContent = "A curated selection of plants from your EVC, ready to plant in your garden.";
        kitDescription.style.marginBottom = "20px";
        kitDescription.style.color = "#3d4535";
        kitDescription.style.fontSize = "16px";
        kitSection.appendChild(kitDescription);
        
        const kitButton = document.createElement("button");
        kitButton.textContent = "Buy Forest Kit";
        kitButton.style.background = "#48bb78";
        kitButton.style.color = "white";
        kitButton.style.border = "none";
        kitButton.style.padding = "14px 28px";
        kitButton.style.borderRadius = "6px";
        kitButton.style.fontSize = "16px";
        kitButton.style.fontWeight = "600";
        kitButton.style.cursor = "pointer";
        kitButton.style.transition = "all 0.2s";
        
        kitButton.addEventListener("mouseover", () => {
          kitButton.style.background = "#38a169";
          kitButton.style.transform = "translateY(-2px)";
        });
        
        kitButton.addEventListener("mouseout", () => {
          kitButton.style.background = "#48bb78";
          kitButton.style.transform = "translateY(0)";
        });
        
        kitButton.addEventListener("click", () => {
          // Replace with your actual forest kit purchase link
          alert("Forest Kit purchase coming soon! This would link to your store.");
          // window.location.href = "https://your-store.com/forest-kit?evc=" + code;
        });
        
        kitSection.appendChild(kitButton);
        plantsDiv.appendChild(kitSection);
        
      } else {
        // No plant data available yet
        plantsDiv.innerHTML = '<p style="color: #666; font-style: italic; padding: 20px;">Plant recommendations coming soon for this EVC.</p>';
      }
      
      // Show plants immediately (no email gate)
      plantsDiv.style.display = "block";
    })
    .catch(err => {
      console.error('Failed to load plant data:', err);
      document.getElementById("modal-evc-description").textContent = 
        "Plant data currently unavailable. Please try again later.";
      document.getElementById("modal-plants").innerHTML = "";
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
