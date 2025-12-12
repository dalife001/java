const result = document.getElementById('lol');

async function getChuckNorrisJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        console.log('Chuck Norris joke:', data.value);
        result.textContent = data.value;
    } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
    }
}

getChuckNorrisJoke();  
