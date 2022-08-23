

function palindromo (palavra) {
    let reverso = '';
    let word = '';


  for (index = palavra.length -1; index >= 0; index -=1) {
    reverso += palavra[index]
  }
  
  word = palavra
  
  if (reverso == word) {
    console.log('é palindromo')
    return true
  } 
    console.log('não é palindromo')
    return false
}


palindromo('erasda')
