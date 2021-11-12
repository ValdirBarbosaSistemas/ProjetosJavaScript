function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco, //como ja tem um método com esse nome ele tá fazendo assim associando o getPreco com a funcao criada acima
};

globalThis.preco = 20; //pegando pelo contexto global do nodejs
globalThis.desc = 0.1;
console.log(getPreco()); //Chamando o getPreco direto ficará no contexto global e não se terá o acesso

console.log(produto.getPreco()); //Pegando pelo objeto

//É aí onde chega o call e o apply...

const carro = {
  preco: 40000,
  desc: 0.2,
};
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, "$")); //Passa diretamente dentro da funcao
console.log(getPreco.apply(carro, [0.17, "$"])); //Passa dentro de um array
//Primeiro passa o contexto do objeto e depois passa os parâmetros
