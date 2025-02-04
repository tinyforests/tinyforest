(function() {
  // Local plant data mapping EVC codes to an array of plant entries.
  // Each entry includes a 'category' and a 'name'.
  const plantData = {
    "175": [
      { category: "Canopy layer", name: "Oak" },
      { category: "Tree layer", name: "Pine" },
      { category: "Sub tree layer", name: "Maple" },
      { category: "Shrub layer", name: "Azalea" },
      { category: "Ground covers", name: "Creeping Thyme" }
    ],
    "180": [
      { category: "Canopy layer", name: "Eucalyptus" },
      { category: "Tree layer", name: "Acacia" },
      { category: "Sub tree layer", name: "Bottlebrush" },
      { category: "Shrub layer", name: "Grevillea" },
      { category: "Ground covers", name: "Myoporum" }
    ]
    // Add more EVC codes and their plant lists as needed
  };

  // Extract the EVC code from the URL query parameters (e.g., ?evcCode=175)
  const urlParams = new URLSearchParams(window.location.search);
  const evcCode = urlParams.get('evcCode');

  if (!evcCode) {
    document.getElementById('plant-list').innerHTML = '<p>Error: No EVC code provided in the URL.</p>';
    return;
  }
  // Display the EVC code in the heading
  document.getElementById('evc-code-display').textContent = evcCode;

  // Look up the plant list for the given EVC code
  const plants = plantData[evcCode];

  const plantListDiv = document.getElementById('plant-list');
  // Clear the loading text
  plantListDiv.innerHTML = '';

  if (!plants || plants.length === 0) {
    plantListDiv.innerHTML = '<p>No curated plant list available for this EVC.</p>';
    return;
  }

  // Create and append elements for each plant.
  // Here, we group by category by simply displaying each plant entry.
  plants.forEach(plant => {
    const plantItemDiv = document.createElement('div');
    plantItemDiv.classList.add('plant-item');
    plantItemDiv.innerHTML = `<strong>${plant.category}:</strong> ${plant.name}`;
    plantListDiv.appendChild(plantItemDiv);
  });
})();
