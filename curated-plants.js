(function() {
  // Local data for curated plant recommendations based on Miyawaki forest layers.
  // This example is for EVC 175.
  const recommendationData = {
    "175": {
      description: "EVC 175 experiences moist, temperate conditions with fertile soils. For a 10sqm site using the Miyawaki method, dense, multi-layered planting is essential to rapidly restore biodiversity. The recommended species have been grouped into five simplified layers:",
      recommendations: [
        {
          layer: "Canopy Layer",
          plants: [
            "Acacia mearnsii (Black Wattle)",
            "Allocasuarina littoralis (Black Sheoak)",
            "Exocarpos cupressiformis (Cherry Ballart)"
          ]
        },
        {
          layer: "Shrub/Tree Layer",
          plants: [
            "Leptospermum continentale (Prickly Tea-tree)",
            "Epacris impressa (Common Heath)",
            "Cassinia aculeata (Common Cassinia)",
            "Acacia paradoxa (Hedge Wattle)",
            "Pimelea humilis (Common Rice-flower)",
            "Hibbertia riparia (Erect Guinea-flower)",
            "Bossiaea prostrata (Creeping Bossiaea)",
            "Astroloma humifusum (Cranberry Heath)",
            "Acrotriche serrulata (Honey-pots)"
          ]
        },
        {
          layer: "Herb Layer",
          plants: [
            "Pterostylis longifolia s.l. (Tall Greenhood)",
            "Gonocarpus tetragynus (Common Raspwort)",
            "Drosera peltata ssp. auriculata (Tall Sundew)",
            "Dichondra repens (Kidney-weed)",
            "Opercularia varia (Variable Stinkweed)",
            "Drosera whittakeri ssp. aberrans (Scented Sundew)"
          ]
        },
        {
          layer: "Graminoid Layer",
          plants: [
            "Deyeuxia quadriseta (Reed Bent-grass)",
            "Xanthorrhoea minor ssp. lutea (Small Grass-tree)",
            "Lomandra longifolia (Spiny-headed Mat-rush)",
            "Gahnia radula (Thatch Saw-sedge)",
            "Lomandra filiformis (Wattle Mat-rush)",
            "Themeda triandra (Kangaroo Grass)",
            "Poa sieberiana (Grey Tussock-grass)",
            "Lepidosperma laterale (Variable Sword-sedge)",
            "Microlaena stipoides var. stipoides (Weeping Grass)"
          ]
        },
        {
          layer: "Fern/Climber Layer",
          plants: [
            "Pteridium esculentum (Austral Bracken)",
            "Comesperma volubile (Love Creeper)",
            "Billardiera scandens (Common Apple-berry)"
          ]
        }
      ]
    }
    // Add more EVC entries here if needed.
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
