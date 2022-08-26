/* Crie um irmão para elementoOndeVoceEsta. */

/* onde eu quero adicionar ? */
const elementoPai = document.getElementById('pai');

/* criando um elento! */
const newElement = document.createElement('section')

/* adicionar class ou id ao elemento criado */
newElement.id = 'irmaoElementoOndeVoceEsta';

/* adicionando o elemento criado ao arquivo HTMl */
elementoPai.appendChild(newElement);

const filhoElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const newElement2 = document.createElement('section')
newElement2.id = 'filhoElementoOndeVoceEsta'
filhoElementoOndeVoceEsta.appendChild(newElement2)

const filhoPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const newElement3 = document.createElement('section')
newElement3.id = 'filhoPrimeiroFilhoDoFilho'
filhoPrimeiroFilhoDoFilho.appendChild(newElement3)