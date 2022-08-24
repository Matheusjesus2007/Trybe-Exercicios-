function wordFim (word, ending) {
    let palavra = word.substr(-ending.length)
      if (palavra == ending){
        return true, console.log(true)
        
      } 

      return false, console.log(false)
    
}

wordFim('trybe', 'be')


