
function maiorArray (numeros = []) {
    let maiorIndex = 0;
    for (index = 0; index < numeros.length; index +=1){
        if (numeros[index] > maiorIndex) {
            maiorIndex = numeros[index]
        }
    }
    console.log(maiorIndex)
}

maiorArray([1,2,3,4,5,6,7,5,2,3,30,32])