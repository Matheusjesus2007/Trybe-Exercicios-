/* 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50. */

let numeros = [];
let maiorPrimo = 0;
let divisores =0;

for (index = 0; index <= 49; index += 1 ) {
    numeros.push(index)
    for (index1 = 1; index1 <= numeros[index]; index1 += 1 ) {  
    if (curioso = numeros[index] % index1 == 0) {
        divisores +=1;  
        }    
    }

    if (divisores == 2) {
        maiorPrimo = numeros[index]    
    } 
    
    divisores = 0

    }

    console.log(maiorPrimo)
 
   








   