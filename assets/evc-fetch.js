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
