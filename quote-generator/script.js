// let - changeable value (variable)
// conts - not changeable constant
let apiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes from API
// https://jacintodesign.github.io/quotes-api/data/quotes.json
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes);
        newQuote();
    } catch (error) {
        // Catching error here
        console.log(error);
    }
}

// On load
getQuotes();