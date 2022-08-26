/* Crie um irmão para elementoOndeVoceEsta. */


const elementoPai = document.getElementById('pai');

const newElement = document.createElement('section')

newElement.id = '#irmaoElementoOndeVoceEsta';

elementoPai.appendChild(newElement);