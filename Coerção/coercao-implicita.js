// String + number
console.log("10" + 5); // "105"

//String * Number
console.log("10" * 5); // 50

//Boolean + Number
console.log(true + 1);  // 1 + 1 = 2
console.log(false + 1); // 0 + 1 = 1

// Comparações com == (não estrito)
console.log(0 == false);            // true
console.log("1" == 1);              // true
console.log(null == undefined);    // true
console.log("1" === 1); // false

// Cuidado com os resultados inesperados causados pela coerção implícita
console.log([] == false);          // true
console.log("" == 0);              // true
console.log([] == "");             // true