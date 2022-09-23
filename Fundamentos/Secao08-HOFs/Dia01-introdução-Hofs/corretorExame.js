const comparador = (gabarito, respostaAluno) => {
let pontuacao = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        if (gabarito[i] === respostaAluno[i]) {
            pontuacao += 1 
        } else if (respostaAluno[i] === 'N.A') {
            pontuacao;
        } else {
            pontuacao -= 0.5;
        }
    }
    return pontuacao;
}


const corretor = (callback) => {
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
return callback(RIGHT_ANSWERS, STUDENT_ANSWERS);

}


console.log(corretor(comparador))

