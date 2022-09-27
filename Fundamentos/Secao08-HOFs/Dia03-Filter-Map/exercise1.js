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
  
  // Adicione o código do exercício aqui:


 const formatedBOoknames = books.map((livro) => {
return `${livro.name} ${livro.genre} ${livro.author.name}` 
  })



const newArray = [];
function nameAndAge (livros) {
    livros.map((livro) => {
    let currentIdade = 0;
    currentIdade = ((livro.releaseYear) - (livro.author.birthYear))
    newArray.push({age: currentIdade, author: livro.author.name})
    return newArray;
})
newArray.sort((a, b) => a.age - b.age)
return newArray;
}




function oldBooksOrdered(livros) {
const oldBooks = livros.filter((livro) => livro.releaseYear < 1962)

    oldBooks.sort((a, b) => a.releaseYear - b.releaseYear)
 return oldBooks
  }



  function fantasyOrScienceFictionAuthors(livros) {
   const ficFantasia = livros.filter((livro) => (livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia'))
   const nomeCurrent = ficFantasia.map((livro) => livro.author.name )
   nomeCurrent.sort()
    return nomeCurrent;   
  }


  function oldBooks(livros) {
    const oldBooks = livros.filter((livro) => livro.releaseYear < 1962)
    const nomeFilme = oldBooks.map((livro) => livro.name)
    return nomeFilme;
  }



  function authorWith3DotsOnName(livros) {
   const iniciais = livros.filter((livro) => livro.author.name.split('.').length - 1 === 3)
   return iniciais[0].name
}

console.log(authorWith3DotsOnName(books))

