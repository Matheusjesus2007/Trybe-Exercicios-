const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  

  function containsA (nomes) {
    let total = 0;
    nomes.reduce((acc, cur)=> acc += cur).split('').reduce((acc1, cur) => {
        if(cur === 'a' || cur === 'A') {
            total += 1
        }   
        return total 
        }, 0)
  return total
}
  console.log(containsA(names))