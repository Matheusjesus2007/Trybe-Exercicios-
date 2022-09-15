function substituaX (nome) {
    let frase = 'Tryber x aqui!'
    frase = frase.replace('x', nome)
    minhasSkills(frase)
    
}

substituaX('Matheus');
substituaX('Rafael');

function minhasSkills(frase) {
    const skills = ['CSS', 'HTML', 'JS'];
    let resultado = `${frase} Minhas três principais habilidades são: ${skills}`
    console.log(resultado)
}