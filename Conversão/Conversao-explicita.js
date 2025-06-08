// Convertendo para string
let numero = 123;
console.log(String(numero)); // "123"
console.log(typeof String(numero)); // string

let booleano = true;
console.log(String(booleano)); // "true"

// Convertendo para number
let texto = "456";
console.log(Number(texto)); // 456
console.log(typeof Number(texto)); // number

let invalido = "abc";
console.log(Number(invalido)); // NaN

// Convertendo para boolean
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(""));       // false
console.log(Boolean("texto"));  // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false

// usando parseInt e parseFloat
let valor = "3.14"
console.log(parseInt(valor)); // 123
console.log(parseFloat(valor)); // 123.45

let outroValor = "10 anos";
console.log(parseInt(outroValor)); // 10
console.log(Number(outroValor)); // NaN

