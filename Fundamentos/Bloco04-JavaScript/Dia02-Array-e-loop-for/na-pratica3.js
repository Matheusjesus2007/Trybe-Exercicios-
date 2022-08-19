let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado =0;
let media;

for (index = 0; index < numbers.length; index += 1) {
    resultado = (numbers[index]) + resultado
    }
 
media = resultado / (numbers.length)    

    console.log('A soma de todos arrays é', resultado)
    console.log('A media de todos os arrays é', media)