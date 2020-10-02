"use strict";

function getInteiroAleatorio(min, max) {
  var valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

var opcao = 0;

do {
  opcao = getInteiroAleatorio(-1, 10);
  console.log("Op\xE7\xE3o escolhida foi ".concat(opcao, "."));
} while (opcao != -1);

console.log("Até a próxima");