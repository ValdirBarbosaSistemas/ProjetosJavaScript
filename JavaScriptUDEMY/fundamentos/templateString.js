const nome = 'rebeca'
const concatenacao = 'Olá' + nome + '!!!'
const template = ` Olá ${nome}!`
console.log(nome)
console.log(template)

//Expressões

console.log(`1 + 1 = ${1+1}`)

//Função
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado...')}!!!`)

/* No template string dá para se colocar fórmulas, espaços em branco, quebra de linha
   e para se ter esse método é necessário utilizar o sinal da ''crase'' para poder
   dar certo. Também deve-se utilizar o sinal do '$' e as '{}' para fazer cálculos e exibí-los
   no console.
*/