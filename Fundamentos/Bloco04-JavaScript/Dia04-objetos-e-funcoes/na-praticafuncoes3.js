
function maiorArray (numeros = []) {
    let menorIdex = Number.MAX_VALUE;
    for (index = 0; index < numeros.length; index +=1){
        if (numeros[index] < menorIdex) {
            menorIdex = numeros[index]
        }
    }
    console.log(menorIdex)
}

maiorArray([3,4,5,6,7,5,3,30,32])