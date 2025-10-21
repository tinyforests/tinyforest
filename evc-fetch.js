// evc-fetch.js - Updated with full kit details in modal

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

  // Email form - just for lead capture now, plants show immediately
  document.getElementById("gf-form").addEventListener("submit", e => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    btn.textContent = "Thanks! Check your email soon.";
    btn.disabled = true;
  });

  // Geolocation button
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

// Helper function to get kit details based on EVC name
function getKitDetails(evcName) {
  const kits = {
    'Plains Grassy Woodland': {
      image: 'plains-grassy-woodland.png',
      description: 'Iconic River Red Gums with a diverse grassland understory. Perfect for Melbourne\'s western suburbs.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Drought-tolerant species mix',
      slug: 'plains-grassy-woodland'
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
    'Grassy Dry Forest': {
      image: 'grassy-dry-forest.png',
      description: 'Open forest structure with colorful wildflowers. Thrives in well-drained soils.',
      canopy: 3,
      shrub: 3,
      groundcover: 4,
      specialFeature: 'Low-maintenance once established',
      slug: 'grassy-dry-forest'
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
    'Heathy Woodland': {
      image: 'heathy-woodland.png',
      description: 'Low open woodland with dense heath understory. Perfect for sandy soils.',
      canopy: 2,
      shrub: 4,
      groundcover: 4,
      specialFeature: 'Year-round flowering species',
      slug: 'heathy-woodland'
    },
    'Coastal Scrub': {
      image: 'coastal-scrub.png',
      description: 'Salt-tolerant coastal vegetation. Thrives in windy, exposed positions.',
      canopy: 2,
      shrub: 5,
      groundcover: 3,
