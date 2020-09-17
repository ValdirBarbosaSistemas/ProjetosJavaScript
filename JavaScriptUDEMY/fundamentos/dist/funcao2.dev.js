"use strict";

// Armazenando uma função em uma VARIÁVEL
var imprimirSoma = function imprimirSoma(a, b) {
  //Função anônima
  console.log(a + b);
};

imprimirSoma(2, 3); //Armazenando uma ARROW FUNCTION em uma variável

var soma = function soma(a, b) {
  return a + b;
}; //A funcão arrow é simplismente 'trocar' o nome FUNCTION pelo símbolo '=>'


console.log(soma(2, 3)); //RETORNO IMPLÍCITO COM ARROW FUNCTION

var subtracao = function subtracao(a, b) {
  return a - b;
}; // neste caso como é uma sentença de código de apenas uma linha, não é necessário as '{}'


console.log(subtracao(2, 3)); //Caso seja somente 1 parâmetro, pode-se diminuir o arrow function ainda mais....

var imprimir2 = function imprimir2(a) {
  return console.log(a);
};

imprimir2('Legaaaaaal!!!');