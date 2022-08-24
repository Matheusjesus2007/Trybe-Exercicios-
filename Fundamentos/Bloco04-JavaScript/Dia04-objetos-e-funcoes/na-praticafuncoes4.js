function maiorArray (nomes = []) {
    let maiorNome = '';

    for (index = 0; index < nomes.length; index +=1){
        if (nomes[index].length > maiorNome.length) {
            maiorNome = nomes[index]
        }
    }
    console.log(maiorNome)
}

maiorArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])