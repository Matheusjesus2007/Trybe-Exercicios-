const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  function reduceNames (livros) {
    livros.reduce((acc, cur) => {
      resultado = acc + ' ' + cur.author.name  
      return resultado 
    }, '')
    return resultado;  
  }

  console.log(reduceNames(books))

 let idades = [];
  function averageAge(livros) {
    livros.reduce((acc, cur) => {
    resultado = acc + (cur.releaseYear - cur.author.birthYear)
    idades.push(cur.releaseYear - cur.author.birthYear)
    return resultado
    }, 0)
    return resultado  / livros.length
  }
  
  console.log(averageAge(books))

  function longestNamedBook(livros) {
    livros.reduce((acc, cur) => {
        if(acc.name.length > cur.name.length) {
          resultado = acc;  
        } else {
            resultado = cur;
        }
     return resultado
    })
    return resultado
  }


  console.log(longestNamedBook(books))
