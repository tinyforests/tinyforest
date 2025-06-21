// Global variables
let map;
let marker;
let currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  document.getElementById("search-button").addEventListener("click", searchEVC);
});

function searchEVC(evt) {
  evt.preventDefault();
  const address = document.getElementById("address-input").value;
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
      const lat = parseFloat(results[0].lat),
            lon = parseFloat(results[0].lon);
      map.setView([lat, lon], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);
      fetchEVCData(lat, lon);
    })
    .catch(err => console.error("Error geocoding:", err));
}

function fetchEVCData(lat, lon) {
  const bboxSize = 0.02,
        bbox = [lon - bboxSize, lat - bboxSize, lon + bboxSize, lat + bboxSize].join(",");
  const wfsUrl = `https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(wfsUrl)
    .then(res => res.json())
    .then(data => {
      if (data.features && data.features.length) {
        const point = turf.point([lon, lat]);
        let best = data.features.find(f => {
          if (f.geometry.type === "Polygon") {
            return turf.booleanPointInPolygon(point, turf.polygon(f.geometry.coordinates));
          }
        }) || data.features[0];

        const p = best.properties,
              name = p.x_evcname || "Unknown",
              code = p.evc || "Unknown",
              status = p.evc_bcs_desc || "Not Specified",
              region = p.bioregion || "Not Specified";

        displayEVCInfo(name, code, status, region);
      } else {
        document.getElementById("evc-details").innerHTML = "<p>No EVC data found.</p>";
        document.querySelector(".download-button").style.display = "none";
      }
    })
    .catch(err => {
      console.error("Error fetching EVC:", err);
      document.getElementById("evc-details").innerHTML = "<p>Error retrieving EVC data.</p>";
      document.querySelector(".download-button").style.display = "none";
    });
}

function displayEVCInfo(name, code, status, region) {
  currentEvcCode = code;
  document.getElementById("modal-evc-name").textContent = name;
  document.getElementById("modal-evc-status").textContent = status;
  document.getElementById("modal-evc-region").textContent = region;
  document.getElementById("modal-evc-description").textContent = p.bcref; // or your description logic

  // show modal, wire up form hidden inputs, map, plants...
  document.getElementById("evc-modal").style.display = "flex";
  document.getElementById("gf-address").value = document.getElementById("address-input").value;
  document.getElementById("gf-evcCode").value = code;
  // …and the rest of your modal population…
}
