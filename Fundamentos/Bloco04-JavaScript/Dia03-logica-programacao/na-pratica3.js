let skills = ['java', 'javascript', 'python', 'html', 'css',];
let maior = 0;
let menor = Number.MAX_VALUE;

  for (index = 0; index < skills.length; index +=1) {
    if (skills[index].length > maior) {
    maior = skills[index].length
    } 

    if (skills[index].length < menor) {
    menor = skills[index].length
    }

    }
  
console.log(maior)
console.log(menor)

