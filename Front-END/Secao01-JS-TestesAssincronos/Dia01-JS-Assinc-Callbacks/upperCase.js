const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  uppercase('meu nome é matheus', (recebo) =>{
    console.log(recebo)
  } )