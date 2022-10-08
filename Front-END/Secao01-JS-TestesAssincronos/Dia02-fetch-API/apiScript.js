// apiScript.js


const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) =>  newpiada(data));
    
};

window.onload = () => fetchJoke();


function newpiada(obj) {
    const piadas = document.getElementById('jokeContainer');
    piadas.innerText = obj.joke
}

