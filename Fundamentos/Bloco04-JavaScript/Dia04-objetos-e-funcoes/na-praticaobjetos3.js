let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


  let propriedade = 'recorrente'

  info[propriedade] = 'Sim';


  for (let index in info) {
    console.log(index)
  }