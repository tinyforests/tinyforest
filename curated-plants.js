(function() {
  // Local data for curated plant recommendations.
  // This example contains data for EVC 175 only.
  // You can add more EVC codes and data as needed.
  const recommendationData = {
    "175": {
      description: "EVC 175 is characterized by a moist, temperate climate with fertile soils. For a 10sqm area using the Miyawaki method, dense planting is recommended to rapidly restore biodiversity. This curated plant list is designed to form multiple layers, encouraging vertical complexity and rich species diversity.",
      recommendations: [
        { 
          layer: "Canopy layer", 
          plants: ["Oak", "Eucalyptus"] 
        },
        { 
          layer: "Tree layer", 
          plants: ["Maple", "Birch"] 
        },
        { 
          layer: "Sub Tree layer", 
          plants: ["Cherry", "Apple"] 
        },
        { 
          layer: "Shrub layer", 
          plants: ["Azalea", "Hydrangea"] 
        },
        { 
          layer: "Ground covers", 
          plants: ["Creeping Thyme", "Sedum"] 
        }
      ]
    }
    // Add additional EVC entries here as needed.
  };

  // Extract the EVC code from the URL query parameters (e.g., ?evcCode=175)
  const urlParams = new URLSearchParams(window.location.search);
  const evcCode = urlParams.get('evcCode');

  if (!evcCode) {
    document.getElementById('plant-list-container').innerHTML = '<p>Error: No EVC code provided in the URL.</p>';
    return;
  }
  document.getElementById('evc-code-display').textContent = evcCode;

  // Look up recommendation data for the provided EVC code.
  const evcData = recommendationData[evcCode];
  if (!evcData) {
    document.getElementById('plant-list-container').innerHTML = '<p>No curated recommendations available for this EVC.</p>';
    return;
  }

  // Insert the EVC description into the page.
  const descriptionDiv = document.getElementById('evc-description');
  descriptionDiv.innerHTML = `<p>${evcData.description}</p>`;

  // Display the plant recommendations.
  const recommendationsDiv = document.getElementById('recommendations');
  recommendationsDiv.innerHTML = ''; // Clear any existing content.

  // Loop through each recommendation group.
  evcData.recommendations.forEach(group => {
    // Create a container for each layer.
    const groupContainer = document.createElement('div');
    groupContainer.classList.add('recommendation-group');

    // Create a header for the layer.
    const header = document.createElement('h2');
    header.textContent = group.layer;
    groupContainer.appendChild(header);

    // Create a list for the plants in this layer.
    const list = document.createElement('ul');
    group.plants.forEach(plant => {
      const listItem = document.createElement('li');
      listItem.textContent = plant;
      list.appendChild(listItem);
    });
    groupContainer.appendChild(list);

    // Append this group's container to the recommendations div.
    recommendationsDiv.appendChild(groupContainer);
  });
})();
