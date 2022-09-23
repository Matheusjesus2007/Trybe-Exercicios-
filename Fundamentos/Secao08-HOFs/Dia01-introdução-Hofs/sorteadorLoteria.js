const sorteio = (min, max) => {
return Math.round(Math.random() * (max - min + 1))
}

const resultado = (callback, aposta) => {
    if (callback(1, 5) === aposta) {
    return ('Parabéns você ganhou')
    } 
    return ('Tente novamente')
}

console.log(resultado(sorteio, 3))
