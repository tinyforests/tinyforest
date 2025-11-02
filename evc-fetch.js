// evc-fetch.js - Complete version with all 30 EVCs and smart camera icons

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

  // Close modal
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("evc-modal").style.display = "none";
  });

  // Email form - submit to Google Forms
  document.getElementById("gf-form").addEventListener("submit", e => {
    const btn = e.target.querySelector("button");
    setTimeout(() => {
      btn.textContent = "Thanks! Check your email soon.";
      btn.disabled = true;
    }, 500);
  });

  // Geolocation button
  const locationBtn = document.getElementById("location-button");
  if (locationBtn) {
    locationBtn.addEventListener("click", () => {
      // Check if geolocation is supported
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
      }

      // Check if we're on a secure context (HTTPS)
      if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        alert("Geolocation requires a secure connection (HTTPS). Please use the address search instead.");
        return;
      }

      locationBtn.textContent = "📍 Getting location...";
      locationBtn.disabled = true;

      // iOS Safari specific options
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const options = {
        enableHighAccuracy: !isIOS,
        timeout: isIOS ? 30000 : 20000,
        maximumAge: isIOS ? 60000 : 0
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          
          map.setView([lat, lon], 12);
          marker && map.removeLayer(marker);
          marker = L.marker([lat, lon]).addTo(map);
          
          fetchEVCData(lat, lon);
          
          locationBtn.textContent = "📍 Use My Location";
          locationBtn.disabled = false;
        },
        (error) => {
          console.error("Geolocation error:", error);
          let errorMsg = "Unable to get your location. ";
          
          switch(error.code) {
            case error.PERMISSION_DENIED:
              if (isIOS) {
                errorMsg += "On iPhone: Go to Settings → Safari → Location → Allow. Then refresh and try again.";
              } else {
                errorMsg += "Please allow location access in your browser settings and try again.";
              }
              break;
            case error.POSITION_UNAVAILABLE:
              if (isIOS) {
                errorMsg += "Make sure Location Services are enabled in Settings → Privacy & Security → Location Services.";
              } else {
                errorMsg += "Location information is unavailable. Please check your device's location settings.";
              }
              break;
            case error.TIMEOUT:
              errorMsg += "Location request timed out. Please try again or use the address search.";
              break;
            default:
              errorMsg += "An unknown error occurred.";
          }
          
          alert(errorMsg + " You can also enter your address instead.");
          locationBtn.textContent = "📍 Use My Location";
          locationBtn.disabled = false;
        },
        options
      );
    });
  }
});

function geocodeAddress(address) {
  // Store the searched address globally
  window.searchedAddress = address;
  
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

// Helper function to check if plant image exists
function checkPlantImage(plantName) {
  return new Promise((resolve) => {
    // Extract common name from parentheses if present
    // e.g., "Eucalyptus camaldulensis (River Red-gum)" -> "River Red-gum"
    let nameForImage = plantName;
    const commonNameMatch = plantName.match(/\(([^)]+)\)/);
    if (commonNameMatch) {
      nameForImage = commonNameMatch[1].trim();
    }
    
    // Convert to lowercase filename with hyphens
    const imageName = nameForImage.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/['']/g, '');
    
    const img = new Image();
    img.onload = () => resolve({ exists: true, url: `images/plants/${imageName}.jpg` });
    img.onerror = () => resolve({ exists: false, url: null });
    img.src = `images/plants/${imageName}.jpg`;
  });
}

