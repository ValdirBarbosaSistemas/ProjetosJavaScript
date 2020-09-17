"use strict";

/*Primeiramente vamos entender o que é o HOISTING... Geralmente as linguagens de programação começam
a ler o código de cima pra baixo. No caso do HOISTING (que na tradução quer dizer levar pra cima ou algo do tipo)
voce pode declarar a variável depois da expressão, ou seja, ele vai 'içar' ou 'lançar' o código pra cima para 
fazer a leitura do mesmo. Isso geralmente acontece no tipo da variável 'var' Vejamos o exemplo abaixo... 
*/
console.log('a =', a); //impressão da expressão antes de ser chamada

var a = 2; // declaração da variável

console.log('a =', a); //neste caso na linha '6' a variável está como UNDERFINED, ou seja, ela não foi declarada MAS EXISTE