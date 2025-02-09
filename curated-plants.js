(function() {
  // Local data for curated plant recommendations based on the Miyawaki method.
  // This object contains sample data for three EVC codes: 175, 180, and 200.
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
    },
    "180": {
      description: "EVC 180 typically occurs in drier, sclerophyll conditions on well‐drained soils. For dense, rapid establishment using the Miyawaki method, drought-tolerant species are essential. The following recommendations represent a balanced, multi-layered approach for EVC 180.",
      recommendations: [
        {
          layer: "Canopy Layer",
          plants: [
            "Eucalyptus camaldulensis (River Red Gum)",
            "Eucalyptus microtheca (Coolibah)"
          ]
        },
        {
          layer: "Tree Layer",
          plants: [
            "Acacia aneura (Mulga)",
            "Acacia pycnantha (Golden Wattle)"
          ]
        },
        {
          layer: "Sub Tree Layer",
          plants: [
            "Callistemon sieberi (River Bottlebrush)",
            "Banksia menziesii (Menzies' Banksia)"
          ]
        },
        {
          layer: "Shrub Layer",
          plants: [
            "Hakea salicifolia (Willow-leaved Hakea)",
            "Leptospermum scoparium (Manuka)"
          ]
        },
        {
          layer: "Ground Covers",
          plants: [
            "Dichondra repens (Kidney Weed)",
            "Myoporum parvifolium (Creeping Boobialla)"
          ]
        }
      ]
    },
    "200": {
      description: "EVC 200 represents a mosaic of woodland and open forest with mixed sclerophyll and grassy understory. For a dense Miyawaki forest in a 10sqm area, a diverse selection of species is required to quickly form a closed canopy and rich understorey.",
      recommendations: [
        {
          layer: "Canopy Layer",
          plants: [
            "Eucalyptus obliqua (Messmate)",
            "Eucalyptus viminalis (Manna Gum)"
          ]
        },
        {
          layer: "Tree Layer",
          plants: [
            "Acacia dealbata (Silver Wattle)",
            "Allocasuarina verticillata (Drooping Sheoak)"
          ]
        },
        {
          layer: "Sub Tree Layer",
          plants: [
            "Grevillea juniperina (Juniper Grevillea)",
            "Callistemon viminalis (Weeping Bottlebrush)"
          ]
        },
        {
          layer: "Shrub Layer",
          plants: [
            "Prostanthera incisa (Cut-leaf Mint Bush)",
            "Melaleuca linariifolia (Snow-in-summer)"
          ]
        },
        {
          layer: "Ground Covers",
          plants: [
            "Wahlenbergia spp. (Bluebell)",
            "Scaevola aemula (Fan Flower)"
          ]
        }
      ]
    }
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