// Helper function to get kit details based on EVC name
function getKitDetails(evcName) {
  const kits = {
    'Box-Ironbark Forest': {
      image: 'box-ironbark-forest.png',
      description: 'Iconic ironbark and box eucalypts with diverse understory. Thrives in low-rainfall areas with nutrient-poor soils.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Drought-tolerant and fire-adapted species',
      slug: 'box-ironbark-forest'
    },
    'Brackish Grassland': {
      image: 'brackish-grassland.png',
      description: 'Salt-tolerant grassland communities near coastal areas. Important habitat for migratory birds.',
      canopy: 1,
      shrub: 2,
      groundcover: 7,
      specialFeature: 'Salt-tolerant species mix',
      slug: 'brackish-grassland'
    },
    'Coast Banksia Woodland': {
      image: 'coast-banksia-woodland.png',
      description: 'Coastal banksia-dominated woodland with heath understory. Perfect for sandy coastal soils.',
      canopy: 2,
      shrub: 4,
      groundcover: 4,
      specialFeature: 'Wind and salt resistant',
      slug: 'coast-banksia-woodland'
    },
    'Coastal Saltmarsh': {
      image: 'coastal-saltmarsh.png',
      description: 'Intertidal vegetation adapted to regular tidal inundation. Critical ecosystem for coastal biodiversity.',
      canopy: 0,
      shrub: 2,
      groundcover: 8,
      specialFeature: 'Salt and flood-tolerant species',
      slug: 'coastal-saltmarsh'
    },
    'Creekline Grassy Woodland': {
      image: 'creekline-grassy-woodland.png',
      description: 'Riparian woodland with grassy groundlayer. Protects waterways and provides wildlife corridors.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Moisture-loving creek specialists',
      slug: 'creekline-grassy-woodland'
    },
    'Damp Sands Herb-rich Woodland': {
      image: 'damp-sands-herb-rich-woodland.png',
      description: 'Diverse woodland on seasonally damp sandy soils. Rich herbaceous groundlayer with high biodiversity.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Seasonal wetland species',
      slug: 'damp-sands-herb-rich-woodland'
    },
    'Estuarine Woodlands': {
      image: 'estuarine-woodlands.png',
      description: 'Coastal vegetation where rivers meet the sea. Adapted to brackish water and tidal influence.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Brackish water-tolerant species',
      slug: 'estuarine-woodlands'
    },
    'Floodplain Riparian Woodland': {
      image: 'floodplain-riparian-woodland.png',
      description: 'Riverine woodlands adapted to periodic flooding. Important for water quality and flood mitigation.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Flood-tolerant species',
      slug: 'floodplain-riparian-woodland'
    },
    'Grassy Dry Forest': {
      image: 'grassy-dry-forest.png',
      description: 'Open forest structure with colorful wildflowers. Thrives in well-drained soils.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Low-maintenance once established',
      slug: 'grassy-dry-forest'
    },
    'Grassy Forest': {
      image: 'grassy-forest.png',
      description: 'Tall eucalypt forest with grassy understory. Supports diverse wildlife in suburban settings.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Shade-creating canopy species',
      slug: 'grassy-forest'
    },
    'Grassy Woodland': {
      image: 'grassy-woodland.png',
      description: 'Open woodland with diverse native grasses. Perfect for larger suburban blocks.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Low-maintenance grassland mix',
      slug: 'grassy-woodland'
    },
    'Heathy Dry Forest': {
      image: 'heathy-dry-forest.png',
      description: 'Forest with dense heath understory. Thrives on nutrient-poor, well-drained soils.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Year-round flowering heaths',
      slug: 'heathy-dry-forest'
    },
    'Heathy Woodland': {
      image: 'heathy-woodland.png',
      description: 'Low open woodland with dense heath understory. Perfect for sandy soils.',
      canopy: 2,
      shrub: 4,
      groundcover: 4,
      specialFeature: 'Year-round flowering species',
      slug: 'heathy-woodland'
    },
    'Herb-rich Foothill Forest': {
      image: 'herb-rich-foothill.png',
      description: 'Diverse forest with rich herbaceous layer. Found on fertile foothill soils.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Diverse herb and wildflower mix',
      slug: 'herb-rich-foothill'
    },
    'Lowland Forest': {
      image: 'lowland-forest.png',
      description: 'Tall forest on flat to gently undulating terrain. Rich, productive ecosystems.',
      canopy: 4,
      shrub: 3,
      groundcover: 3,
      specialFeature: 'Tall canopy shade providers',
      slug: 'lowland-forest'
    },
    'Plains Grassy Woodland': {
      image: 'plains-grassy-woodland.png',
      description: 'Iconic River Red Gums with diverse grassland understory. Perfect for Melbourne\'s western suburbs.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Drought-tolerant species mix',
      slug: 'plains-grassy-woodland'
    },
    'Riparian Forest': {
      image: 'riparian-forest.png',
      description: 'Waterway vegetation with deep-rooted trees. Stabilizes banks and filters runoff.',
      canopy: 4,
      shrub: 3,
      groundcover: 3,
      specialFeature: 'Moisture-loving species',
      slug: 'riparian-forest'
    },
    'Riparian Thicket': {
      image: 'riparian-thicket.png',
      description: 'Dense shrubby vegetation along streams. Excellent for erosion control and wildlife shelter.',
      canopy: 2,
      shrub: 5,
      groundcover: 3,
      specialFeature: 'Dense bank-stabilizing shrubs',
      slug: 'riparian-thicket'
    },
    'Riparian Woodland': {
      image: 'riparian-woodland.png',
      description: 'Open woodland along permanent and ephemeral waterways. Critical wildlife habitat.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Creek and river specialists',
      slug: 'riparian-woodland'
    },
    'Riverine Escarpment Scrub': {
      image: 'riverrine-escarpment-scrub.png',
      description: 'Shrubby vegetation on steep riverine slopes. Prevents erosion and creates microclimates.',
      canopy: 2,
      shrub: 5,
      groundcover: 3,
      specialFeature: 'Slope-stabilizing species',
      slug: 'riverrine-escarpment-scrub'
    },
    'Sand Heathland': {
      image: 'sand-heathland.png',
      description: 'Low heathland on coastal and inland sand deposits. Vibrant flowering display year-round.',
      canopy: 1,
      shrub: 5,
      groundcover: 4,
      specialFeature: 'Sandy soil specialists',
      slug: 'sand-heathland'
    },
    'Shrubby Dry Forest': {
      image: 'shrubby-dry-forest.png',
      description: 'Forest with prominent shrub layer. Thrives on drier, less fertile sites.',
      canopy: 3,
      shrub: 4,
      groundcover: 3,
      specialFeature: 'Drought-adapted shrub layer',
      slug: 'shrubby-dry-forest'
    },
    'Shrubby Foothill Forest': {
      image: 'shrubby-rich-foothill.png',
      description: 'Dense shrubby forest on foothill slopes. Rich in wattles and understory species.',
      canopy: 3,
      shrub: 4,
      groundcover: 3,
      specialFeature: 'Diverse shrub and wattle mix',
      slug: 'shrubby-rich-foothill'
    },
    'Stream-bank Shrubland': {
      image: 'stream-bank-shrubland.png',
      description: 'Shrub-dominated communities along small streams. Essential for streambank stability.',
      canopy: 2,
      shrub: 5,
      groundcover: 3,
      specialFeature: 'Erosion-controlling shrubs',
      slug: 'stream-bank-shrubland'
    },
    'Swamp Scrub': {
      image: 'swamp-scrub.png',
      description: 'Dense shrubby vegetation in seasonally inundated areas. Creates important wetland habitat.',
      canopy: 1,
      shrub: 6,
      groundcover: 3,
      specialFeature: 'Wetland and swamp specialists',
      slug: 'swamp-scrub'
    },
    'Swampy Riparian Woodland': {
      image: 'swampy-riparian-woodland.png',
      description: 'Waterlogged riparian areas with specialized vegetation. Natural water filtration system.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Waterlogged soil tolerant',
      slug: 'swampy-riparian-woodland'
    },
    'Treed Sand Heathland': {
      image: 'treed-sand-heathland.png',
      description: 'Heath with scattered tree cover on sandy soils. Diverse flowering shrub layer.',
      canopy: 2,
      shrub: 4,
      groundcover: 4,
      specialFeature: 'Sandy coastal species',
      slug: 'treed-sand-heathland'
    },
    'Valley Grassy Forest': {
      image: 'valley-grassy-forest.png',
      description: 'Tall eucalypt forest with rich fern and herb layer. Ideal for shaded valley slopes.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Shade-tolerant species mix',
      slug: 'valley-grassy-forest'
    },
    'Valley Heathy Forest': {
      image: 'valley-heathy-forest.png',
      description: 'Forest with heathy understory in sheltered valleys. Rich in flowering shrubs.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Valley-adapted heath mix',
      slug: 'valley-heathy-forest'
    },
    'Wet Heathland': {
      image: 'wet-heathland.png',
      description: 'Heath communities on poorly-drained soils. Spectacular seasonal flowering display.',
      canopy: 1,
      shrub: 5,
      groundcover: 4,
      specialFeature: 'Wetland heath specialists',
      slug: 'wet-heathland'
    }
  };

  return kits[evcName] || null;
}

