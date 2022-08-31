// variaveis globais
let paragrafo = document.getElementsByTagName('p')[0];


// function backgroundColor
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');

function addCorToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('cor'));
  const corText = input.value;
  oldList.push(corText);
  localStorage.setItem('cor', JSON.stringify(oldList));
  paragrafo.style.backgroundColor = oldList[oldList.length-1]
}

button.addEventListener('click', addCorToLocalStorage);


// function TextColor
const buttonTxt = document.getElementById('add-buttonTxt');
const inputTxt = document.getElementById('phrases-inputTxt');

function addCorTxtToLocalStorage() {
    const oldList = JSON.parse(localStorage.getItem('corTxt'));
    const corTextTxt = inputTxt.value;
    oldList.push(corTextTxt);
    localStorage.setItem('corTxt', JSON.stringify(oldList));
    paragrafo.style.color = oldList[oldList.length-1]
  }

 buttonTxt.addEventListener('click', addCorTxtToLocalStorage);

//function Tamanho da fonte  
const buttonTamanho = document.getElementById('add-buttonTamanho');
const inputTamanho = document.getElementById('phrases-inputTamanho');

function addTxtTamanhoToLocalStorage() {
    const oldListTamanho = JSON.parse(localStorage.getItem('TxtTamanho'));
    const TxtTamanho = inputTamanho.value;
    oldListTamanho.push(TxtTamanho);
    localStorage.setItem('TxtTamanho', JSON.stringify(oldListTamanho));
    paragrafo.style.fontSize = oldListTamanho[oldListTamanho.length-1]
  }

  buttonTamanho.addEventListener('click', addTxtTamanhoToLocalStorage)

//function Espaço entre as linhas do texto
const buttonEspace = document.getElementById('add-buttonEspace');
const inputEspace = document.getElementById('phrases-inputEspace');

function addEspaceLinhaToLocalStorage() {
    const oldListEspace = JSON.parse(localStorage.getItem('LineEspaco'));
    const TxtEspaco = inputEspace.value;
    oldListEspace.push(TxtEspaco);
    localStorage.setItem('LineEspaco', JSON.stringify(oldListEspace));
    paragrafo.style.lineHeight = oldListEspace[oldListEspace.length-1]
  }

  buttonEspace.addEventListener('click', addEspaceLinhaToLocalStorage)

// function tipo de fonte 
const buttonFFamily = document.getElementById('add-buttonFFamily');
const inputFFamily = document.getElementById('phrases-inputFFamily');

function alteraFonteFamilyToLocalStorage() {
    const oldListFFamily = JSON.parse(localStorage.getItem('FonteFamily'));
    const inputFFamily1 = inputFFamily.value;
    oldListFFamily.push(inputFFamily1);
    localStorage.setItem('FonteFamily', JSON.stringify(oldListFFamily));
    paragrafo.style.fontFamily = oldListFFamily[oldListFFamily.length-1]
  }

  buttonFFamily.addEventListener('click', alteraFonteFamilyToLocalStorage)


// function preferencias cliente
    function initialRenderization() {
    if (localStorage.getItem('cor') === null) {
      localStorage.setItem('cor', JSON.stringify([]));
    } else {
        const oldListCor = JSON.parse(localStorage.getItem('cor'));
    paragrafo.style.backgroundColor = oldListCor[oldListCor.length-1]
    }

    if (localStorage.getItem('corTxt') === null) {
      localStorage.setItem('corTxt', JSON.stringify([]))
    } else {
        const oldListTxt = JSON.parse(localStorage.getItem('corTxt'));
    paragrafo.style.color = oldListTxt[oldListTxt.length-1]
    }
    
    if (localStorage.getItem('TxtTamanho') === null) {
        localStorage.setItem('TxtTamanho', JSON.stringify([]))
      } else {
        const oldListTamanho = JSON.parse(localStorage.getItem('TxtTamanho'));
      paragrafo.style.fontSize = oldListTamanho[oldListTamanho.length-1]
      }
    
    if (localStorage.getItem('LineEspaco') === null) {
    localStorage.setItem('LineEspaco', JSON.stringify([]))
    } else {
    const oldListEspace = JSON.parse(localStorage.getItem('LineEspaco'));
    paragrafo.style.lineHeight = oldListEspace[oldListEspace.length-1]
    }
    
    if (localStorage.getItem('FonteFamily') === null) {
        localStorage.setItem('FonteFamily', JSON.stringify([]))
     } else {
        localStorage.setItem('FonteFamily', JSON.stringify(oldListFFamily));
        paragrafo.style.fontFamily = oldListFFamily[oldListFFamily.length-1]
     }

   } 
   


// Chama preferencias cliente     
    window.onload = function() {
    initialRenderization();
  };
  
  