function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur)
}

console.log(sum(1,2,3,5 ,6 ))