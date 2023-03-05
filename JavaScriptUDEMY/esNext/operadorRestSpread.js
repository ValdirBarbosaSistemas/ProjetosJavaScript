/**
 * Operador REST (Juntar). SPREAD (Espalhar).
 * usar rest com parâmetro de função.
 */

//usando com objeto (SPREAD).

const funcionario = {
  nome: "Maria",
  salario: 12348.99,
};

const clone = {
  ativo: true,
  ...funcionario,
};
console.log(clone);
//Neste ponto de visto estou "espalhando" os dados de funcionario e colocando no objeto clone

//usando com ARRAY
const grupoA = ["Joao", "Gloria", "Maria"];
const grupoFinal = ["Pedro", "Luiz", ...grupoA, "Rafaela"];
console.log(grupoFinal);