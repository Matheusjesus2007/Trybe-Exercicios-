const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
    // bornIn: nascido em
];

const filterPeopli = (people) => {
   let resultado = []; 
   let australianas = people.filter((person) => person.nationality === 'Australian')
   australianas.filter((australiana) => australiana.bornIn >= 1901 && australiana.bornIn <= 2000).forEach((pessoa) => {
   let {name, nationality } = pessoa
   resultado.push(`Essa é ${name} nascida na ${nationality} no seculo 20`)
   return resultado
})
  return resultado
} 


console.log(filterPeopli(people))