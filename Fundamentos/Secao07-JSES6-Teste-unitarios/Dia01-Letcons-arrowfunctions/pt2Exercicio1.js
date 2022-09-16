const factorial = (fatorial) => {
    let result = fatorial;
    for (let i = 1; i < fatorial; i++) {
        result *= i;
    }

    return result;
}

console.log(`Esse é o fatorail ${factorial(4)}`);
console.log(factorial(5)); 

