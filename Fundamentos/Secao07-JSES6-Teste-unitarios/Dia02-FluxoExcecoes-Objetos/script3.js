const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  const addTurnoNoite = (lesson2) => {
    addNoite = {
        turno: 'noite',
    }
  Object.assign(lesson2, addNoite);
  } 

  addTurnoNoite(lesson2); 


/*   const ListKeys = (obj) => {
   
    console.table( Object.keys(obj))
  }

  ListKeys(lesson2) */


/*     const tamanhoObj = (obj) => {
        console.log(Object.keys(obj).length)
    }  

    tamanhoObj(lesson2); */


/* const ListValue = (obj) => {
   
    console.table( Object.values(obj))
  }

  ListValue(lesson3)  */

/*   const allLessons = {}

  Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3})
 */
 
/* const totalEstudantes = (allLessons) => {
  let resultado = (allLessons.lesson1.numeroEstudantes) + (allLessons.lesson2.numeroEstudantes) + (allLessons.lesson3.numeroEstudantes);
  console.log(resultado)

}
totalEstudantes(allLessons); */

/* const valorPosition = (obs, position) => {
 let resultado = Object.values(obs)[position];
    console.log(resultado);
}

valorPosition(lesson2, 0)
 */

let par = [];

const verificaExiste = (obj, chave, valor) => {
    par.push(chave, valor)
    par = par.toString();
    let resultado = '';

    for (let index = 0; index < Object.keys(obj).length; index +=1) {
    let parObj = Object.entries(obj)[index]
    parObj = parObj.toString();
    (par === parObj) ? resultado = 'Esse Par Chave/Valor já existe' : null;
 }

 console.log(resultado.length > 0)    
  
}
verificaExiste(lesson3, 'materia', 'Maria Clara');