<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Curated Plant Recommendations</title>
  <link rel="stylesheet" href="styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Universal Menu Placeholder -->
  <div id="menu-placeholder"></div>
  
  <div id="plant-list-container">
    <h1>Curated Plant Recommendations for EVC: <span id="evc-code-display"></span></h1>
    <div id="evc-description">
      <!-- EVC description will appear here -->
    </div>
    <div id="recommendations">
      <!-- Plant recommendations will be displayed here -->
    </div>
  </div>

  <!-- Load the universal menu -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      fetch("menu.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("menu-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading menu:", error));
    });
  </script>
  
  <!-- Curated plants script -->
  <script src="curated-plants.js"></script>
</body>
</html>
