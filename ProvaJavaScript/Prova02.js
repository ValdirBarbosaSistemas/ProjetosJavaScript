function calculaSalarioFunc() {
  var nomeFuncionario = document.getElementById("nomeFuncionario").value;
  var salarioFuncionario = document.getElementById("salarioFuncionario").value;
  var calcSalario = salarioFuncionario * 1.1;
  document.getElementById("salarioNovo") = calcSalario.innerText = "O nome do funcionario é " + nomeFuncionario +
    "e o salario com os 10% é " + calcSalario;
}