//FUNÇÃO OBJETO

function rand({min = 0, max = 1000}) { // USANDO OPERADOR DESTRUCTURING
    const valor = Math.random() * (max * min) + min
    //Aqui acima ele vai mostrar os numeros de forma aleatória entre '0' e '1000' 
    return Math.floor(valor)
}

const obj = {
    max: 50,
    min: 40
}

console.log(rand(obj))