// EVC Lookup functionality with debug logging
document.addEventListener('DOMContentLoaded', () => {
    console.log('EVC Fetch script loaded');
    
    const addressInput = document.getElementById('address');
    const searchBtn = document.getElementById('searchBtn');
    const locationBtn = document.getElementById('locationBtn');
    const autocompleteResults = document.getElementById('autocompleteResults');
    const resultsModal = document.getElementById('resultsModal');
    const modalClose = document.getElementById('modalClose');

    let selectedLocation = null;
    let autocompleteTimeout = null;

    console.log('Elements found:', {
        addressInput: !!addressInput,
        searchBtn: !!searchBtn,
        locationBtn: !!locationBtn,
        autocompleteResults: !!autocompleteResults,
        resultsModal: !!resultsModal
    });

    // Autocomplete
    if (addressInput) {
        addressInput.addEventListener('input', (e) => {
            clearTimeout(autocompleteTimeout);
            const query = e.target.value.trim();

            if (query.length < 3) {
                autocompleteResults.classList.remove('active');
                autocompleteResults.innerHTML = '';
                return;
            }

            autocompleteTimeout = setTimeout(() => {
                fetchAutocomplete(query);
            }, 300);
        });
    }

    async function fetchAutocomplete(query) {
        console.log('Fetching autocomplete for:', query);
        try {
            const url = `${CONFIG.NOMINATIM_URL}/search?` + new URLSearchParams({
                q: query + ', Victoria, Australia',
                format: 'json',
                addressdetails: 1,
                limit: 8,
                countrycodes: 'au'
            });

            console.log('Autocomplete URL:', url);
            const response = await fetch(url);
            const data = await response.json();
            console.log('Autocomplete response:', data);

            // Filter for residential addresses in Victoria
            const filtered = data.filter(item => {
                const addr = item.address || {};
                return (
                    addr.state === 'Victoria' &&
                    addr.house_number &&
                    !item.type?.match(/amenity|shop|office|tourism/)
                );
            });

            console.log('Filtered results:', filtered.length);
            displayAutocomplete(filtered);
        } catch (error) {
            console.error('Autocomplete error:', error);
        }
    }

    function displayAutocomplete(results) {
        if (results.length === 0) {
            autocompleteResults.classList.remove('active');
            autocompleteResults.innerHTML = '';
            return;
        }

        autocompleteResults.innerHTML = results.map(item => {
            const addr = item.address;
            const display = [
                addr.house_number,
                addr.road,
                addr.suburb || addr.city || addr.town,
                'VIC'
            ].filter(Boolean).join(', ');

            return `<div class="autocomplete-item" data-lat="${item.lat}" data-lon="${item.lon}" data-display="${display}">${display}</div>`;
        }).join('');

        autocompleteResults.classList.add('active');

        // Add click handlers
        autocompleteResults.querySelectorAll('.autocomplete-item').forEach(item => {
            item.addEventListener('click', () => {
                selectedLocation = {
                    lat: parseFloat(item.dataset.lat),
                    lon: parseFloat(item.dataset.lon),
                    display: item.dataset.display
                };
                console.log('Selected location:', selectedLocation);
                addressInput.value = item.dataset.display;
                autocompleteResults.classList.remove('active');
                autocompleteResults.innerHTML = '';
            });
        });
    }

    // Close autocomplete on outside click
    document.addEventListener('click', (e) => {
        if (!addressInput?.contains(e.target) && !autocompleteResults?.contains(e.target)) {
            autocompleteResults?.classList.remove('active');
        }
    });

    // Search button
    if (searchBtn) {
        searchBtn.addEventListener('click', async () => {
            console.log('Search button clicked');
            console.log('Selected location:', selectedLocation);
            
            if (!selectedLocation) {
                // Try to geocode the address
                const query = addressInput.value.trim();
                if (!query) {
                    showError('Please enter an address');
                    return;
                }
                await geocodeAndSearch(query);
            } else {
                await searchEVC(selectedLocation.lat, selectedLocation.lon, selectedLocation.display);
            }
        });
    }

    // Location button
    if (locationBtn) {
        locationBtn.addEventListener('click', () => {
            console.log('Location button clicked');
            if ('geolocation' in navigator) {
                locationBtn.textContent = 'Getting location...';
                locationBtn.disabled = true;

                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        console.log('Got coordinates:', lat, lon);

                        // Reverse geocode to check if in Victoria
                        try {
                            const url = `${CONFIG.NOMINATIM_URL}/reverse?` + new URLSearchParams({
                                lat: lat,
                                lon: lon,
                                format: 'json',
                                addressdetails: 1
                            });

                            console.log('Reverse geocode URL:', url);
                            const response = await fetch(url);
                            const data = await response.json();
                            console.log('Reverse geocode response:', data);

                            if (data.address?.state !== 'Victoria') {
                                showError('This tool only works for addresses in Victoria, Australia');
                                locationBtn.textContent = '📍 Use my location';
                                locationBtn.disabled = false;
                                return;
                            }

                            const display = [
                                data.address.house_number,
                                data.address.road,
                                data.address.suburb || data.address.city,
                                'VIC'
                            ].filter(Boolean).join(', ') || 'Current Location';

                            await searchEVC(lat, lon, display);
                        } catch (error) {
                            console.error('Reverse geocoding error:', error);
                            showError('Unable to determine location address');
                        }

                        locationBtn.textContent = '📍 Use my location';
                        locationBtn.disabled = false;
                    },
                    (error) => {
                        console.error('Geolocation error:', error);
                        showError('Unable to access your location. Please enter an address instead.');
                        locationBtn.textContent = '📍 Use my location';
                        locationBtn.disabled = false;
                    }
                );
            } else {
                showError('Geolocation is not supported by your browser');
            }
        });
    }

    async function geocodeAndSearch(query) {
        console.log('Geocoding:', query);
        try {
            const url = `${CONFIG.NOMINATIM_URL}/search?` + new URLSearchParams({
                q: query + ', Victoria, Australia',
                format: 'json',
                addressdetails: 1,
                limit: 1
            });

            console.log('Geocode URL:', url);
            const response = await fetch(url);
            const data = await response.json();
            console.log('Geocode response:', data);

            if (data.length === 0) {
                showError('Address not found. Please try a different address.');
                return;
            }

            const result = data[0];
            if (result.address?.state !== 'Victoria') {
                showError('This tool only works for addresses in Victoria, Australia');
                return;
            }

            await searchEVC(parseFloat(result.lat), parseFloat(result.lon), query);
        } catch (error) {
            console.error('Geocoding error:', error);
            showError('Unable to find address. Please try again.');
        }
    }

    async function searchEVC(lat, lon, address) {
        console.log('Searching EVC for:', lat, lon, address);
        
        // Update step indicator
        document.querySelectorAll('.step').forEach((step, idx) => {
            if (idx < 2) step.classList.add('active');
        });

        // Show modal with loading
        showModal('<div class="loading-spinner"></div>');

        try {
            // Build bbox around the point
            const buffer = 0.0001; // ~11 meters
            const bbox = [
                lon - buffer,
                lat - buffer,
                lon + buffer,
                lat + buffer
            ].join(',');

            const wfsUrl = `${CONFIG.VIC_WFS_URL}?` + new URLSearchParams({
                service: 'WFS',
                version: '2.0.0',
                request: 'GetFeature',
                typeName: CONFIG.EVC_LAYER,
                outputFormat: 'application/json',
                bbox: bbox,
                srsName: 'EPSG:4326'
            });

            console.log('WFS URL:', wfsUrl);
            const response = await fetch(wfsUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('WFS response:', data);

            if (!data.features || data.features.length === 0) {
                showError('No EVC data found for this location. This may be outside mapped areas.');
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
            console.error('EVC fetch error:', error);
            showError('Unable to retrieve EVC data. Please try again. Error: ' + error.message);
        }
    }

    function displayResults(feature, address) {
        console.log('Displaying results for feature:', feature);
        
        const props = feature.properties;
        const evcName = props.x_evcname || props.evc_name || 'Unknown';
        const evcCode = props.evc || props.evc_no || '';
        const bioregion = props.bioregion || props.bioregion_name || 'Not specified';
        const status = props.evc_bcs_desc || props.bcs_description || 'Status not available';

        const html = `
            <div class="result-header">
                <h2>EVC ${evcCode} — ${evcName}</h2>
                <div class="result-address">${address}</div>
            </div>

            <div class="result-details">
                <div class="result-item">
                    <div class="result-item-label">Bioregion</div>
                    <div class="result-item-value">${bioregion}</div>
                </div>

                <div class="result-item">
                    <div class="result-item-label">Conservation Status</div>
                    <div class="result-item-value">${status}</div>
                </div>
            </div>

            <div class="result-disclaimer">
                EVC boundaries are complex and transitional. This result represents the best-available ecological match.
            </div>

            <div class="result-cta">
                <a href="https://www.findmyecologicalgarden.com/?evc=${evcCode}&name=${encodeURIComponent(evcName)}" target="_blank" rel="noopener">
                    Get indigenous plants for this EVC →
                </a>
            </div>
        `;

        showModal(html);
    }

    function showModal(content) {
        if (!resultsModal) return;
        document.getElementById('resultsContent').innerHTML = content;
        resultsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function showError(message) {
        console.error('Showing error:', message);
        const html = `<div class="error-message">${message}</div>`;
        showModal(html);
    }

    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            resultsModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (resultsModal) {
        resultsModal.addEventListener('click', (e) => {
            if (e.target === resultsModal) {
                resultsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
