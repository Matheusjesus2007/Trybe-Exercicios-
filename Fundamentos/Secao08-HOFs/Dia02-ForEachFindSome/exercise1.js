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



const findTheBook = (busca) => {
let resultado;

    busca.find( (busca) => {    
 if (busca.author.birthYear === 1947) {
   resultado = busca.author.name
    } 
})
return resultado;
}

console.log(findTheBook(books))

function smallerName(buscaMinBook) {
    let nameBook;
    let minBook = Number.MAX_VALUE;

    buscaMinBook.forEach(buscaMinBook => {
       if(buscaMinBook.name.length < minBook) {
        nameBook = buscaMinBook.name
        minBook = buscaMinBook.name.length
       }
    })  

    return nameBook;
  }

  console.log(smallerName(books))



/* 
  function getNamedBook(busca26) {
   let resultado;

   busca26.find( (busca26) => {    
 if (busca26.name.length === 26) {
   resultado = busca26
    } 
})
return resultado;
  }

  console.log(getNamedBook(books))


  
  
function booksOrderedByReleaseYearDesc(decrescente) {
    decrescente.sort((a, b) => b.releaseYear - a.releaseYear)
    return books
  }

  
  console.log(booksOrderedByReleaseYearDesc(books))  */

  
 
 const everyoneWasBornOnSecXX = (buscaXX) => {
        return buscaXX.author.birthYear > 1901 && buscaXX.author.birthYear < 2000; 
 }

 console.log(books.every(everyoneWasBornOnSecXX))

 

const someBookWasReleaseOnThe80s = (buscaXX) => {
    return buscaXX.releaseYear >= 1980 && buscaXX.releaseYear <= 1989;   
}
console.log(books.some(someBookWasReleaseOnThe80s))

let nascimentos = [];
let repetidos = {}


const authorUnique = (buscaRepetidos) => { buscaRepetidos.forEach((buscaRepetidos) => {
  nascimentos.push(buscaRepetidos.author.birthYear)
})
nascimentos.forEach((repetido) => {
repetidos[repetido] = (repetidos[repetido] || 0) +1;
})   

const maxVal = Math.max(...Object.values(repetidos))
if (maxVal > 1) {
    return false
}
return true
}

console.log(authorUnique(books))
