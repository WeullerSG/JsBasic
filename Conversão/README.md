# Conversion vs Coercion

| Conceito   | O que é                                                               | Tipo      | Exemplo                               |
| ---------- | --------------------------------------------------------------------- | --------- | ------------------------------------- |
| Conversion | Quando você muda o tipo de dado de forma explícita (intencionalmente) | Explícita | `String(123) → "123"`                 |
| Coercion   | Quando o JavaScript muda o tipo de dado automaticamente               | Implícita | `"5" * 2` → `10` (string vira number) |



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
