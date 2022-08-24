function maiorArray (numeros = []) {
    let repetido = 0;
    let contador = 0;
    let contador1 = 0;
    for (index = 0; index < numeros.length; index +=1){
        for (index1 = 0; index1 < numeros.length; index1 +=1)

        if (numeros[index] == numeros[index1]) {
              contador += 1;    
        }
        if (contador > contador1) {
            repetido = numeros[index];
            contador1 = contador;
        }

        contador = 0;
    }
        console.log(repetido)
}

maiorArray( [2, 3, 2, 5, 8, 2, 3])