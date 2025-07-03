const array = [1, 2, 3, 4];

somaValoresArr = (arr) => {
  const valorInicial = 0;
  const somaTudo = arr.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    valorInicial
  );
  console.log(somaTudo);
};

somaPares = (arr) => {
    const pares = arr.reduce((acumulador, valorAtual) =>
        valorAtual % 2 === 0 ? (acumulador += valorAtual) : acumulador, 0);
    console.log(pares);
}
somaPares(array); //6

somaValoresArr(array); //10

