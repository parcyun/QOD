document.addEventListener('DOMContentLoaded', function() {
    fetch('quotes.json')
        .then(response => response.json())
        .then(quotes => {
            const quoteElement = document.getElementById('quote');
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];

            quoteElement.innerHTML = `<p>${randomQuote.quote}</p><p>- ${randomQuote.author}</p>`;
        })
        .catch(error => console.error('Error loading quotes:', error));
});