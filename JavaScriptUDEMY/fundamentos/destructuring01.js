//novo recurso do ES2015
//OBJETO
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//O destructuring serve para extrair ou retirar alguma coisa da estrutura. (Objeto, array entre outros).

const {nome,idade} = pessoa // Estou extraindo/retirando de 'Pessoa' os atributos nome e idade do objeto
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Outra forma de fazer o destructuring
console.log(n, i)

//E se tirar-mos um atributo que não existe? Neste caso o valor sairá UNDERFINED

const {sobrenome, bemHumorada} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa // Ele irá extrair as informações de endereco
console.log(logradouro, numero, cep)