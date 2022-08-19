let numbers = [52, 99, 33, 192, 70, 8, 100, 2, 32, 2];
let contImpar = 0;


for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] %2 !==0)
    contImpar +=1;

    }

    if (contImpar == 0) {
        console.log('nenhum valor impar encontrado')
    }

    else {

console.log(contImpar)
    }

