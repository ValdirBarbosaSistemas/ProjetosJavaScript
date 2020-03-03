console.log(typeof Object) // Sabemos que vai ser uma função
console.log(typeof new Object)
// Neste caso o resultado será um Object, pois ele só é object a partir de uma instância

const cliente = function () {}
console.log(typeof cliente) // Saberemos que aqui se trata de uma função
console.log(typeof new cliente) // Neste caso será um Object 

class produto {}
console.log(typeof produto) // Resultado será função
console.log(typeof new produto()) // Resultado será Object