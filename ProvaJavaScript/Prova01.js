function calcularMedia() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var valor3 = document.getElementById("valor3").value;
    var media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)) / 3;
    alert(media);
  }