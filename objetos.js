let pessoa = {
    nome: "Maria",
    idade: 25,
    sobrenome: "Silva"
};

//acessando os valores
console.log("Nome:", pessoa.nome); // Nome: Maria
console.log("Idade:", pessoa.idade); // Idade: 25

//adicionando novas propriedades
pessoa.profissao = "Desenvolvedora" ; // adiciona a propriedade profissao com valor Desenvolvedora
console.log("Profissão:", pessoa.profissao);

// alterandmo valores
pessoa.idade = 26; // altera a idade para 26
console.log("Nova idade:", pessoa.idade); // Idade: 26

// Removendo propriedades
delete pessoa.profissao; // remove a propriedade profissao
console.log("Profissão:", pessoa.profissao); // undefined

// Objetos podem conter outros objetos

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    acessorios: [
        "ar condicionado",
        "direção hidráulica",
        "Airbag"
    ],
    dono: {
        nome: "João",
        idade: 30
    },
    ligar: function() {
        console.log("O carro está ligado");
    }
};

carro.ligar(); // O carro está ligado
console.log("Acessorio:", carro.acessorios[0]); // Acessorio: ar condicionado
console.log("Dono:", carro.dono.nome); // Dono: João