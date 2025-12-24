// EVC Lookup functionality with debug logging
document.addEventListener('DOMContentLoaded', function() {
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

    if (addressInput) {
        addressInput.addEventListener('input', function(e) {
            clearTimeout(autocompleteTimeout);
            const query = e.target.value.trim();

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
        const url = CONFIG.NOMINATIM_URL + '/search?' + new URLSearchParams({
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
                const filtered = data.filter(function(item) {
                    const addr = item.address || {};
                    return (
                        addr.state === 'Victoria' &&
                        addr.house_number &&
                        !item.type?.match(/amenity|shop|office|tourism/)
                    );
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

        autocompleteResults.innerHTML = results.map(function(item) {
            const addr = item.address;
            const display = [
                addr.house_number,
                addr.road,
                addr.suburb || addr.city || addr.town,
                'VIC'
            ].filter(Boolean).join(', ');

            return '<div class="autocomplete-item" data-lat="' + item.lat + '" data-lon="' + item.lon + '" data-display="' + display + '">' + display + '</div>';
        }).join('');

        autocompleteResults.classList.add('active');

        autocompleteResults.querySelectorAll('.autocomplete-item').forEach(function(item) {
            item.addEventListener('click', function() {
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
                const query = addressInput.value.trim();
                if (!query) {
                    showError('Please enter an addres
