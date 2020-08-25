"use strict";

var nome = 'rebeca';
var concatenacao = 'Olá' + nome + '!!!';
var template = " Ol\xE1 ".concat(nome, "!");
console.log(nome);
console.log(template); //Expressões

console.log("1 + 1 = ".concat(1 + 1)); //Função

var up = function up(texto) {
  return texto.toUpperCase();
};

console.log("Ei... ".concat(up('cuidado...'), "!!!"));
/* No template string dá para se colocar fórmulas, espaços em branco, quebra de linha
   e para se ter esse método é necessário utilizar o sinal da ''crase'' para poder
   dar certo. Também deve-se utilizar o sinal do '$' e as '{}' para fazer cálculos e exibí-los
   no console.
*/