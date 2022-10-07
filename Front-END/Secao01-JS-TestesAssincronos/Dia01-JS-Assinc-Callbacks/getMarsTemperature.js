const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};


const handleError = (errorReason) => `Error getting temperature: ${errorReason}`;

function sendMarsTemperature(temperatureInFahrenheit, callback) {
    setTimeout(() => {
     const temperatura = getMarsTemperature();
     const message = `A temperatura de Marte é: ${temperatura} graus celsius`
     const faren = temperatureInFahrenheit(temperatura)
     const greeting = greet(temperatura);
     if(messageDelay() < Math.floor(Math.random() * 1500)) {
        callback(handleError('kkk deu errado mané'))
     } else {
     callback(greeting)
    }
    }, messageDelay())
}

// sendMarsTemperature(getMarsTemperature, (message) => {
//    console.log(message);
// }); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo


const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) => `Atualmente está ${toFahrenheit(temperature)}ºF em Marte`;

const greet = (temperature) => `Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`;

// Definição da função sendMarsTemperature...

sendMarsTemperature(temperatureInFahrenheit, (retorno) => {
   console.log(retorno)
}); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// sendMarsTemperature(greet, (greeting) =>{
//   console.log(greeting)
// }); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// ndMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);