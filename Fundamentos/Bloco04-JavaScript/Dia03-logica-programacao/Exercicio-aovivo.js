//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

    /*  let idade = 15;
        if(idade >= 18) {
        console.log('A pessoa é maior de idade')
    }  */

    /*  let idade = 19;
    let maiorIdade = ( idade >= 18)
    if(maiorIdade) {
      console.log('A pessoa é maior de idade')
    }   */
    
    let idade = 18;
    let maiorIdade = idade >= 18 ? 'A pessoa é maior de idade' : '';
    console.log(maiorIdade)