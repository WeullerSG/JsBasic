// 0  1  2  3  4
const array = [1, 3, 5, 6, 7];

primeiroPar = (arr) => {
  const result = arr.findIndex((arr) => arr % 2 === 0);
  console.log(`o primeiro numero par esta no index ${result} e esta na ${result + 1}° posição`);
};

primeiroPar(array); // Output: 3
