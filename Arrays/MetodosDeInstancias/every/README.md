## prototype.every()

O método **every( )** testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.

**every** é um comando do JavaScript que verifica se todos os itens de um array passam em um teste.

Você passa uma função pra ele, e ele vai rodar essa função em cada item do array.
Se todos os itens passarem, ele retorna true.
Se um só falhar, ele já para e retorna false.

Por exemplo:

ex1:

```javascript
const numeros = [2, 4, 6];
const todosSaoPares = numeros.every((n) => n % 2 === 0);
console.log(todosSaoPares); // true
```
ex2:
```javascript
const array1 = [1, 30, 39, 29, 10, 13, 40];
const array2 = [1, 30, 39, 29, 10, 13];

verificaValores = (array, valor) => {
    const limite = (valores) => valores < valor;
    if (array.every(limite) == true) {
        console.log("Todos os valores estão abaixo de 40");
    }else{
        console.log("Existem valores acima de 40");
    }
}
verificaValores(array1, 40); // true
verificaValores(array2, 40); // false
```
Aqui, ele checou se todos os números são pares. Como são, deu true.

Mais alguns detalhes:

- Ele não muda o array original.

- Ele ignora espaços vazios (itens que nem existem no array).

- Se o array estiver vazio, ele retorna true (porque nada está errado).

