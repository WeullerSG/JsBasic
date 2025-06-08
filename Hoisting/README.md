# Hoisting em JavaScript

**Hoisting** é um comportamento do JavaScript onde **as declarações de variáveis e funções "sobem" para o topo do código**, dentro do mesmo bloco ou função, **antes de o código ser executado**.

## Como isso funciona:

### Variáveis com `var`

Quando você usa `var`, **o nome da variável é levado para o topo**, mas o valor só é definido no lugar onde você escreveu.  
Ou seja, se você tentar usar a variável antes de dar um valor a ela, o resultado será `undefined`.

```javascript
console.log(x); // undefined
var x = 5;
`````
## Funções declaradas

Se você escrever uma função com `function`, o JavaScript leva o nome e o conteúdo da função para o topo.
Então, você pode usar a função **antes mesmo de declará-la no código.**

```javascript
digaOi(); // funciona

function digaOi() {
console.log('Olá!');
}
`````

## Variáveis com `let` e `const`
Essas também “sobem”, mas não podem ser usadas antes da linha em que foram declaradas.
Se tentar, vai dar erro. Elas ficam em algo chamado “zona temporal morta” até a linha onde são definidas.

```javascript
console.log(a); // ERRO!
let a = 10;
`````

## Resumo:

- `var:` sobe o nome, mas o valor fica onde você escreveu. Pode dar undefined.

- `function:` sobe tudo (nome e código). Pode chamar antes da declaração.

- `let e const:` não podem ser usadas antes da declaração. Dão erro.


# Tipos Primitivos em JavaScript

| Tipo        | Exemplo            | Descrição                                        |
| ----------- | ------------------ | ------------------------------------------------ |
| `string`    | `"Olá"` ou `'Oi'`  | Texto, cadeia de caracteres                      |
| `number`    | `10`, `3.14`, `-7` | Números inteiros ou decimais                     |
| `boolean`   | `true`, `false`    | Verdadeiro ou falso (lógico)                     |
| `undefined` | `undefined`        | Valor padrão de uma variável não inicializada    |
| `null`      | `null`             | Representa "nenhum valor" propositalmente        |
| `bigint`    | `123n`             | Para números inteiros muito grandes              |
| `symbol`    | `Symbol('id')`     | Valor único e imutável, usado como identificador |

``` javascript
let nome = "Maria";      // string
let idade = 25;          // number
let aprovado = true;     // boolean
let valor;               // undefined (não tem valor ainda)
let nada = null;         // null (intencionalmente vazio)
let numeroGrande = 9007199254740991n; // float (ponto flutuante)
let id = Symbol("id");   // symbol
````