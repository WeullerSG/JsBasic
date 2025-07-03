## prototype.findIndex( )

O método **findIndex( )** serve pra encontrar o índice (posição) do primeiro item do array que passa em um teste.

Você passa uma função, e o findIndex() vai rodar essa função pra cada item do array, na ordem.
Assim que achar o primeiro que der true, ele para e retorna o índice (a posição) desse item.

Se nenhum item passar no teste, ele retorna -1.

Exemplo:
```javascript
// 0  1  2  3  4
const array = [1, 3, 5, 6, 7];

primeiroPar = (arr) => {
  const result = arr.findIndex((arr) => arr % 2 === 0);
  console.log(`o primeiro numero par esta no index ${result} e esta na ${result + 1}° posição`);
};

primeiroPar(array); // Output: 3
```

Pensa no **findIndex( )** assim:

“Em que posição está o primeiro item que atende à condição?”