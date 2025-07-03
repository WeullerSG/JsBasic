## prototype.filter( )

O método **filter( )** cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

Você passa uma função pra ele, e essa função é chamada pra cada item do array.
Se o item passar no teste (ou seja, a função retornar algo verdadeiro), ele entra no novo array.
Se não passar, é ignorado.

**Exemplo:**

ex1:

```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4]
```

ex2:
```javascript
const words = ["spray", "elite", "exuberant", "destruction", "present"];

letters = (array, maiorOumenor, amount) => {
    if(maiorOumenor === "maior"){
    const result = array.filter((word) => word.length > amount);
    console.log(result);
    } else if(maiorOumenor === "menor"){
        const result = array.filter((word) => word.length < amount);
        console.log(result);
    }
}

letters(words, "menor", 6); // returns [ 'spray', 'elite' ]
letters(words, "maior", 6); // returns [ 'exuberant', 'destruction', 'present' ]
```