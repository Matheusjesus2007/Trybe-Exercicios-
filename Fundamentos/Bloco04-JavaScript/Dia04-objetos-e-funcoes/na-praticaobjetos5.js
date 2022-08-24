let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  let propriedade = 'recorrente'

  info[propriedade] = 'Sim';

  info.personagem += ' e Tio patinhas'
  info.origem += ' e Christmas on Bear Mountain, Dell'+'s Four Color Comics #178'
  info.nota += ' O último MacPatinhas'
  info.recorrente = 'Ambos recorrentes'

  


  for (let index in info) {
    console.log(index,': ',  info[index])
  }

  