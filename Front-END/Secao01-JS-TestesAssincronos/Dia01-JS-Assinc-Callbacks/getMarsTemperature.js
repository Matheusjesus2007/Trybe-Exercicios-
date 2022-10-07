const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature(getMarsTemperature, callback) {
    setTimeout(() => {
     const message = `A temperatura de Marte é: ${getMarsTemperature()} graus celsius`
     callback(message)
    }, messageDelay())
}

sendMarsTemperature(getMarsTemperature, (message) => {
    console.log(message);
}); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo