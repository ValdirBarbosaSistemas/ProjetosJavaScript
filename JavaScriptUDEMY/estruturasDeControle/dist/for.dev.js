"use strict";

//Usando o while
var contador = 1;

while (contador <= 10) {
  console.log("Contador: ".concat(contador));
  contador++;
}
/*usando o FOR (O FOR É IGUAL AO JAVA OU SEJA, PRIMEIRO DECLARA A VARIÁVEL, DEPOIS A EXPRESSAO
E DEPOIS O INCREMENTO SEPARADOS POR ';')*/


for (var _i = 1; _i <= 10; _i++) {
  console.log("Contador do FOR: ".concat(_i));
}

var notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (i = 0; i = notas.length; i++) {
  console.log("For com array: ".concat(notas[i]));
}