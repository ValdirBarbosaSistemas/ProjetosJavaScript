var empregados = [
  { nome: "Carlos Filho", idade: 24 },
  { nome: "Valdir", idade: 22 },
  { nome: "Barbara", idade: 21 },
  { nome: "Suzana", idade: 34 },
];

//TRUE OR FALSE
function verificaIdade(empregado) {
  return empregado.idade > 20 && empregado.idade < 30;
}

let verificaEmpregado = empregados.some(verificaIdade);
console.log(verificaEmpregado);

/*SOME busca TODOS os valores que ele satisfazer e retorna boolean. 
Basta UM não satisfazer ele dá FALSO*/