function displayModal(name, status, region, code, lat, lon) {
  // Store coordinates globally for pre-order form
  window.currentLat = lat;
  window.currentLon = lon;
  window.currentEvcName = name;
  
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
        descriptionEl.innerHTML = `We're still researching the best plant species for <strong>${name}</strong>. Check back soon for our curated recommendations!`;
        descriptionEl.style.fontStyle = "normal";
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
        titleEl.style.color = "inherit";
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
          heading.style.color = "inherit";
          layerDiv.appendChild(heading);
          
          const list = document.createElement("ul");
          list.style.listStyle = "none";
          list.style.padding = "0";
          list.style.margin = "0";
          
          // Process plants with image checking
          sec.plants.forEach(async (plant) => {
            const item = document.createElement("li");
            item.style.padding = "8px 12px";
            item.style.borderBottom = "1px solid #e2e8f0";
            item.style.fontSize = "14px";
            item.style.display = "flex";
            item.style.alignItems = "center";
            item.style.justifyContent = "space-between";
            item.style.gap = "10px";
            item.style.position = "relative";
            
            // Plant name
            const nameSpan = document.createElement("span");
            nameSpan.textContent = plant;
            nameSpan.style.flex = "1";
            item.appendChild(nameSpan);
            
            // Check if image exists before adding camera icon
            const imageCheck = await checkPlantImage(plant);
            
            if (imageCheck.exists) {
              // Camera icon with tooltip
              const cameraSpan = document.createElement("span");
              cameraSpan.className = "plant-camera";
              cameraSpan.textContent = "📷";
              cameraSpan.style.cursor = "pointer";
              cameraSpan.style.fontSize = "1.2rem";
              cameraSpan.style.padding = "0.3rem 0.5rem";
              cameraSpan.style.borderRadius = "6px";
              cameraSpan.style.transition = "all 0.3s";
              cameraSpan.style.userSelect = "none";
              
              // Hover effect for camera
              cameraSpan.addEventListener("mouseenter", () => {
                cameraSpan.style.backgroundColor = "#3d4535";
                cameraSpan.style.transform = "scale(1.1)";
              });
              
              cameraSpan.addEventListener("mouseleave", () => {
                cameraSpan.style.backgroundColor = "transparent";
                cameraSpan.style.transform = "scale(1)";
              });
              
              // Image tooltip
              const tooltip = document.createElement("div");
              tooltip.className = "plant-image-tooltip";
              tooltip.style.display = "none";
              tooltip.style.position = "absolute";
              tooltip.style.right = "100%";
              tooltip.style.top = "50%";
              tooltip.style.transform = "translateY(-50%)";
              tooltip.style.marginRight = "1rem";
              tooltip.style.zIndex = "1000";
              tooltip.style.background = "white";
              tooltip.style.border = "3px solid #3d4535";
              tooltip.style.borderRadius = "12px";
              tooltip.style.padding = "0.5rem";
              tooltip.style.boxShadow = "0 8px 24px rgba(61, 69, 53, 0.25)";
              tooltip.style.width = "260px";
              tooltip.style.pointerEvents = "none";
              
              const img = document.createElement("img");
              img.src = imageCheck.url;
              img.alt = plant;
              img.style.width = "250px";
              img.style.height = "250px";
              img.style.objectFit = "cover";
              img.style.borderRadius = "8px";
              img.style.display = "block";
              
              tooltip.appendChild(img);
              cameraSpan.appendChild(tooltip);
              
              // Show/hide tooltip on hover
              cameraSpan.addEventListener("mouseenter", () => {
                tooltip.style.display = "block";
                tooltip.style.animation = "fadeIn 0.2s ease-in";
              });
              
              cameraSpan.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
              });
              
              item.appendChild(cameraSpan);
            }
            
            list.appendChild(item);
          });
          
          layerDiv.appendChild(list);
          plantsDiv.appendChild(layerDiv);
        });
      } else {
        // No plant data available - description already shows message
      }

      // Always show Forest Kit, Tee, and Ebook sections regardless of plant data
      // ... (rest of your existing kit, tee, and ebook code remains unchanged)
      
      // [REST OF YOUR EXISTING displayModal CODE CONTINUES HERE...]
      // I'm keeping your existing kit section, tee section code exactly as is
      
      const kitDetails = getKitDetails(name);
      
      const kitSection = document.createElement("div");
      kitSection.style.marginTop = "40px";
      kitSection.style.padding = "30px";
      kitSection.style.background = "rgba(255, 255, 255, 0.5)";
      kitSection.style.borderRadius = "12px";
      kitSection.style.border = "1px solid #e2e8f0";
      
      const kitTitle = document.createElement("h2");
      kitTitle.textContent = "Get your tiny forest kit";
      kitTitle.style.fontFamily = "'Abril Fatface', serif";
      kitTitle.style.fontSize = "36px";
      kitTitle.style.marginBottom = "20px";
      kitTitle.style.color = "#3d4535";
      kitSection.appendChild(kitTitle);
      
      if (kitDetails) {
        // Kit image
        const kitImageContainer = document.createElement("div");
        kitImageContainer.style.marginBottom = "20px";
        kitImageContainer.style.borderRadius = "8px";
        kitImageContainer.style.overflow = "hidden";
        
        const kitImage = document.createElement("img");
        kitImage.src = `images/evcs/${kitDetails.image}`;
        kitImage.alt = `${name} Forest Kit`;
        kitImage.style.width = "100%";
        kitImage.style.height = "200px";
        kitImage.style.objectFit = "cover";
        kitImage.style.display = "block";
        
        kitImage.onerror = function() {
          this.style.display = 'none';
          console.log(`Kit image not found: images/evcs/${kitDetails.image}`);
        };
        
        kitImageContainer.appendChild(kitImage);
        kitSection.appendChild(kitImageContainer);
        
        // EVC Name title above price
        const kitEvcName = document.createElement("h3");
        kitEvcName.textContent = name;
        kitEvcName.style.fontFamily = "'Abril Fatface', serif";
        kitEvcName.style.fontSize = "1.8rem";
        kitEvcName.style.color = "#3d4535";
        kitEvcName.style.marginBottom = "10px";
        kitEvcName.style.letterSpacing = "0px";
        kitSection.appendChild(kitEvcName);
        
        // Price
        const kitPrice = document.createElement("div");
        kitPrice.style.fontFamily = "'Abril Fatface', serif";
        kitPrice.style.fontSize = "2.5rem";
        kitPrice.style.color = "#3d4535";
        kitPrice.style.marginBottom = "10px";
        kitPrice.innerHTML = '$89 <span style="font-size: 1rem; font-family: \'IBM Plex Mono\', monospace; font-weight: normal;">per m²</span>';
        kitSection.appendChild(kitPrice);
        
        // Description
        const kitDescription = document.createElement("p");
        kitDescription.textContent = kitDetails.description;
        kitDescription.style.marginBottom = "20px";
        kitDescription.style.color = "#666";
        kitDescription.style.fontSize = "16px";
        kitDescription.style.lineHeight = "1.6";
        kitSection.appendChild(kitDescription);
        
        // Features list
        const featuresList = document.createElement("ul");
        featuresList.style.listStyle = "none";
        featuresList.style.margin = "1.5rem 0";
        featuresList.style.padding = "0";
        
        const features = [
          '10 indigenous plants per m²',
          `${kitDetails.canopy} canopy, ${kitDetails.shrub} shrub, ${kitDetails.groundcover} groundcover`,
          kitDetails.specialFeature,
          'Full planting guide included'
        ];
        
        features.forEach(feature => {
          const li = document.createElement("li");
          li.textContent = feature;
          li.style.padding = "0.5rem 0";
          li.style.paddingLeft = "1.5rem";
          li.style.position = "relative";
          li.style.color = "#3d4535";
          
          // Add checkmark
          const checkmark = document.createElement("span");
          checkmark.textContent = "✓";
          checkmark.style.position = "absolute";
          checkmark.style.left = "0";
          checkmark.style.color = "#3d4535";
          checkmark.style.fontWeight = "bold";
          li.insertBefore(checkmark, li.firstChild);
          
          featuresList.appendChild(li);
        });
        
        kitSection.appendChild(featuresList);
        
        // Buy Forest Kit button
        const kitButton = document.createElement("button");
        kitButton.textContent = "Buy Forest Kit";
        kitButton.style.background = "#3d4535";
        kitButton.style.color = "#fff0dc";
        kitButton.style.border = "none";
        kitButton.style.padding = "14px 28px";
        kitButton.style.borderRadius = "50px";
        kitButton.style.fontSize = "16px";
        kitButton.style.fontWeight = "600";
        kitButton.style.cursor = "pointer";
        kitButton.style.transition = "all 0.2s";
        kitButton.style.width = "100%";
        kitButton.style.marginBottom = "10px";
        
        kitButton.addEventListener("mouseover", () => {
          kitButton.style.transform = "scale(1.02)";
        });
        
        kitButton.addEventListener("mouseout", () => {
          kitButton.style.transform = "scale(1)";
        });
        
        kitButton.addEventListener("click", () => {
          // Build Stripe URL with metadata
          const stripeUrl = new URL("https://buy.stripe.com/3cI9AT2Y94Srb7f6xN5Vu01");
          const referenceId = `EVC-${name.replace(/\s+/g, '-')}_Address-${(window.searchedAddress || '').replace(/\s+/g, '-').substring(0, 50)}`;
          stripeUrl.searchParams.append("client_reference_id", referenceId);
          
          // Open Stripe checkout
          window.open(stripeUrl.toString(), '_blank');
        });
        
        kitSection.appendChild(kitButton);
        
        // Learn more button
        const learnButton = document.createElement("button");
        learnButton.textContent = "Learn more →";
        learnButton.style.background = "transparent";
        learnButton.style.color = "#3d4535";
        learnButton.style.border = "2px solid #3d4535";
        learnButton.style.padding = "14px 28px";
        learnButton.style.borderRadius = "50px";
        learnButton.style.fontSize = "16px";
        learnButton.style.fontWeight = "600";
        learnButton.style.cursor = "pointer";
        learnButton.style.transition = "all 0.2s";
        learnButton.style.width = "100%";
        
        learnButton.addEventListener("mouseover", () => {
          learnButton.style.background = "#3d4535";
          learnButton.style.color = "#fff0dc";
          learnButton.style.transform = "scale(1.02)";
        });
        
        learnButton.addEventListener("mouseout", () => {
          learnButton.style.background = "transparent";
          learnButton.style.color = "#3d4535";
          learnButton.style.transform = "scale(1)";
        });
        
        learnButton.addEventListener("click", () => {
          window.open("https://tinyforests.github.io/tinyforest/forest-kits.html", '_blank');
        });
        
        kitSection.appendChild(learnButton);
      } else {
        // No kit data available - show coming soon with button
        const comingSoon = document.createElement("p");
        comingSoon.innerHTML = `We don't have a forest kit for <strong>${name}</strong> yet, but we're curating one! In the meantime, explore our other kits to see what's possible with native plantings.`;
        comingSoon.style.color = "#666";
        comingSoon.style.fontSize = "16px";
        comingSoon.style.lineHeight = "1.6";
        comingSoon.style.marginBottom = "20px";
        kitSection.appendChild(comingSoon);
        
        const exploreButton = document.createElement("button");
        exploreButton.textContent = "Explore forest kits →";
        exploreButton.style.background = "#3d4535";
        exploreButton.style.color = "#fff0dc";
        exploreButton.style.border = "none";
        exploreButton.style.padding = "14px 28px";
        exploreButton.style.borderRadius = "50px";
        exploreButton.style.fontSize = "16px";
        exploreButton.style.fontWeight = "600";
        exploreButton.style.cursor = "pointer";
        exploreButton.style.transition = "all 0.2s";
        exploreButton.style.width = "100%";
        
        exploreButton.addEventListener("mouseover", () => {
          exploreButton.style.transform = "scale(1.02)";
        });
        
        exploreButton.addEventListener("mouseout", () => {
          exploreButton.style.transform = "scale(1)";
        });
        
        exploreButton.addEventListener("click", () => {
          window.open("https://tinyforests.github.io/tinyforest/forest-kits.html", '_blank');
        });
        
        kitSection.appendChild(exploreButton);
      }
      
      plantsDiv.appendChild(kitSection);
      
      // Add EVC Tee section
      const teeSection = document.createElement("div");
      teeSection.style.marginTop = "20px";
      teeSection.style.padding = "30px";
      teeSection.style.background = "rgba(255, 255, 255, 0.5)";
      teeSection.style.borderRadius = "12px";
      teeSection.style.border = "1px solid #e2e8f0";
      
      const teeTitle = document.createElement("h2");
      teeTitle.textContent = "Buy your EVC tee";
      teeTitle.style.fontFamily = "'Abril Fatface', serif";
      teeTitle.style.fontSize = "36px";
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
      
      let teeAvailable = true;
      
      teeImage.onerror = function() {
        teeAvailable = false;
        this.style.display = 'none';
        console.log(`Tee image not found: images/tees/${imageFilename}`);
        
        // Show coming soon message
        const comingSoon = document.createElement("div");
        comingSoon.style.padding = "30px 20px";
        comingSoon.style.textAlign = "center";
        comingSoon.style.background = "rgba(255, 240, 220, 0.3)";
        comingSoon.style.borderRadius = "8px";
        
        const icon = document.createElement("div");
        icon.textContent = "👕";
        icon.style.fontSize = "48px";
        icon.style.marginBottom = "15px";
        comingSoon.appendChild(icon);
        
        const message = document.createElement("p");
        message.innerHTML = `We're creating a unique design for <strong>${name}</strong>. Check out our other ecological tees while you wait!`;
        message.style.color = "#666";
        message.style.fontSize = "16px";
        message.style.lineHeight = "1.6";
        message.style.margin = "0";
        comingSoon.appendChild(message);
        
        teeSection.appendChild(comingSoon);
      };
      
      imageContainer.appendChild(teeImage);
      teeSection.appendChild(imageContainer);
      
      // Only show purchase UI if tee is available
      teeImage.onload = function() {
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
        sizeSelect.style.border = "2px solid #3d4535";
        sizeSelect.style.borderRadius = "50px";
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
        teeButton.style.background = "#3d4535";
        teeButton.style.color = "#fff0dc";
        teeButton.style.border = "none";
        teeButton.style.padding = "12px 24px";
        teeButton.style.borderRadius = "50px";
        teeButton.style.fontSize = "16px";
        teeButton.style.fontWeight = "600";
        teeButton.style.cursor = "pointer";
        teeButton.style.transition = "all 0.2s";
        teeButton.style.whiteSpace = "nowrap";
        
        teeButton.addEventListener("mouseover", () => {
          teeButton.style.transform = "scale(1.02)";
        });
        
        teeButton.addEventListener("mouseout", () => {
          teeButton.style.transform = "scale(1)";
        });
        
        teeButton.addEventListener("click", async () => {
          const size = sizeSelect.value;
          if (!size) {
            alert("Please choose a size first.");
            return;
          }
          
          // Build Stripe URL with client reference ID containing size and EVC
          const stripeUrl = new URL("https://buy.stripe.com/9B6aEXfKV0Cbcbjg8n5Vu00");
          // Create a reference ID that includes size and EVC (visible in Stripe dashboard)
          const referenceId = `Size-${size}_EVC-${name.replace(/\s+/g, '-')}`;
          stripeUrl.searchParams.append("client_reference_id", referenceId);
          
          // Open Stripe checkout in new tab
          window.open(stripeUrl.toString(), '_blank');
        });
        
        teeControls.appendChild(teeButton);
        teeSection.appendChild(teeControls);
        
        const teeHint = document.createElement("div");
        teeHint.textContent = "Your size and EVC design are automatically included in your order.";
        teeHint.style.marginTop = "10px";
        teeHint.style.fontSize = "14px";
        teeHint.style.color = "#666";
        teeSection.appendChild(teeHint);
      };
      
      plantsDiv.appendChild(teeSection);
      
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

  // Populate hidden form fields
  document.getElementById("gf-evcCode").value = `EVC ${code}`;
  
  // Get address from reverse geocoding
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    .then(r => r.json())
    .then(data => {
      const address = data.display_name || `${lat}, ${lon}`;
      document.getElementById("gf-address").value = address;
    })
    .catch(() => {
      document.getElementById("gf-address").value = `${lat}, ${lon}`;
    });

  // Show modal
  const modal = document.getElementById("evc-modal");
  modal.style.display = "flex";
  setTimeout(() => modalMap.invalidateSize(), 0);
}

