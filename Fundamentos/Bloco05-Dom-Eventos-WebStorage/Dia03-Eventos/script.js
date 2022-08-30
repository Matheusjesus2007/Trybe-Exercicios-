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
  
  let mes = document.getElementById('days')
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
   for(index = 2; index < decemberDaysList.length; index += 1) {
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

function buttonFeriado (entrada) {
  let divButton = document.getElementsByClassName('buttons-container')[0];
  let buttonFeriados = document.createElement('button');
  buttonFeriados.id = 'btn-holiday';
  buttonFeriados.innerText = entrada;
  divButton.appendChild(buttonFeriados);
  buttonFeriados.addEventListener('click', corHoliday)
}
buttonFeriado('Feriado')

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

function buttonSexta (entrada1) {
  let divButton = document.getElementsByClassName('buttons-container')[0];
  let buttonSextas = document.createElement('button');
  buttonSextas.id = 'btn-friday';
  buttonSextas.innerText = entrada1;
  divButton.appendChild(buttonSextas);
}
buttonSexta('Sexta-feira')