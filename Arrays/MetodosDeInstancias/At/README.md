## Prototype.at()

O método **at()** recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores **positivos ou negativos**. Valores negativos contam apartir do último item do array.

Não há nada de errado em usar colchetes, como em `array[0]` para acessar o primeiro item. Mas, em vez de usar `array.length - 1` para pegar o último item, você pode usar `array.at(-1),` que é mais simples.

```javascript
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Saida: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Saida: "An index of -2 returns 130"

```