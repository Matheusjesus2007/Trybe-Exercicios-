const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
    let resultado;
    arrays.reduce((acc, cur) => {
     resultado = acc + ' ' + cur;
     return resultado
    })

    return resultado;
  }

  console.log(flatten(arrays))