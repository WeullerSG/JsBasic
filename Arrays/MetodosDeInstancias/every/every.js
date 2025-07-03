const array1 = [1, 30, 39, 29, 10, 13, 40];
const array2 = [1, 30, 39, 29, 10, 13];

verificaValores = (array, valor) => {
    const limite = (valores) => valores < valor;
    if (array.every(limite) == true) {
        console.log("Todos os valores estão abaixo de 40");
    }else{
        console.log("Existem valores acima de 40");
    }
}
verificaValores(array1, 40); // true
verificaValores(array2, 40); // false


