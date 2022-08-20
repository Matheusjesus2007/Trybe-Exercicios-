let salarioBruto = 2400;
let salarioBase;
let salarioLiquido;
let aliquotaInss;
let aliquotaInssMax = 570.88;
let aliquotaIr;

let descontoIr;
let deduzir;

 if (salarioBruto <= 1556.94) {
    aliquotaInss = 8;
 } 

 else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = 9;
 }   

 else if (salarioBruto >= 2549.93 && salarioBruto <= 5189.82) {
    aliquotaInss = 11;
 } 

 else {
   aliquotaInss = aliquotaInssMax
 }


 if (salarioBruto > 5189.82) {
 salarioBase = salarioBruto - aliquotaInssMax; 
 }

else {
    salarioBase = salarioBruto - ((aliquotaInss/100) * salarioBruto);  
 }


if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
 }

else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIr = 7.5;
    deduzir = 142.80
 }   

 else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIr = 15;
    deduzir = 354.80;
 } 

 else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIr = 22.5;
    deduzir = 636.13
 }

 else {
    aliquotaIr = 27.5
    deduzir = 869.36
 }
    
descontoIr = (((aliquotaIr/100) * salarioBase) - deduzir);
salarioLiquido = (salarioBase - descontoIr);

console.log(salarioBruto)
console.log(salarioLiquido)
