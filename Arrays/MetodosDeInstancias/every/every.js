// const limite = (valores) => valores < 40;


const array1 = [1, 30, 39, 29, 10, 13, 40];
const array2 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(limite));
// console.log(array2.every(limite));

verificaValores = (array, valor) => {
    const limite = (valores) => valores < valor;
    if (array.every(limite) == true) {
        console.log("Todos os valores estão abaixo de 40");
    }else{
        console.log("Existem valores acima de 40");
    }
}
verificaValores(array1, 40);
verificaValores(array2, 40);