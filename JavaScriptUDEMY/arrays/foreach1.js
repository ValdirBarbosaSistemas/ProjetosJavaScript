const aprovados = ["Agatha", "Ricardo", "Ana", "Lucia"];
aprovados.forEach(function (nome, indice) {
  //Para cada elemento do índice, mostrar os elementos
  console.log(`${indice + 1}) ${nome}`);
});

//Outra maneira de usar o Foreach
aprovados.forEach((nome) => console.log(nome)); //Imprimindo só o nome

//Colocando em uma variável

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados); //O resultado será o mesmo do que imprime só o nome

//A função callback do foreach recebe 3 parâmetros que no caso são o valor, o índice e o próprio array
