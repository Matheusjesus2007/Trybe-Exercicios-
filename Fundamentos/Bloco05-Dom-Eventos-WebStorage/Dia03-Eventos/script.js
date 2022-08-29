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
  
  /* let ulDias = document.getElementsByTagName('ul')
  ulDias.id = "days" */

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

/*  Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */


function buttonFeriado (entrada) {
  let divButton = document.getElementsByClassName('buttons-container')[0]
  var button = document.createElement('button')
  button.id = 'btn-holiday';
  button.innerText = entrada
  divButton.appendChild(button);
}
buttonFeriado('Feriado')






