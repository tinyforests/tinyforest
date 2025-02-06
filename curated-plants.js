(function() {
  // Local data for curated plant recommendations based on the Miyawaki method for EVC 175.
  const recommendationData = {
    "175": {
      description: "EVC 175 is characterized by moist, temperate conditions with fertile soils. For a 10sqm area using the Miyawaki method, dense planting is required to rapidly restore biodiversity. The recommendations below are grouped into simplified forest layers to achieve a multi-layered, self-sustaining forest.",
      recommendations: [
        {
          layer: "Canopy Layer",
          plants: [
            "Eucalyptus radiata s.l. Narrow-leaf Peppermint",
            "Allocasuarina littoralis Drooping Sheoak",
            "Exocarpos cupressiformis (Cherry Ballart)"
          ]
        },
        {
          layer: "Tree Layer",
          plants: [
            "Acacia mearnsii (Black Wattle)",
            "Callistemon citrinus (Bottlebrush)"
          ]
        },
        {
          layer: "Sub Tree Layer",
          plants: [
            "Grevillea robusta (Silk Oak)",
            "Banksia integrifolia (Coast Banksia)"
          ]
        },
        {
          layer: "Shrub Layer",
          plants: [
            "Azalea",
            "Hydrangea"
          ]
        },
        {
          layer: "Ground Covers",
          plants: [
            "Creeping Thyme",
            "Sedum"
          ]
        }
      ]
    }
    // Additional EVC entries can be added here.
  };

  // Extract the EVC code from the URL query parameters (e.g., ?evcCode=175)
  const urlParams = new URLSearchParams(window.location.search);
  const evcCode = urlParams.get('evcCode');

  if (!evcCode) {
    document.getElementById('plant-list-container').innerHTML = '<p>Error: No EVC code provided in the URL.</p>';
    return;
  }
  document.getElementById('evc-code-display').textContent = evcCode;

  // Look up the recommendation data for the provided EVC code.
  const evcData = recommendationData[evcCode];
  if (!evcData) {
    document.getElementById('plant-list-container').innerHTML = '<p>No curated recommendations available for this EVC.</p>';
    return;
  }

  // Insert the EVC description into the page.
  const descriptionDiv = document.getElementById('evc-description');
  if (descriptionDiv) {
    descriptionDiv.innerHTML = `<p>${evcData.description}</p>`;
  }

  // Display the plant recommendations.
  const recommendationsDiv = document.getElementById('recommendations');
  recommendationsDiv.innerHTML = ''; // Clear any existing content.

  // Loop through each recommendation group (layer).
  evcData.recommendations.forEach(group => {
    // Create a container for this layer.
    const groupContainer = document.createElement('div');
    groupContainer.classList.add('recommendation-group');

    // Create and append a header for the layer.
    const header = document.createElement('h2');
    header.textContent = group.layer;
    groupContainer.appendChild(header);

    // Create an unordered list for the plants in this layer.
    const list = document.createElement('ul');
    group.plants.forEach(plant => {
      const listItem = document.createElement('li');
      listItem.textContent = plant;
      list.appendChild(listItem);
    });
    groupContainer.appendChild(list);

    // Append the layer container to the recommendations div.
    recommendationsDiv.appendChild(groupContainer);
  });
})();
