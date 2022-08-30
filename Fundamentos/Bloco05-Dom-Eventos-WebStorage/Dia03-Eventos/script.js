function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();


  // Exercício 1 
  let mes = document.getElementById('days')
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
   for(index = 0; index < decemberDaysList.length; index += 1) {
   let dias = document.createElement('li')
    dias.className = 'days';
    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31) {
    dias.className += ' holiday'    
    }
    if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
    dias.className += ' friday'    
        }
    dias.innerText = decemberDaysList[index]
    mes.appendChild(dias)  
  }

 // Exercício 2 
function buttonFeriado (entrada) {
  let divButton = document.getElementsByClassName('buttons-container')[0];
  let buttonFeriados = document.createElement('button');
  buttonFeriados.id = 'btn-holiday';
  buttonFeriados.innerText = entrada;
  divButton.appendChild(buttonFeriados);
  buttonFeriados.addEventListener('click', corHoliday)
}
buttonFeriado('Feriado')

// Exercício 3
function corHoliday () {
let classeFeriados = document.querySelectorAll('.holiday');
for (index = 0; index < classeFeriados.length; index += 1) {
if (classeFeriados[index].style.backgroundColor == 'yellow') { 
classeFeriados[index].style.backgroundColor = 'rgb(238,238,238)';
} else {
  classeFeriados[index].style.backgroundColor = 'yellow';
    }
  }
}

// Exercício 4
function buttonSexta (entrada1) {
  let divButton = document.getElementsByClassName('buttons-container')[0];
  let buttonSextas = document.createElement('button');
  buttonSextas.id = 'btn-friday';
  buttonSextas.innerText = entrada1;
  divButton.appendChild(buttonSextas);
  buttonSextas.addEventListener('click', txtSexta)
}
buttonSexta('Sexta-feira')

// Exercício 5
function txtSexta () {
  let sextasoriginais = [4, 11, 18, 25];
  let classeSexta = document.querySelectorAll('.friday');
  for (index = 0; index < classeSexta.length; index += 1) {
  if (classeSexta[index].innerText !== 'Sexta-feira') {
     classeSexta[index].innerText = 'Sexta-feira';
    } else { classeSexta[index].innerText = sextasoriginais[index];

    }
  }
}

//Exercício 6
let diaAll = document.getElementsByClassName('days');
for (let index = 0; index < diaAll.length; index += 1) {
diaAll[index].addEventListener('mouseover', diaZoom);

function diaZoom() {
diaAll[index].style.transform = 'scale(2)'
}

diaAll[index].addEventListener('mouseout', diaZoomOut);
function diaZoomOut() {
  diaAll[index].style.transform = ''
  }
}

// Exercício 7
function myTarefas (recebe) {
let tarefas = document.getElementsByClassName('my-tasks')[0];
let minhasTarefas = document.createElement('span');
minhasTarefas.innerText = recebe;
tarefas.appendChild(minhasTarefas);

}
myTarefas('cozinhar')

// Exercício 8
function corTask (recebe) {
let tarefas = document.getElementsByClassName('my-tasks')[0];
let  corTarefas = document.createElement('div')
corTarefas.className = 'task';
corTarefas.style.backgroundColor = recebe;
tarefas.appendChild(corTarefas)

}
corTask('green')

// Exercício 9
let selectTarefa = document.getElementsByClassName('task')[0];
selectTarefa.addEventListener('click', selectTask);

function selectTask () {
  if (selectTarefa.className == 'task') {
selectTarefa.className = 'task selected';
} else {
  selectTarefa.className = 'task';
}
}


