const custoProduto = 100;
const vendaProduto = 185;
let custoTotolProduto;
let lucro;

if (custoProduto < 0 || vendaProduto < 0) {
    console.log('não é permitido valores menor do que zero')
}

else {
custoTotolProduto = ((20 / 100) + 1) * custoProduto;
lucro = vendaProduto - custoTotolProduto;

console.log('Custo total do produto após o imposto',custoTotolProduto)
console.log('Lucro após a venda do produto',lucro)


}




