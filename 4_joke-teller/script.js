const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Toggle button on/off
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
// Using VoiceRSS from voice.js
function playJoke(jokeText) {
        VoiceRSS.speech({
            key: '625e7cfd2479426cb39c748faacf9ee8',
            src: jokeText,
            hl: 'en-us',
            v: 'Linda',
            r: 0, 
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
}

// Get Jokes from Joke API https://sv443.net/jokeapi/v2/
async function getJokes() {
    toggleButton();
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        playJoke(joke);
    } catch (error) {
        // Catch Error Here
        console.log('Error in JokeTeller ', error);
    }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);