const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
    let resultado;
    let teste = [];
    arrays.reduce((acc, cur) => {
     resultado = acc + ' ' + cur;
     return resultado
    })
    teste.push(resultado)
    return teste;
  }

  console.log(flatten(arrays))