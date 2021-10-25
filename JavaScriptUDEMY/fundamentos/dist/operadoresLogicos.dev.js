"use strict";

function compras(trabalho1, trabalho2) {
  var comprarSorvete = trabalho1 || trabalho2;
  var comprarTv50 = trabalho1 && trabalho2; //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwase XOR

  var comprarTv32 = trabalho1 != trabalho2; //outra maneira de fazer o OU EXCLUSIVO

  var manterSaudavel = !comprarSorvete; //operador UNÁRIO

  return {
    comprarSorvete: comprarSorvete,
    comprarTv50: comprarTv50,
    comprarTv32: comprarTv32,
    manterSaudavel: manterSaudavel
  };
}

console.log(compras(true, true));