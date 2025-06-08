let frutas = ["maça", "banana", "laranja"];

console.log(frutas[0]);
console.log(frutas[1]);

frutas[1] = "uva";

frutas.push("morango"); // adiciona um elemento ao final do array
frutas.unshift("melancia"); // adiciona um elemento no início do array

console.log(frutas); // [ 'melancia', 'maça', 'uva', 'laranja', 'morango' ]

frutas.pop(); // remove o último elemento do array
frutas.shift(); // remove o primeiro elemento do array

//Percorre valor
for( let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Percorre valor com forEach
console.log("Percorrendo com forEach");
frutas.forEach(function(frutas) {
    console.log(frutas);
})

//usando o map
console.log("Percorrendo com map");
let frutasMaiusculas = frutas.map(function(frutas) {
    return frutas.toUpperCase();
})
// console.log(frutasMaiusculas); // [ 'MAÇA', 'UVA', 'LARANJA' ]

frutasMaiusculas.forEach(function(frutasMaiusculas){
    console.log(frutasMaiusculas);
})