// Pre-order modal functions
function openPreorderModal(evcName) {
  const modal = document.getElementById("preorder-modal");
  const evcField = document.getElementById("preorder-evc");
  const addressField = document.getElementById("preorder-address");
  
  // Pre-fill the EVC field
  evcField.value = window.currentEvcName || evcName;
  
  // Pre-fill address - use stored searched address if available
  if (window.searchedAddress) {
    // Use the address they originally searched for
    addressField.value = window.searchedAddress;
  } else if (window.currentLat && window.currentLon) {
    // Fall back to reverse geocoding (for geolocation users)
    addressField.value = "Loading address...";
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${window.currentLat}&lon=${window.currentLon}`)
      .then(r => r.json())
      .then(data => {
        const address = data.display_name || `${window.currentLat}, ${window.currentLon}`;
        addressField.value = address;
      })
      .catch(() => {
        addressField.value = `${window.currentLat}, ${window.currentLon}`;
      });
  }
  
  // Show modal
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closePreorderModal() {
  const modal = document.getElementById("preorder-modal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  
  // Reset form
  document.getElementById("preorder-form").reset();
}

// Setup preorder modal close button
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("preorder-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closePreorderModal);
  }
  
  // Close modal when clicking outside
  const modal = document.getElementById("preorder-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closePreorderModal();
      }
    });
  }
  
  // Handle form submission
  const form = document.getElementById("preorder-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      setTimeout(() => {
        closePreorderModal();
        alert("Thank you for your pre-order! We'll be in touch soon to confirm details and arrange delivery.");
      }, 500);
    });
  }
});
