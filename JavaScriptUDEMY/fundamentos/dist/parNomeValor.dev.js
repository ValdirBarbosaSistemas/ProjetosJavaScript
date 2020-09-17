"use strict";

// par nome/valor
var saudacao = 'Opa'; //Contexto léxico 1

function ex() {
  var saudacao = 'Faaaala'; //Contexto léxico 2

  return saudacao;
} //Objetos são grupos aninhados de pares nome/valor


var cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua muito legal',
    numero: 123
  }
};
console.log(saudacao);
console.log(ex());
console.log(cliente);