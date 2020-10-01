"use strict";

function getInteiroAleatorio(min, max) {
  var valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

var opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorio(-1, 10);
  console.log("Op\xE7\xE3o escolhida foi ".concat(opcao, "."));
}

console.log("Até a próxima");