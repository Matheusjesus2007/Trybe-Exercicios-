let salarioBruto = 3000;
let aliquotaInss = 11;
let aliquotaIr = 7.5;
let salarioBase;
let salarioLiquido;
let descontoIr;

salarioBase = salarioBruto - ((aliquotaInss/100) * salarioBruto);
descontoIr = ((aliquotaIr/100) * salarioBase) - 142.80 
salarioLiquido = salarioBase - descontoIr;


console.log(salarioBase)
console.log(descontoIr)
console.log(salarioLiquido)