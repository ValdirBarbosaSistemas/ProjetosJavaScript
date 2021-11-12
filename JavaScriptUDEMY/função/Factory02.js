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

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = new criaPessoa("Luiz", "Otávio", 1.8, 80);
console.log(p1.imc);
