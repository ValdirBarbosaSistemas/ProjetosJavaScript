"use strict";

var notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (i in notas) {
  console.log(i, notas[i]);
}

var pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 29,
  peso: 64
};

for (atributo in pessoa) {
  console.log("".concat(atributo, " = ").concat(pessoa[atributo]));
}