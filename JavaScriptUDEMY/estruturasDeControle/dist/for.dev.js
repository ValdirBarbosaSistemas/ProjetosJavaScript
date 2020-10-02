"use strict";

//Usando o while
var contador = 1;

while (contador <= 10) {
  console.log("Contador: ".concat(contador));
  contador++;
}
/*usando o FOR (O FOR É IGUAL AO JAVA OU SEJA, PRIMEIRO DECLARA A VARIÁVEL, DEPOIS A EXPRESSAO
E DEPOIS O INCREMENTO SEPARADOS POR ';')*/


for (var i = 1; i <= 10; i++) {
  console.log("Contador do FOR: ".concat(i));
}

var notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (var _i = 0; _i < notas.length; _i++) {
  console.log("For com array: ".concat(notas[_i]));
}