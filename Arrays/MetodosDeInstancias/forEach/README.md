## forEach()

O método `forEach()` serve para executar uma função em cada item de um array. Ele passa por todos os elementos, um de cada vez, e roda a função para cada um.

Por exemplo, se você tiver um array de letras, pode usar forEach() para mostrar cada letra no console.

```javascript
const letras = ['a', 'b', 'c', 'd', 'e'];
letras.forEach(letra => {
    console.log(letra);
    });
// Saída: a, b, c, d, e
```

O `forEach()` não cria um novo array e não retorna nada. Ele só executa a função para cada item.

Também é importante saber que o `forEach()` **não para no meio**. Ele sempre vai até o fim do array. Se precisar parar antes, é melhor usar um `for` ou outro método.

Se você adicionar itens no array enquanto o `forEach()` está rodando, esses novos itens não serão processados.

O `forEach()` é útil quando você quer fazer algo para cada item, como mostrar uma mensagem, sem precisar criar um novo array.

```javascript
const frutas = ["maçã", "banana", "laranja"];

frutas.forEach((fruta) => {
  console.log("Eu gosto de " + fruta);
});
// Saída: Eu gosto de maçã, Eu gosto de banana, Eu gosto de laranja.
```