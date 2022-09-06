const bttEnviar = document.querySelector('#btt-Enviar');
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");

/* function enviar(Event) {
    console.log('teste')
    Event.preventDefault();
}

bttEnviar.addEventListener('click', enviar);
 */

function validador() {
  if (nome.value.length < 5 || nome.value.length > 40) {
    alert ('Dados Inválidos')   
  } else if (email.value.length < 5 || nome.value.length > 50) {
    alert ('Dados Inválidos')   
  } else if (textarea.value.length > 500) {
    alert ('Dados Inválidos')   
  } 
  alert ('Obrigado por participar do concurso TrybeTrip!')
 }

bttEnviar.addEventListener('click', validador);