"use strict";

//novo recurso do ES2015
//OBJETO
var pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}; //O destructuring serve para extrair ou retirar alguma coisa da estrutura. (Objeto, array entre outros).

var nome = pessoa.nome,
    idade = pessoa.idade; // Estou extraindo/retirando de 'Pessoa' os atributos nome e idade do objeto

console.log(nome, idade);
var n = pessoa.nome,
    i = pessoa.idade; // Outra forma de fazer o destructuring

console.log(n, i); //E se tirar-mos um atributo que não existe? Neste caso o valor sairá UNDERFINED

var sobrenome = pessoa.sobrenome,
    bemHumorada = pessoa.bemHumorada;
console.log(sobrenome, bemHumorada);
var _pessoa$endereco = pessoa.endereco,
    logradouro = _pessoa$endereco.logradouro,
    numero = _pessoa$endereco.numero,
    cep = _pessoa$endereco.cep; // Ele irá extrair as informações de endereco

console.log(logradouro, numero, cep);