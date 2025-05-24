/**
 * Fetch curated plant list for this EVC and render it
 */
function fetchCuratedPlants(evcCode) {
  const url = `api/curated-plants?evcCode=${encodeURIComponent(evcCode)}`;
  console.log("🔍 Fetching curated plants from:", url);

  fetch(url)
    .then(res => {
      if (!res.ok) {
        console.error("🚨 Server returned:", res.status, res.statusText);
        throw new Error(`Server responded ${res.status}`);
      }
      return res.json();
    })
    .then(plants => {
      console.log("✅ Received plants:", plants);
      renderPlantList(plants);
    })
    .catch(err => {
      console.error("❌ Error fetching curated plants:", err);
      const list = document.getElementById("curated-list");
      list.innerHTML = `<li>Could not load plant list (${err.message}).</li>`;
      list.style.display = "block";
    });
}
