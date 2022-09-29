
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  const estacao = {spring, summer, autumn, winter} = yearSeasons
  const mes = [...spring, ...summer, ...autumn, ...winter] 
  console.log(mes)