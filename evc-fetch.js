// Build plant list
      const plantsDiv = document.getElementById("modal-plants");
      plantsDiv.innerHTML = "";
      
      if (evcInfo?.recommendations && evcInfo.recommendations.length > 0) {
        // Add title
        const titleEl = document.createElement("h2");// evc-fetch.js - Cleaned version with external JSON loading

let map, marker, modalMap;

document.addEventListener("DOMContentLoaded", () => {
  // Legacy map (hidden via CSS)
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // Address lookup (still available as backup)
  document.getElementById("address-form").addEventListener("submit", e => {
    e.preventDefault();
    const addr = document.getElementById("address-input").value.trim();
    if (!addr) return alert("Please enter an address.");
    geocodeAddress(addr);
  });

  // Geolocation button (manual trigger only)
  const locationBtn = document.getElementById("location-button");
  if (locationBtn) {
    locationBtn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
      }

      locationBtn.textContent = "📍 Getting location...";
      locationBtn.disabled = true;

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
          locationBtn.textContent = "📍 Use My Location";
          locationBtn.disabled = false;
        },
        (error) => {
          console.error("Geolocation error:", error);
          let errorMsg = "Unable to get your location. ";
          
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMsg += "Please allow location access in your browser settings and try again.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMsg += "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorMsg += "Location request timed out.";
              break;
            default:
              errorMsg += "An unknown error occurred.";
          }
          
          alert(errorMsg + " Please enter your address instead.");
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
        
        // Add EVC Tee section
        const teeSection = document.createElement("div");
        teeSection.style.marginTop = "20px";
        teeSection.style.padding = "30px";
        teeSection.style.background = "#f7fafc";
        teeSection.style.borderRadius = "8px";
        teeSection.style.border = "2px solid #e2e8f0";
        
        const teeTitle = document.createElement("h2");
        teeTitle.textContent = "Buy your EVC tee";
        teeTitle.style.fontFamily = "'Abril Fatface', serif";
        teeTitle.style.fontSize = "28px";
        teeTitle.style.marginBottom = "15px";
        teeTitle.style.color = "#3d4535";
        teeSection.appendChild(teeTitle);
        
        // Create image filename from EVC name
        const imageFilename = name.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/['']/g, '')
          .replace(/&/g, 'and')
          + '.png';
        
        // Image container
        const imageContainer = document.createElement("div");
        imageContainer.style.marginBottom = "20px";
        imageContainer.style.textAlign = "center";
        
        const teeImage = document.createElement("img");
        teeImage.src = `images/tees/${imageFilename}`;
        teeImage.alt = `${name} Tee`;
        teeImage.style.maxWidth = "100%";
        teeImage.style.height = "auto";
        teeImage.style.borderRadius = "8px";
        teeImage.style.maxHeight = "300px";
        teeImage.style.objectFit = "contain";
        
        // Handle image load error
        teeImage.onerror = function() {
          this.style.display = 'none';
          console.log(`Tee image not found: images/tees/${imageFilename}`);
        };
        
        imageContainer.appendChild(teeImage);
        teeSection.appendChild(imageContainer);
        
        const teeDescription = document.createElement("p");
        teeDescription.innerHTML = `Printed with <strong>${name}</strong> on the front.`;
        teeDescription.style.marginBottom = "20px";
        teeDescription.style.color = "#3d4535";
        teeDescription.style.fontSize = "16px";
        teeSection.appendChild(teeDescription);
        
        // Size selector and button container
        const teeControls = document.createElement("div");
        teeControls.style.display = "flex";
        teeControls.style.gap = "10px";
        teeControls.style.alignItems = "center";
        
        const sizeSelect = document.createElement("select");
        sizeSelect.id = "tee-size-select";
        sizeSelect.style.flex = "1";
        sizeSelect.style.padding = "12px";
        sizeSelect.style.fontSize = "16px";
        sizeSelect.style.border = "2px solid #e2e8f0";
        sizeSelect.style.borderRadius = "6px";
        sizeSelect.style.background = "white";
        sizeSelect.style.cursor = "pointer";
        sizeSelect.innerHTML = `
          <option value="" disabled selected>Choose size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        `;
        teeControls.appendChild(sizeSelect);
        
        const teeButton = document.createElement("button");
        teeButton.textContent = "Buy now";
        teeButton.style.background = "#48bb78";
        teeButton.style.color = "white";
        teeButton.style.border = "none";
        teeButton.style.padding = "12px 24px";
        teeButton.style.borderRadius = "6px";
        teeButton.style.fontSize = "16px";
        teeButton.style.fontWeight = "600";
        teeButton.style.cursor = "pointer";
        teeButton.style.transition = "all 0.2s";
        teeButton.style.whiteSpace = "nowrap";
        
        teeButton.addEventListener("mouseover", () => {
          teeButton.style.background = "#38a169";
          teeButton.style.transform = "translateY(-2px)";
        });
        
        teeButton.addEventListener("mouseout", () => {
          teeButton.style.background = "#48bb78";
          teeButton.style.transform = "translateY(0)";
        });
        
        teeButton.addEventListener("click", async () => {
          const size = sizeSelect.value;
          if (!size) {
            alert("Please choose a size first.");
            return;
          }
          
          // Copy EVC name to clipboard
          try {
            await navigator.clipboard.writeText(name);
          } catch (err) {
            console.log("Could not copy to clipboard");
          }
          
          // Replace with your actual Stripe payment link
          const STRIPE_LINK = "https://buy.stripe.com/YOUR_PAYMENT_LINK";
          
          if (STRIPE_LINK.includes('YOUR_PAYMENT_LINK')) {
            alert("Tee purchase coming soon! This would link to your Stripe checkout.");
            // window.location.href = `${STRIPE_LINK}?evc=${encodeURIComponent(name)}&size=${size}`;
          } else {
            window.location.href = `${STRIPE_LINK}?evc=${encodeURIComponent(name)}&size=${size}`;
          }
        });
        
        teeControls.appendChild(teeButton);
        teeSection.appendChild(teeControls);
        
        const teeHint = document.createElement("div");
        teeHint.textContent = "We'll copy your EVC text automatically for checkout.";
        teeHint.style.marginTop = "10px";
        teeHint.style.fontSize = "14px";
        teeHint.style.color = "#666";
        teeSection.appendChild(teeHint);
        
        plantsDiv.appendChild(teeSection);
        
        // Add Ebook Preorder section
        const ebookSection = document.createElement("div");
        ebookSection.style.marginTop = "20px";
        ebookSection.style.padding = "30px";
        ebookSection.style.background = "#f7fafc";
        ebookSection.style.borderRadius = "8px";
        ebookSection.style.border = "2px solid #e2e8f0";
        
        const ebookTitle = document.createElement("h2");
        ebookTitle.textContent = "Preorder the ebook";
        ebookTitle.style.fontFamily = "'Abril Fatface', serif";
        ebookTitle.style.fontSize = "28px";
        ebookTitle.style.marginBottom = "15px";
        ebookTitle.style.color = "#3d4535";
        ebookSection.appendChild(ebookTitle);
        
        const ebookDescription = document.createElement("p");
        ebookDescription.textContent = `A comprehensive guide exploring ${name} through the lens of Aboriginal culture and ecological wisdom — featuring traditional plant uses, seasonal practices, where to see this EVC in Victoria, and regeneration techniques for modern gardeners.`;
        ebookDescription.style.marginBottom = "20px";
        ebookDescription.style.color = "#3d4535";
        ebookDescription.style.fontSize = "16px";
        ebookSection.appendChild(ebookDescription);
        
        const ebookButton = document.createElement("button");
        ebookButton.textContent = "Preorder now";
        ebookButton.style.background = "#48bb78";
        ebookButton.style.color = "white";
        ebookButton.style.border = "none";
        ebookButton.style.padding = "14px 28px";
        ebookButton.style.borderRadius = "6px";
        ebookButton.style.fontSize = "16px";
        ebookButton.style.fontWeight = "600";
        ebookButton.style.cursor = "pointer";
        ebookButton.style.transition = "all 0.2s";
        ebookButton.style.width = "100%";
        
        ebookButton.addEventListener("mouseover", () => {
          ebookButton.style.background = "#38a169";
          ebookButton.style.transform = "translateY(-2px)";
        });
        
        ebookButton.addEventListener("mouseout", () => {
          ebookButton.style.background = "#48bb78";
          ebookButton.style.transform = "translateY(0)";
        });
        
        ebookButton.addEventListener("click", () => {
          // Replace with your actual preorder link
          alert("Ebook preorder coming soon! This would link to your preorder page.");
          // window.location.href = "https://your-store.com/ebook-preorder?evc=" + code;
        });
        
        ebookSection.appendChild(ebookButton);
        
        const ebookHint = document.createElement("div");
        ebookHint.textContent = "Digital delivery upon release. Reserve your copy today.";
        ebookHint.style.marginTop = "10px";
        ebookHint.style.fontSize = "14px";
        ebookHint.style.color = "#666";
        ebookHint.style.textAlign = "center";
        ebookSection.appendChild(ebookHint);
        
        plantsDiv.appendChild(ebookSection);
        
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
