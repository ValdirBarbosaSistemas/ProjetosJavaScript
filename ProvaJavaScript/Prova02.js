function calculaSalarioFunc() {
  var nomeFuncionario = document.getElementById("nomeFuncionario").value;
  var salarioFuncionario = document.getElementById("salarioFuncionario").value;
  var Result = document.getElementById("resultado");
  Result.value = nomeFuncionario + " Seu novo salario é " + salarioFuncionario * 1.1
}