"use strict";

var numeros = [2, 3, 5, 12, 31, 11, 4];

var soma = function soma(ac, valor) {
  return ac + valor;
}; //Arrow Function
//const mult = (ac, valor) => ac * valor;
//const div = (ac, valor) => ac / valor;


var somarDeTodosOsElementos = numeros.reduce(soma, 0);
console.log(somarDeTodosOsElementos); //REDUCE soma todos os elementos do array. Ele recebe uma variável e um iterador
//PARECIDO COM JAVA