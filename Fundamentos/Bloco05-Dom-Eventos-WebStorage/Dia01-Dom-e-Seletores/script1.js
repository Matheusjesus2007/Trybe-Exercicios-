let titulo = document.querySelector('h1');
titulo.style.background = '#4CBA20';

let urgenteImportante = document.querySelectorAll('h3')[0];
urgenteImportante.style.background = '#BD3FBF';

let urgenteNaoImportante = document.querySelectorAll('h3')[1];
urgenteNaoImportante.style.background = '#BD3FBF'; 

let naoUrgenteImportante = document.querySelectorAll('h3')[2];
naoUrgenteImportante.style.background = '#313439';

let naoUrgenteNaoImportante = document.querySelectorAll('h3')[3];
naoUrgenteNaoImportante.style.background = '#313439';

let urgente = document.getElementsByClassName('emergency-tasks')[0];
urgente.style.background = '#E5956F';

let naoUrgente = document.getElementsByClassName('no-emergency-tasks')[0];
naoUrgente.style.background = '#DAED07';

