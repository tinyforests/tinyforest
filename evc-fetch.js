let map, marker, currentEvcCode;

document.addEventListener("DOMContentLoaded", () => {
  // 1) Initialize map
  map = L.map("map").setView([-37.8136, 144.9631], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  // 2) Wire up search button
  document.getElementById("search-button")
    .addEventListener("click", searchEVC);
});

/**
 * Geocode the address and then fetch EVC data
 */
function searchEVC() {
  const address = document.getElementById("address-input").value.trim();
  if (!address) {
    alert("Please enter an address.");
    return;
  }

  // Geocode via Nominatim
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(res => {
      if (!res.ok) throw new Error(`Geocode error: ${res.status}`);
      return res.json();
    })
    .then(results => {
      if (!results.length) {
        throw new Error("Geocode returned no results");
      }
      const lat = parseFloat(results[0].lat),
            lon = parseFloat(results[0].lon);

      // Update the map
      map.setView([lat, lon], 12);
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map);

      // Fetch EVC
      fetchEVCData(lat, lon);
    })
    .catch(err => {
      console.error("Error during geocoding:", err);
      document.getElementById("evc-details").innerHTML =
        `<p style="color:red;">Error finding that address:<br>${err.message}</p>`;
      document.getElementById("download-button").style.display = "none";
    });
}

/**
 * Fetch EVC data from VicGov WFS and display
 */
function fetchEVCData(lat, lon) {
  const d = 0.02;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(",");
  const wfsUrl = [
    "https://opendata.maps.vic.gov.au/geoserver/wfs",
    "?service=WFS",
    "&version=1.0.0",
    "&request=GetFeature",
    "&typeName=open-data-platform:nv2005_evcbcs",
    `&bbox=${bbox},EPSG:4326`,
    "&outputFormat=application/json"
  ].join("");

  console.log("Fetching EVC data from:", wfsUrl);

  fetch(wfsUrl)
    .then(res => {
      if (!res.ok) throw new Error(`WFS status ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log("EVC raw data:", data);
      if (!data.features || !data.features.length) {
        throw new Error("No EVC features returned");
      }

      // Find the polygon containing our point
      const pt = turf.point([lon, lat]);
      let feat = data.features.find(f =>
        f.geometry &&
        f.geometry.type === "Polygon" &&
        turf.booleanPointInPolygon(pt, turf.polygon(f.geometry.coordinates))
      ) || data.features[0];

      const p = feat.properties;
      displayEVCInfo(
        p.x_evcname || "Unknown",
        p.evc || "Unknown",
        p.evc_bcs_desc || "Not Specified",
        p.bioregion || "Not Specified"
      );
    })
    .catch(err => {
      console.error("Error retrieving EVC data:", err);
      document.getElementById("evc-details").innerHTML =
        `<p style="color:red;">Error retrieving EVC data:<br>${err.message}</p>`;
      document.getElementById("download-button").style.display = "none";
    });
}

/**
 * Populate the EVC details panel and show the purchase button
 */
function displayEVCInfo(evcName, evcCode, conservationStatus, bioregion) {
  const details = document.getElementById("evc-details");
  details.innerHTML = `
    <p><b>Your EVC:</b> ${evcName}</p>
    <p><b>EVC Code:</b> ${evcCode}</p>
    <p><b>Conservation Status:</b> ${conservationStatus}</p>
    <p><b>Bioregion:</b> ${bioregion}</p>
  `;

  const btn = document.getElementById("download-button");
  btn.style.display = "block";
  btn.onclick = () => {
    window.location.href = `curated-plants.html?evcCode=${encodeURIComponent(evcCode)}`;
  };
}
