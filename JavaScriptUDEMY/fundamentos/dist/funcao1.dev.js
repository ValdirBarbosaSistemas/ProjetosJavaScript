"use strict";

//Função SEM RETORNO
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // o outro valor como irá ser UNDERFINED, irá mostrar na tela o NaM (Not a Number)

imprimirSoma(2, 3, 4, 5, 6, 7, 8); // Neste caso irá somar os 2 primeiros e os demais irá IGNORAR
//Função COM RETORNO

function soma(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
}

console.log(soma(2, 3)); // Neste caso o resultado sairá 5

console.log(soma(2)); //Neste caso como o b vale 0, o resultado sairá na tela ''2''