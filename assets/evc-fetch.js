async function searchEVC(lat, lon, address) {
        console.log('Searching EVC for:', lat, lon, address);
        
        // Update step indicator
        document.querySelectorAll('.step').forEach((step, idx) => {
            if (idx < 2) step.classList.add('active');
        });

        // Show modal with loading
        showModal('<div class="loading-spinner"></div>');

        try {
            // Try using CQL_FILTER instead of bbox for more reliable results
            const point = `POINT(${lon} ${lat})`;
            
            const wfsUrl = `${CONFIG.VIC_WFS_URL}?` + new URLSearchParams({
                service: 'WFS',
                version: '1.1.0',  // Changed to 1.1.0
                request: 'GetFeature',
                typeName: CONFIG.EVC_LAYER,
                outputFormat: 'application/json',
                srsName: 'EPSG:4326',
                cql_filter: `INTERSECTS(geom, ${point})`
            });

            console.log('WFS URL:', wfsUrl);
            const response = await fetch(wfsUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('WFS response:', data);

            if (!data.features || data.features.length === 0) {
                // If CQL_FILTER doesn't work, try with a larger bbox
                console.log('No features with CQL_FILTER, trying bbox...');
                await searchEVCWithBbox(lat, lon, address);
                return;
            }

            // Use Turf.js to find which polygon contains the point
            const turfPoint = turf.point([lon, lat]);
            let matchedFeature = null;

            for (const feature of data.features) {
                if (turf.booleanPointInPolygon(turfPoint, feature)) {
                    matchedFeature = feature;
                    break;
                }
            }

            // If no exact match, use nearest
            if (!matchedFeature) {
                matchedFeature = data.features[0];
            }

            console.log('Matched feature:', matchedFeature);
            displayResults(matchedFeature, address);

            // Update step indicator
            document.querySelectorAll('.step').forEach(step => {
                step.classList.add('active');
            });

        } catch (error) {
            console.error('EVC fetch error:', error);
            showError('Unable to retrieve EVC data. Please try again. Error: ' + error.message);
        }
    }

    async function searchEVCWithBbox(lat, lon, address) {
        try {
            // Build bbox with larger buffer
            const buffer = 0.001; // ~111 meters
            
            // For WFS 1.1.0, bbox is typically minx,miny,maxx,maxy (lon,lat order)
            const bbox = [
                lon - buffer,
                lat - buffer,
                lon + buffer,
                lat + buffer
            ].join(',');

            const wfsUrl = `${CONFIG.VIC_WFS_URL}?` + new URLSearchParams({
                service: 'WFS',
                version: '1.1.0',
                request: 'GetFeature',
                typeName: CONFIG.EVC_LAYER,
                outputFormat: 'application/json',
                bbox: bbox,
                srsName: 'EPSG:4326'
            });

            console.log('WFS URL (bbox):', wfsUrl);
            const response = await fetch(wfsUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('WFS response (bbox):', data);

            if (!data.features || data.features.length === 0) {
                showError('No EVC data found for this location. This may be outside mapped areas or the address may not be in Victoria.');
                return;
            }

            // Use Turf.js to find which polygon contains the point
            const point = turf.point([lon, lat]);
            let matchedFeature = null;

            for (const feature of data.features) {
                if (turf.booleanPointInPolygon(point, feature)) {
                    matchedFeature = feature;
                    break;
                }
            }

            // If no exact match, use nearest
            if (!matchedFeature) {
                matchedFeature = data.features[0];
            }

            console.log('Matched feature:', matchedFeature);
            displayResults(matchedFeature, address);

            // Update step indicator
            document.querySelectorAll('.step').forEach(step => {
                step.classList.add('active');
            });

        } catch (error) {
            console.error('EVC fetch error (bbox):', error);
            showError('Unable to retrieve EVC data. Please try again. Error: ' + error.message);
        }
    }
