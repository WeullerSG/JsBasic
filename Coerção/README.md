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