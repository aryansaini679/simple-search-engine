// Get references to HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const historyList = document.getElementById('historyList');
const clearHistoryButton = document.getElementById('clearHistoryButton');

// Load search history from localStorage on page load
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Function to update the history display
function updateHistoryDisplay() {
    historyList.innerHTML = '';
    searchHistory.forEach((query, index) => {
        const li = document.createElement('li');
        li.textContent = query;
        historyList.appendChild(li);
    });
}

// Function to handle search action
function handleSearch() {
    const query = searchInput.value.trim();
    if (query !== '') {
        searchHistory.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        updateHistoryDisplay();
        searchInput.value = '';  // Clear input field after search
    }
}

// Function to clear search history
function clearHistory() {
    searchHistory = [];
    localStorage.removeItem('searchHistory');
    updateHistoryDisplay();
}

// Attach event listeners
searchButton.addEventListener('click', handleSearch);
clearHistoryButton.addEventListener('click', clearHistory);

// Initialize the search history display on page load
updateHistoryDisplay();
