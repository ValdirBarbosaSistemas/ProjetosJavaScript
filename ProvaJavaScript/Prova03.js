function calcAB() {
  var valorA = parseInt(document.getElementById("valorA").value);
  var valorB = parseInt(document.getElementById("valorB").value);
  var valorC = document.getElementById("resultado");
  if (valorA === valorB) {
    valorC.value = valorA + valorB;
  } else {
    valorC.value = valorA * valorB;
  }
  return valorC;
}
