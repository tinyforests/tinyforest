// curated-plants.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Extract EVC code from URL
  const urlParams = new URLSearchParams(window.location.search);
  const evcCode = urlParams.get("evcCode");
  if (!evcCode) {
    document.getElementById("plant-list-container").innerHTML =
      "<p>Error: No EVC code provided in the URL.</p>";
    return;
  }
  document.getElementById("evc-code-display").textContent = evcCode;

  // 2. Fetch the JSON data
  fetch("curated-plants.json")
    .then((res) => res.json())
    .then((data) => {
      const evcData = data[evcCode];
      if (!evcData) {
        document.getElementById("plant-list-container").innerHTML =
          "<p>No curated recommendations available for this EVC.</p>";
        return;
      }

      // 3. Render description
      const descriptionDiv = document.getElementById("evc-description");
      descriptionDiv.innerHTML = `<p>${evcData.description}</p>`;

      // 4. Render each recommendation group
      const recommendationsDiv = document.getElementById("recommendations");
      recommendationsDiv.innerHTML = "";
      evcData.recommendations.forEach((group) => {
        const groupContainer = document.createElement("div");
        groupContainer.classList.add("recommendation-group");

        const header = document.createElement("h2");
        header.textContent = group.layer;
        groupContainer.appendChild(header);

        const list = document.createElement("ul");
        group.plants.forEach((plant) => {
          const listItem = document.createElement("li");
          listItem.textContent = plant;
          list.appendChild(listItem);
        });
        groupContainer.appendChild(list);

        recommendationsDiv.appendChild(groupContainer);
      });
    })
    .catch((err) => {
      console.error("Error loading curated-plants.json:", err);
      document.getElementById("plant-list-container").innerHTML =
        "<p>Error loading recommendations.</p>";
    });
});
