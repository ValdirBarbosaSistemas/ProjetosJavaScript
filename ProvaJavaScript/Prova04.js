function calcularPrecoProduto() {
  var valorProduto = parseFloat(document.getElementById("precoProduto").value);
  var valorParcelas = document.getElementById("parcelasProduto").value;
  var resultado = document.getElementById("resultado");

  if (valorParcelas == "avista") {
    resultado.value = valorProduto;
  } else if (valorParcelas == "parc1") {
    resultado.value = (valorProduto * 1.1) / 3;
  } else if (valorParcelas == "parc2") {
    resultado.value = (valorProduto * 1.2) / 5;
  }
}
