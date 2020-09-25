"use strict";

var carros = ["fusca", "uno", "kombi", "chevette"];

function imprimeCarros(dado) {
  console.log(carros);
}

function upperCase(dado) {
  return dado.toUpperCase();
}

var carrosUpperCase = carros.map(upperCase);
console.log(carrosUpperCase);
/* O map serve para criar uma 'cópia' do array passado anteriormente com os 
mesmos números de elementos*/

var numeros = [1, 34, 54, 23, 12, 21, 7, 6, 78];

function numerosMenores(dado) {
  return dado < 30;
}

var menoresQue30 = numeros.filter(numerosMenores);
console.log(menoresQue30);
/*O filter como o nome ja diz ele filtra os números que estão na variável numero de acordo
com a função passada*/

var funcionarios = [{
  nome: "Valdir",
  idade: 43
}, {
  nome: "Carlos",
  idade: 53
}, {
  nome: "Suzana",
  idade: 18
}];

function recuperaFuncionario(dado) {
  return dado.idade > 20 && dado.idade < 50;
}

var primeiroFuncionario = funcionarios.find(recuperaFuncionario);
console.log(">>>>>>>>>>>>>> O funcionário é: " + primeiroFuncionario.nome);
/* O find serve para buscar o primeiro elemento que ele satisfazer a condição
 */

/*Every busca TODOS os valores que ele satisfazer e retorna boolean. 
Basta UM não satisfazer ele dá FALSO*/