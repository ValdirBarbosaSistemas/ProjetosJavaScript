function calcularOperacao(valor) {
  var valor1 = parseInt(document.getElementById("valor1").value);
  var valor2 = parseInt(document.getElementById("valor2").value);
  var codigo = document.getElementById("codigo").value;
  var resultado = document.getElementById("resultado");

  if (codigo == "1")
    resultado.value = "A soma do valor " + valor1 + "+" + valor2 + " é de " + (valor1 + valor2);
  if (codigo == "2")
    resultado.value = "A multiplicação do " + valor1 + " com o " + valor2 + " é de " + valor1 * valor2;
  if (codigo == "3")
    resultado.value = "A divisão do " + valor1 + " pelo " + valor2 + " é de " + valor1 / valor2;
}
