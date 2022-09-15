const testingScope = (escopo) => {
    let ifScope = '';
    let elseScope = '';
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope}o que estou fazendo aqui ? :O`);
  }

  testingScope(true);