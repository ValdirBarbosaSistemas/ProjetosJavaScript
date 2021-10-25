const resultado = (nota) => {
  return notas >= 7 ? "Aprovado" : "Reprovado";
};
console.log(nota(7.1)); //Resultado será APROVADO
console.log(nota(6.0)); //Resultado será REPROVADO
