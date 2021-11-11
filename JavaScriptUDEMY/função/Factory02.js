//Outra forma de se criar objetos é por parâmetros

function criarProduto(nome, preco) {
  return {
    nome, //Não precisa colocar "nome: nome" pois ja foi passado pelo parâmetro
    preco,
    desconto: 0.1, //Valor padrão
  };
}

console.log(criarProduto("Notebook", 2199)); //Criação dos objetos através dos parâmetros
console.log(criarProduto("Ipad", 1199.49));
