# Find My EVC

Static site for finding Ecological Vegetation Classes in Victoria, Australia.

## Overview

Find My EVC is an educational resource that helps Victorians discover their local Ecological Vegetation Class (EVC) and learn about appropriate indigenous plants for their property.

## Features

- Address-based EVC lookup using Victorian Government data
- Victoria-only address validation with autocomplete
- Responsive design with mobile support
- PWA capabilities for offline core functionality
- SEO-optimized EVC detail pages
- Clean, accessible UI

## Technology

- Static HTML/CSS/JavaScript (no build step required)
- Nominatim geocoding API
- Victorian Government WFS API for EVC data
- Turf.js for geospatial operations
- Progressive Web App with service worker

## Data Sources

- EVC mapping: Victorian Government Open Data Platform
- Geocoding: OpenStreetMap Nominatim

## Local Development

1. Clone repository
2. Serve with any static server (e.g., `python -m http.server`)
3. Open in browser

## Deployment

Deploy to GitHub Pages:

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set custom domain to `findmyevc.com`
4. Configure DNS for custom domain

## Project Structure
```
/
├── index.html              # Home page with EVC lookup
├── about.html              # About EVCs
├── contact.html            # Contact information
├── evc.html                # EVC detail page template
├── 404.html                # 404 error page
├── assets/
│   ├── styles.css          # All styles
│   ├── app.js              # Navigation and UI logic
│   ├── evc-fetch.js        # EVC lookup logic
│   └── config.js           # API endpoints
├── data/
│   ├── evc_index.json      # EVC listing for sitemap
│   └── evc_pages.json      # EVC detail content
├── manifest.json           # PWA manifest
├── service-worker.js       # Service worker for PWA
├── robots.txt              # SEO crawling rules
└── sitemap.xml             # Sitemap for search engines
```

## License

Educational resource by Gardener & Son.
