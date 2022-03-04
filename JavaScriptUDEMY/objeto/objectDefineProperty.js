//Se quisermos alterar as propriedades de um atributo de um objeto

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque; //Se quisermos alterar as propriedades do estoque?
}

Object.defineProperty(this, "estoque", {
  enumerable: true, //Independentemente irá ser exibido na tela (mostra a chave do objeto)
  value: estoque,
  writable: false, //Aqui ninguém pode mexer no atributo
  configurable: false, //Nao pode alterar e nem reconfigurar
});

//A diferença do [Object.properties], é que nele voce pode configurar o objeto como um todo