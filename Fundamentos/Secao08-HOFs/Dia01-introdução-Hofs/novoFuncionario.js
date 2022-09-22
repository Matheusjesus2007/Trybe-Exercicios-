const newFuncionario = (nome) => {
  let firstLastname = [] 
  firstLastname.push(nome.split(' ')[0])
  firstLastname.push(nome.split(' ')[nome.split(' ').length -1])
    return { 
        nomeCompleto: nome, Email: `${firstLastname}@trybe.com.br`.replace(',','.').toLowerCase()
    }
}

const newEmployees = (callback) => { 
    const employees = {
      id1: callback('Manoel da Silva Souza'),
      id2: callback('Rafael Luciano Castan'), 
      id3: callback('Joao Novaes vitor') 
      
    }
    console.log(employees)
    return employees;
  };

  newEmployees(newFuncionario);


