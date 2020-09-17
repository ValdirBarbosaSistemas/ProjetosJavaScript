"use strict";

var funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2](); //Aqui ele irá imprimir o valor 10

funcs[8](); //Aqui também irá imprimir o valor 10
//ERRO HISTÓRICO QUE OCORRE NO JAVASCRIPT