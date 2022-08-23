/* function calculadora(nun1,nun2) {
    
adicao = nun1 + nun2, console.log(adicao)
subtraçao = nun1 - nun2, console.log(subtraçao)
multiplicacao = nun1 * nun2, console.log(multiplicacao)
divisao = nun1 / nun2, console.log(divisao)
modulo = nun1 % nun2, console.log(modulo)

}

calculadora(6,3) */


/* function maiorDeDois (num1, num2) {

if (num1 > num2) {
    console.log('num1 é maior, ele é o', num1)
}

else {
        console.log('num2 é maior, ele é o', num2)
}
}

maiorDeDois (9,6) */

/* function maiorDeTres (num1, num2, num3) {

if (num1 > num2 && num1 > num3) {
    console.log('num1 é maior, ele é o', num1)
}

else if (num2 > num1 && num2 > num3) {
        console.log('num2 é maior, ele é o', num2)
} else {
    console.log('num3 é maior, ele é o', num3)
}
}

maiorDeTres(1,7,3) */


/* function positiveOrNegative (valor) {

if (valor > 0) {
    console.log('positive')
}

else if (valor < 0) {
    console.log('negative')
}

else {
    console.log('zero')
}
}   

positiveOrNegative(-8)  */


 function triangulo (areaTriangulo1, areaTriangulo2, areaTriangulo3) {
   
if (areaTriangulo1 > 0 && areaTriangulo2 > 0 && areaTriangulo3 && areaTriangulo1 + areaTriangulo2 +areaTriangulo3 == 180) {
    console.log('é triangulo')
}

else {
    console.log('não é triangulo')
}
    }


triangulo(20,80,80)
triangulo(35,65,80)
triangulo(13,80,80)