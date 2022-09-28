const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

let resultado = [];

const studentAverage =  students.map((student, index) => {
   let mediaStudantes = []
   grades.map((nota) => mediaStudantes.push(nota.reduce((acc , cur) => acc + cur) / nota.length))  
   resultado = {name: student, average: mediaStudantes[index]}
   return resultado
})

console.log(studentAverage)
