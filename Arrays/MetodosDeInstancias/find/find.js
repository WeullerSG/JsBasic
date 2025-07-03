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

