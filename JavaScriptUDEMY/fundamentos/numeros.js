const peso1 = 1.0 //Maneira de declarar um number
const peso2 = Number('2.0') //outra maneira de declarar um number

console.log(peso1)
console.log(peso2)
console.log(Number.isInteger(peso1)) //Dizer que tipo de Number é (inteiro ou não) retorna boolean
console.log(Number.isInteger(peso2))

const avaliacao01 = 9.871
const avaliacao02 = 6.871

const total = avaliacao01 * peso1 + avaliacao02 * peso2
const media = total / (peso1 + peso2)

console.log(media1.tofixed(2)) //O método 'tofixed' serve para colocar a quantidade de casas decimais na operação
console.log(media.toString) // 'to string' serve para converter o number em String1