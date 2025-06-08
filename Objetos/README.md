
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


  
 