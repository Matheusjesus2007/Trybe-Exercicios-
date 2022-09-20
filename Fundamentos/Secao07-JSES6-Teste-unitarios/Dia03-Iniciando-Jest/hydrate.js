function hydrate(frase) {
        let soma = 0;
        for (let index = 0; index <= frase.length; index += 1) {
          if (parseInt(frase[index], 10) <= 9) {
            soma += parseInt(frase[index], 10);
          }
        }
        if (soma === 1) {
          return (`${soma} copo de água`);
        } return (`${soma} copos de água`);

}

module.exports = hydrate;