//FUNCÃO ARRAY

function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] //Aqui ele esta trocando de lugar
    const valor = Math.random() * (max * min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))