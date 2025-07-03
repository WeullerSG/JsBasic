## prototype.reduce( )

O **reduce( )** é um método que pega todos os itens de um array e transforma em um único valor.
Esse valor final pode ser um número, uma string, um objeto, ou o que você quiser!

Como ele funciona?

Você passa uma função de callback pro reduce(), e essa função é chamada pra cada item do array, acumulando um resultado.

Essa função recebe 4 coisas:

- acumulador – o valor que vai sendo guardado a cada passo.

- valorAtual – o item atual do array.

- index – a posição atual no array.

- array – o array completo.

Você também pode (e deve) passar um valor inicial pro acumulador.