  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {

    oddsAndEvens.sort(function(a,b) {
        if (a > b) return 1;
        if (a < b) return -1;
      })
    }

  sortOddsAndEvens();
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`)