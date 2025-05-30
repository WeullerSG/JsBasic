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
# Oque é um objeto

Um objeto representa um objeto real ou falso, e você pode organizar informações relacionadas

`Sintaxe Básica:`
```javascript
let pessoa = {
nome: "Maria",
idade: 25,
profissao: "Desenvolvedora"
};
````
`Neste exemplo:`

- `pessoa` é o objeto.

- `nome`, `idade` e `profissao` são as propriedades do objeto.

- `"Maria"`, `25` e `"Desenvolvedora"` são os valores das propriedades.

## Acessando valores
```javascript
console.log(pessoa.nome); // imprime "Maria"
console.log(pessoa.idade); // imprime 25
```
## Adicionando propriedades ou alterando
```javascript
pessoa.sobrenome = "Silva"; // adiciona
pessoa.idade = 26; // altera
```
## Removendo propriedades
```javascript
delete pessoa.profissao; // remove
```
## Objetos também podem conter:
- `Outros objetos`

- `Arrays`

- `Funções`(chamadas de métodos dentro de objetos)
```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ligar: function() {
    console.log("Carro ligado!");
  }
};

carro.ligar(); // Carro ligado!

```
#  Resumo
- `Um objeto guarda dados em forma de chave: valor.`

- `Objeto é muito usado para representar estruturas complexas.`

- `Objetos são mutáveis.`(você pode alterar depois de criá-los)

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
  
 # Conversion vs Coercion

| Conceito   | O que é                                                               | Tipo      | Exemplo                               |
| ---------- | --------------------------------------------------------------------- | --------- | ------------------------------------- |
| Conversion | Quando você muda o tipo de dado de forma explícita (intencionalmente) | Explícita | `String(123) → "123"`                 |
| Coercion   | Quando o JavaScript muda o tipo de dado automaticamente               | Implícita | `"5" * 2` → `10` (string vira number) |

## Coercion (Coerção Implícita)

O `JavaScript faz isso automaticamente` em algumas situações, geralmente quando está comparando ou operando valores de tipos diferentes.
```javascript
console.log("5" + 1); // "51" → string + number vira string
console.log("5" * 2); // 10 → string vira number automaticamente
console.log(true + 1); // 2 → true vira 1
console.log(false == 0); // true → coerção na comparação
```

- Prefira `conversion explícita` para evitar bugs e tornar o código mais claro.

- Evite confiar em `coerção implícita`, pois pode gerar resultados inesperados.


# Implicit Type Casting (Coerção de Tipo Implícita)

**Implicit Type Casting**, também conhecido como **Coerção de Tipo Implícita**, é quando o JavaScript **converte automaticamente** um valor de um tipo para o outro **sem você pedir**.
Isso geralmente acontece durante **operações entre tipos diferentes**(ex: string + number, boolean + number, etc.).
  ## Exmplos
  - 1. **String + number**
  
```javascript
console.log("10" + 5); // "105"
```
  Aqui, o número `5` é convertido automaticamente para a string `"5"`, e o resultado é a concatenação: `"10" + "5"` → `"105"`.

  - 2. **String * Number**
  
```javascript
console.log("10" * 2); // 20
```
  Neste caso, a string `"10"` é convertida para o número `10`, e a multiplicação é feita normalmente.

- 3. **Boolean + Number**

```javascript
console.log(true + 1);  // 2
console.log(false + 1); // 1
```
O `true` é convertido para `1` e `false` para `0`. Então:

 `true + 1` é igual a `1 + 1` → `2`

 `false + 1` é igual a `0 + 1` → `1`
  
- 4. **Comparações com == (não estrito)**
```javascript
console.log(0 == false);  // true
console.log("1" == 1);    // true
console.log(null == undefined); // true
```
O operador `==` converte os dois lados para o mesmo tipo antes de comparar. Isso pode levar a resultados inesperados.

## !! Cuidado !!
Essa coerção implícita pode gerar **bugs difíceis de identificar**, por isso é **melhor usar o `===` (igualdade estrita)**, que **não faz conversão de tipos:**
```javascript
console.log("1" === 1); // false (tipos diferentes)
```

# Explicit Type Casting (Conversão de Tipo Explícita)

**Explicit Type Casting (ou conversão explícita de tipo)** é quando **você mesmo converte um valor de um tipo para outro de forma intencional**, usando funções ou métodos.

##  Principais formas de conversão
- 1. Para String
   
Você pode usar `String()`, `.toString()` ou concatenar com `""`.
```javascript
String(123);        // "123"
(123).toString();   // "123"
123 + "";           // "123"
```
- 2. Para Number
 
Use `Number()`, `parseInt()` ou `parseFloat()`.
 ```javascript
Number("456");       // 456
parseInt("42");      // 42
parseFloat("3.14");  // 3.14
```
- 3. Para Boolean
  
Use `Boolean()` para converter qualquer valor em `true` ou `false`.
 ```javascript
Boolean(0);         // false
Boolean(1);         // true
Boolean("");        // false
Boolean("hello");   // true
```
## Tabela de resumo

| Valor Original | `String()`    | `Number()` | `Boolean()` |
| -------------- | ------------- | ---------- | ----------- |
| `123`          | `"123"`       | `123`      | `true`      |
| `"456"`        | `"456"`       | `456`      | `true`      |
| `""`           | `""`          | `0`        | `false`     |
| `null`         | `"null"`      | `0`        | `false`     |
| `undefined`    | `"undefined"` | `NaN`      | `false`     |
| `true`         | `"true"`      | `1`        | `true`      |
