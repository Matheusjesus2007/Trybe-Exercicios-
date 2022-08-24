function soma (n) {
    let resultado = 0;
    for (index = 0; index <= n; index +=1) {
        resultado += index;
    }
    console.log(resultado)
}

soma(7)