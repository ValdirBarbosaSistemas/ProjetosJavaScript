var mediaNotas = () => {
  var nomeAluno = document.getElementById("nomeAluno").value;
  var nota1 = parseInt(document.getElementById("notasDoAluno1").value);
  var nota2 = parseInt(document.getElementById("notasDoAluno2").value);
  var nota3 = parseInt(document.getElementById("notasDoAluno3").value);
  var media = (nota1 + nota2 + nota3) / 3;
  if (media >= 8) {
    var calc = document.getElementById("resultado").value;
    calc.innerText = "A media do aluno " + nomeAluno + "é de " + media + "Ele foi APROVADO!";
  } else {
    var calc = document.getElementById("resultado").value;
    calc.innerText = "A media do aluno " + nomeAluno + "é de " + media + "Ele foi REPROVADO!";
  }
};
