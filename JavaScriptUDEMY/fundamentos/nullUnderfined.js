let valor //variável não inicializada
console.log(valor)

valor = null //ausência de valor, ou seja, o valor NÃO EXISTE
console.log(valor)

const produto = {}
console.log(produto.preco) //Valor UNDERFINED, pois o atributo preco não foi declarado
console.log(produto) //Irá mostrar um objeto vazio

produto.preco = 3.50
console.log(produto)