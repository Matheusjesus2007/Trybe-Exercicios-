
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      try {
      if(value1 > 0 && value2 > 0) {
      const result = Number(value1) + Number(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    } else{
        throw new Error('Os valores precisam ser maior que ZERO')
    }
} catch (erro) {
    document.getElementById('result').innerHTML = (erro.message);
}
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
