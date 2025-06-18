             //  0  1  2  3   4
             // -5 -4 -3  -2 -1
const numeros = [1, 2, 5, 10, 8];

somaValores = (a, b) => {
console.log(numeros.at(a) + numeros.at(b));
}

somaValores(0, -1);
// return 9
somaValores(1, -3);
// return 7
somaValores(2, 3)
// return 15
somaValores(-4, -1);
// return 10



