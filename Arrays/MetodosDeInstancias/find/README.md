## prototype.find( )

O **find( )** serve pra procurar o primeiro item de um array que passe em um teste.

Você passa uma função pra ele, e ele vai rodando essa função pra cada item, até encontrar um que retorne true. Quando encontra, ele para na hora e devolve esse item.

Se nenhum item passar no teste, ele retorna undefined.
Exemplo:

ex1:

```javascript
const numeros = [5, 12, 8, 130, 44];
const encontrado = numeros.find((n) => n > 10);
console.log(encontrado); // 12
```
ex2:
```javascript
const alunos = [
    {id : 1, nome: 'João', nota: 7.5},
    {id : 2, nome: 'Maria', nota: 9.0},
    {id : 3, nome: 'Pedro', nota: 6.5},
]

ProcuraAluno = (obj, id) => {
    let aluno = obj.find((aluno) => aluno.id === id);
    console.log(aluno);
}
ProcuraAluno(alunos, 2); // { id: 2, nome: 'Maria', nota: 9 }
```

Pensa no find() como se estivesse perguntando:

"Qual é o primeiro item da lista que atende essa condição?"

Ele te entrega só um — o primeiro que bater com a regra.

