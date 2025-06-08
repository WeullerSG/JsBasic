# O que é um Array
Um `array` guarda `vários elementos`, que podem ser de `qualquer tipo`: números, strings, objetos, até outros arrays.

```javascript
let frutas = ["maçâ", "banana", "laranja"];
```
- O array `frutas` tem 3 elementos.

- Cada intem tem um índice começando do 0.

| Índice | Valor     |
| ------ | --------- |
| 0      | "maçâ"    |
| 1      | "banana"  |
| 2      | "laranja" |

## Acessando os valores
```javascript
console.log(frutas[0]); // "maçâ"
console.log(frutas[2]); // "laranja"
```
## Alterando os valores
```javascript
frutas[1] = "uva"; // Troca banana por uva
```
## Adicionando novos valores
```javascript
frutas.push("morango"); // Adiciona no final
frutas.unshift("melancia"); // adiciona no início
```
## Removendo valores
```javascript
frutas.pop();    // remove o último
frutas.shift();  // remove o primeiro
```
## Percorrendo os valores
```javascript
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]); // imprime cada valor
}
```
Ou com `forEach`
```javascript
frutas.forEach(function(fruta) { 
  console.log(fruta); // imprime cada valor
});
```

# Resumo 
- Um `array` é uma `lista ordenada` de valores que podem ser de qualquer tipo.
- Você acessa os itens pelo `índice` (posição), começando do 0.
- Pode conter qualquer tipo de dado.
- Possui muitos métodos úteis: `push()`, `pop()`, `length`, `map()`, `filter()`, `etc`.