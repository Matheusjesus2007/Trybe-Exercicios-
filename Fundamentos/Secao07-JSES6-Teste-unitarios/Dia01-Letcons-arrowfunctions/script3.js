const btnContador = document.getElementById('btn-contador');
const contador = document.getElementById('contador');

let clickCount = 0;

btnContador.addEventListener('click', () => {  
  clickCount += 1;
  contador.innerText = clickCount
} )