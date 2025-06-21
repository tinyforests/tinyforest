let map, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // 1) init map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) button
  document.getElementById("search-button")
    .addEventListener("click", searchEVC);
});

function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  if (!address) {
    alert("Please enter an address.");
    return;
  }

  // geocode
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => res.json())
    .then(results => {
      if (!results.length) {
        alert("Address not found.");
        return;
      }
      const lat = parseFloat(results[0].lat),
            lon = parseFloat(results[0].lon);

      // update map
      map.setView([lat, lon], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);

      // fetch EVC
      fetchEVCData(lat, lon);
    })
    .catch(err => {
      console.error(err);
      alert("Error looking up that address.");
    });
}

function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const url =
    "https://opendata.maps.vic.gov.au/geoserver/wfs?service=WFS&version=1.0.0" +
    "&request=GetFeature&typeName=open-data-platform:nv2005_evcbcs" +
    `&bbox=${bbox},EPSG:4326&outputFormat=application/json`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features || !data.features.length) {
        alert("No EVC data found.");
        return;
      }

      // pick the polygon containing the point
      const pt = turf.point([lon, lat]);
      let feat = data.features.find(f => {
        return f.geometry.type === "Polygon" &&
               turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates));
      }) || data.features[0];

      const p = feat.properties;
      document.getElementById("evc-details").innerHTML = `
        <p><b>Your EVC:</b> ${p.x_evcname || "Unknown"}</p>
        <p><b>EVC Code:</b> ${p.evc || "Unknown"}</p>
        <p><b>Conservation Status:</b> ${p.evc_bcs_desc || "Not Specified"}</p>
        <p><b>Bioregion:</b> ${p.bioregion || "Not Specified"}</p>
      `;

      // enable purchase button
      const btn = document.getElementById("download-button");
      btn.style.display = "block";
      btn.onclick = () => {
        window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(p.evc)}`;
      };
    })
    .catch(err => {
      console.error(err);
      alert("Error retrieving EVC data.");
    });
}
