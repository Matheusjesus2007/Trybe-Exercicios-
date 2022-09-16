const longestWord = (Frase) => {
let bigWord = '';
let tamanho = 0;
 for (let index = 0; index < Frase.split(' ').length; index += 1) {
      if(Frase.split(' ')[index].length > bigWord.length) {
        bigWord = Frase.split(' ')[index]
        tamanho = Frase.split(' ')[index].length
      }
    }
    console.log(`a maior palavra é ${bigWord} ela tem ${tamanho} letras`)
}

longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu');