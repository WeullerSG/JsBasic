## prototype.map( )

O método **map()** serve pra criar um novo array, transformando os itens do array original um por um.

Você passa uma função, e o map() vai rodar essa função em cada item do array, na ordem certa, e montar um novo array com os resultados dessas transformações.

**Exemplos:**

ex1:
```javascript
const numeros = [1, 2, 3];
const dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6]
``` 

ex2:
```javascript
const array1 = [1, 4, 9, 16];

verificarPares = (array) => {
const map1 = array.map((x) => x * 2);
console.log(map1); 
}
verificarPares(array1); // [2, 8, 18, 32]
``` 

Pensa no **map( )** como um "transformador".
Você tem uma lista, aplica uma mudança em cada item, e o map( ) te devolve uma nova lista com os itens transformados.