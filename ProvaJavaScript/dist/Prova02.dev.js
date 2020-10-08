"use strict";

function calculaSalarioFunc() {
  var nomeFuncionario = document.getElementById("nomeFuncionario").value;
  var salarioFuncionario = document.getElementById("salarioFuncionario").value;
  var calcSalario = document.getElementById(calcSalario);
  calcSalario.innerText = "O salario de " + nomeFuncionario + " é " + salarioFuncionario * 1.1;
}