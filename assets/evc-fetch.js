document.addEventListener('DOMContentLoaded', function() {
    console.log('EVC Fetch script loaded');
    
    var addressInput = document.getElementById('address');
    var searchBtn = document.getElementById('searchBtn');
    var locationBtn = document.getElementById('locationBtn');
    var autocompleteResults = document.getElementById('autocompleteResults');
    var resultsModal = document.getElementById('resultsModal');
    var modalClose = document.getElementById('modalClose');

    var selectedLocation = null;
    var autocompleteTimeout = null;

    console.log('Elements found:', {
        addressInput: !!addressInput,
        searchBtn: !!searchBtn,
        locationBtn: !!locationBtn,
        autocompleteResults: !!autocompleteResults,
        resultsModal: !!resultsModal
    });

    if (addressInput) {
        addressInput.addEventListener('input', function(e) {
            clearTimeout(autocompleteTimeout);
            var query = e.target.value.trim();

            if (query.length < 3) {
                autocompleteResults.classList.remove('active');
                autocompleteResults.innerHTML = '';
                return;
            }

            autocompleteTimeout = setTimeout(function() {
                fetchAutocomplete(query);
            }, 300);
        });
    }

    function fetchAutocomplete(query) {
        console.log('Fetching autocomplete for:', query);
        var url = CONFIG.NOMINATIM_URL + '/search?' + new URLSearchParams({
            q: query + ', Victoria, Australia',
            format: 'json',
            addressdetails: 1,
            limit: 8,
            countrycodes: 'au'
        });

        console.log('Autocomplete URL:', url);
        fetch(url)
            .then(function(response) { return response.json(); })
            .then(function(data) {
                console.log('Autocomplete response:', data);
                var filtered = data.filter(function(item) {
                    var addr = item.address || {};
                    var hasHouseNumber = addr.state === 'Victoria' && addr.house_number;
                    var notCommercial = true;
                    if (item.type) {
                        notCommercial = !item.type.match(/amenity|shop|office|tourism/);
                    }
                    return hasHouseNumber && notCommercial;
                });
                console.log('Filtered results:', filtered.length);
                displayAutocomplete(filtered);
            })
            .catch(function(error) {
                console.error('Autocomplete error:', error);
            });
    }

    function displayAutocomplete(results) {
        if (results.length === 0) {
            autocompleteResults.classList.remove('active');
            autocompleteResults.innerHTML = '';
            return;
        }

        var html = '';
        for (var i = 0; i < results.length; i++) {
            var item = results[i];
            var addr = item.address;
            var parts = [];
            if (addr.house_number) parts.push(addr.house_number);
            if (addr.road) parts.push(addr.road);
            if (addr.suburb) parts.push(addr.suburb);
            else if (addr.city) parts.push(addr.city);
            else if (addr.town) parts.push(addr.town);
            parts.push('VIC');
            var display = parts.join(', ');

            html += '<div class="autocomplete-item" data-lat="' + item.lat + '" data-lon="' + item.lon + '" data-display="' + display + '">' + display + '</div>';
        }

        autocompleteResults.innerHTML = html;
        autocompleteResults.classList.add('active');

        var items = autocompleteResults.querySelectorAll('.autocomplete-item');
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function() {
                selectedLocation = {
                    lat: parseFloat(this.dataset.lat),
                    lon: parseFloat(this.dataset.lon),
                    display: this.dataset.display
                };
                console.log('Selected location:', selectedLocation);
                addressInput.value = this.dataset.display;
                autocompleteResults.classList.remove('active');
                autocompleteResults.innerHTML = '';
            });
        }
    }

    document.addEventListener('click', function(e) {
        if (addressInput && !addressInput.contains(e.target) && autocompleteResults && !autocompleteResults.contains(e.target)) {
            autocompleteResults.classList.remove('active');
        }
    });

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            console.log('Search button clicked');
            console.log('Selected location:', selectedLocation);
            
            if (!selectedLocation) {
                var query = addressInput.value.trim();
                if (!query) {
                    showError('Please enter an address');
                    return;
                }
                geocodeAndSearch(query);
            } else {
                searchEVC(selectedLocation.lat, selectedLocation.lon, selectedLocation.display);
            }
        });
    }

    if (locationBtn) {
        locationBtn.addEventListener('click', function() {
            console.log('Location button clicked');
            if ('geolocation' in navigator) {
                locationBtn.textContent = 'Getting location...';
                locationBtn.disabled = true;

                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        var lat = position.coords.latitude;
                        var lon = position.coords.longitude;
                        console.log('Got coordinates:', lat, lon);

                        var url = CONFIG.NOMINATIM_URL + '/reverse?' + new URLSearchParams({
                            lat: lat,
                            lon: lon,
                            format: 'json',
                            addressdetails: 1
                        });

                        console.log('Reverse geocode URL:', url);
                        fetch(url)
                            .then(function(response) { return response.json(); })
                            .then(function(data) {
                                console.log('Reverse geocode response:', data);
                                if (data.address && data.address.state !== 'Victoria') {
                                    showError('This tool only works for addresses in Victoria, Australia');
                                    locationBtn.textContent = '📍 Use my location';
                                    locationBtn.disabled = false;
                                    return;
                                }

                                var parts = [];
                                if (data.address) {
                                    if (data.address.house_number) parts.push(data.address.house_number);
                                    if (data.address.road) parts.push(data.address.road);
                                    if (data.address.suburb) parts.push(data.address.suburb);
                                    else if (data.address.city) parts.push(data.address.city);
                                    parts.push('VIC');
                                }
                                var display = parts.length > 0 ? parts.join(', ') : 'Current Location';

                                searchEVC(lat, lon, display);
                                locationBtn.textContent = '📍 Use my location';
                                locationBtn.disabled = false;
                            })
                            .catch(function(error) {
                                console.error('Reverse geocoding error:', error);
                                showError('Unable to determine location address');
                                locationBtn.textContent = '📍 Use my location';
                                locationBtn.disabled = false;
                            });
                    },
                    function(error) {
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

    function geocodeAndSearch(query) {
        console.log('Geocoding:', query);
        var url = CONFIG.NOMINATIM_URL + '/search?' + new URLSearchParams({
            q: query + ', Victoria, Australia',
            format: 'json',
            addressdetails: 1,
            limit: 1
        });

        console.log('Geocode URL:', url);
        fetch(url)
            .then(function(response) { return response.json(); })
            .then(function(data) {
                console.log('Geocode response:', data);
                if (data.length === 0) {
                    showError('Address not found. Please try a different address.');
                    return;
                }

                var result = data[0];
                if (result.address && result.address.state !== 'Victoria') {
                    showError('This tool only works for addresses in Victoria, Australia');
                    return;
                }

                searchEVC(parseFloat(result.lat), parseFloat(result.lon), query);
            })
            .catch(function(error) {
                console.error('Geocoding error:', error);
                showError('Unable to find address. Please try again.');
            });
    }

    // ============================================================================
    // UPDATED: Property-Precise EVC Detection
    // ============================================================================
    function searchEVC(lat, lon, address) {
        console.log('=== PROPERTY-PRECISE EVC SEARCH ===');
        console.log('Searching EVC for:', lat, lon, address);
        
        var steps = document.querySelectorAll('.step');
        for (var i = 0; i < steps.length; i++) {
            if (i < 2) steps[i].classList.add('active');
        }

        showModal('<div class="loading-spinner"></div>');

        // CHANGE: Ultra-precise buffer for property-level accuracy
        var buffer = 0.0001;  // ~11 meters (property-level precision)
        
        console.log('Using ultra-precise buffer:', buffer, '(~11 meters)');
        
        // Try lat,lon order first
        var bbox1 = [
            lat - buffer,
            lon - buffer,
            lat + buffer,
            lon + buffer
        ].join(',');

        var wfsUrl = CONFIG.VIC_WFS_URL + '?' + new URLSearchParams({
            service: 'WFS',
            version: '1.1.0',
            request: 'GetFeature',
            typeName: CONFIG.EVC_LAYER,
            outputFormat: 'application/json',
            bbox: bbox1,
            srsName: 'EPSG:4326'
        });

        console.log('WFS URL (lat,lon order, property-precise):', wfsUrl);
        fetch(wfsUrl)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('HTTP error! status: ' + response.status);
                }
                return response.json();
            })
            .then(function(data) {
                console.log('WFS response (lat,lon):', data);
                console.log('Number of features:', data.features ? data.features.length : 0);

                if (!data.features || data.features.length === 0) {
                    // Try lon,lat order with precise buffer
                    console.log('No features with precise lat,lon, trying lon,lat...');
                    return searchEVCLonLat(lat, lon, address, buffer);
                }

                processEVCResults(data, lat, lon, address);
            })
            .catch(function(error) {
                console.error('EVC fetch error:', error);
                showError('Unable to retrieve EVC data. Error: ' + error.message);
            });
    }

    function searchEVCLonLat(lat, lon, address, buffer) {
        // If no buffer provided, start with ultra-precise
        if (!buffer) buffer = 0.0001;
        
        console.log('Trying lon,lat order with buffer:', buffer);
        
        // Try lon,lat order
        var bbox2 = [
            lon - buffer,
            lat - buffer,
            lon + buffer,
            lat + buffer
        ].join(',');

        var wfsUrl = CONFIG.VIC_WFS_URL + '?' + new URLSearchParams({
            service: 'WFS',
            version: '1.1.0',
            request: 'GetFeature',
            typeName: CONFIG.EVC_LAYER,
            outputFormat: 'application/json',
            bbox: bbox2,
            srsName: 'EPSG:4326'
        });

        console.log('WFS URL (lon,lat order):', wfsUrl);
        return fetch(wfsUrl)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('HTTP error! status: ' + response.status);
                }
                return response.json();
            })
            .then(function(data) {
                console.log('WFS response (lon,lat):', data);
                console.log('Number of features:', data.features ? data.features.length : 0);

                if (!data.features || data.features.length === 0) {
                    // If ultra-precise failed, try slightly larger buffer
                    if (buffer < 0.001) {
                        console.log('No features with ultra-precise buffer, trying larger area...');
                        return searchEVCLonLat(lat, lon, address, 0.001); // ~110 meters
                    }
                    showError('No EVC data found for this location. This may be outside mapped areas.');
                    return;
                }

                processEVCResults(data, lat, lon, address);
            })
            .catch(function(error) {
                console.error('EVC fetch error:', error);
                showError('Unable to retrieve EVC data. Error: ' + error.message);
            });
    }

    // UPDATED: Better polygon matching with transition zone handling
    function processEVCResults(data, lat, lon, address) {
        console.log('=== PROCESSING EVC RESULTS ===');
        var point = turf.point([lon, lat]);
        var matchedFeature = null;

        console.log('Checking', data.features.length, 'polygon(s) for exact match...');

        // Find ALL polygons that contain this exact point
        var containingPolygons = [];
        for (var i = 0; i < data.features.length; i++) {
            var feature = data.features[i];
            if (turf.booleanPointInPolygon(point, feature)) {
                containingPolygons.push(feature);
                var evcCode = feature.properties.evc || feature.properties.evc_no || feature.properties.EVC;
                var evcName = feature.properties.x_evcname || feature.properties.evc_name || feature.properties.X_EVCNAME;
                console.log('✓ Point contained in polygon', i, '- EVC', evcCode, '-', evcName);
            }
        }

        if (containingPolygons.length === 0) {
            // No exact match - use nearest (first in results)
            console.log('⚠ No polygons contain this exact point, using nearest polygon');
            matchedFeature = data.features[0];
        } else if (containingPolygons.length === 1) {
            // Perfect - exactly one polygon
            console.log('✓ Exact match: 1 polygon contains this property');
            matchedFeature = containingPolygons[0];
        } else {
            // Multiple polygons contain point (mosaic/transition zone)
            console.log('⚠ TRANSITION ZONE:', containingPolygons.length, 'polygons overlap at this location');
            
            // Select the SMALLEST polygon (most specific EVC classification)
            matchedFeature = containingPolygons[0];
            var smallestArea = turf.area(matchedFeature);
            
            for (var i = 1; i < containingPolygons.length; i++) {
                var currentArea = turf.area(containingPolygons[i]);
                if (currentArea < smallestArea) {
                    smallestArea = currentArea;
                    matchedFeature = containingPolygons[i];
                }
            }
            
            console.log('✓ Selected smallest/most specific polygon');
            console.log('  Area:', Math.round(smallestArea), 'square meters');
        }

        var finalEvcCode = matchedFeature.properties.evc || matchedFeature.properties.evc_no || matchedFeature.properties.EVC;
        var finalEvcName = matchedFeature.properties.x_evcname || matchedFeature.properties.evc_name || matchedFeature.properties.X_EVCNAME;
        console.log('=== FINAL RESULT: EVC', finalEvcCode, '-', finalEvcName, '===');

        displayResults(matchedFeature, address);

        var allSteps = document.querySelectorAll('.step');
        for (var i = 0; i < allSteps.length; i++) {
            allSteps[i].classList.add('active');
        }
    }
    // ============================================================================
    // END UPDATED SECTION
    // ============================================================================

    function displayResults(feature, address) {
        console.log('Displaying results for feature:', feature);
        
        var props = feature.properties;
        console.log('Feature properties:', props);
        
        var evcName = props.x_evcname || props.evc_name || props.X_EVCNAME || 'Unknown';
        var evcCode = props.evc || props.evc_no || props.EVC || '';
        var bioregion = props.bioregion || props.bioregion_name || props.BIOREGION || 'Not specified';
        var status = props.evc_bcs_desc || props.bcs_description || props.EVC_BCS_DESC || 'Status not available';

        var html = '<div class="result-header">' +
            '<h2>EVC ' + evcCode + ' — ' + evcName + '</h2>' +
            '<div class="result-address">' + address + '</div>' +
            '</div>' +
            '<div class="result-details">' +
            '<div class="result-item">' +
            '<div class="result-item-label">Bioregion</div>' +
            '<div class="result-item-value">' + bioregion + '</div>' +
            '</div>' +
            '<div class="result-item">' +
            '<div class="result-item-label">Conservation Status</div>' +
            '<div class="result-item-value">' + status + '</div>' +
            '</div>' +
            '</div>' +
            '<div class="result-disclaimer">' +
            'EVC boundaries are complex and transitional. This result represents the best-available ecological match.' +
            '</div>' +
            '<div class="result-cta">' +
            '<a href="https://www.findmyecologicalgarden.com/?evc=' + evcCode + '&name=' + encodeURIComponent(evcName) + '" target="_blank" rel="noopener">' +
            'Get indigenous plants for this EVC →' +
            '</a>' +
            '</div>';

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
        var html = '<div class="error-message">' + message + '</div>';
        showModal(html);
    }

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            resultsModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (resultsModal) {
        resultsModal.addEventListener('click', function(e) {
            if (e.target === resultsModal) {
                resultsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
