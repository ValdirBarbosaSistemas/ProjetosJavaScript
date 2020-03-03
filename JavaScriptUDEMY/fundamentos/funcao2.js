// Armazenando uma função em uma VARIÁVEL
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma ARROW FUNCTION em uma variável

const soma = (a, b) => {
    return a + b
}
//A funcão arrow é simplismente 'trocar' o nome FUNCTION pelo símbolo '=>'
console.log(soma(2, 3))

//RETORNO IMPLÍCITO COM ARROW FUNCTION

const subtracao = (a, b) => a - b
// neste caso como é uma sentença de código de apenas uma linha, não é necessário as '{}'
console.log(subtracao(2, 3))

//Pode-se diminuir o arrow function ainda mais....
const imprimir2 = a => console.log(a)
imprimir2('Legaaaaaal!!!')