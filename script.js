async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}"`;
        document.getElementById('author').textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').textContent = 'Failed to load quote.';
        document.getElementById('author').textContent = '';
    }
}

// Fetch a quote when the page loads
fetchQuote();
