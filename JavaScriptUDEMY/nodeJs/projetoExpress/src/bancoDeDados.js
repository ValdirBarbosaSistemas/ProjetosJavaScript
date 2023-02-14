//criando um objeto para incrementar o id
const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

//Objeto vazio para ser armazenado os dados
const produtos = {};

//CRUD de produtos
function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
}

function getProdutoId(id) {
  return produtos[id] || {};
}

function getProdutos() {
  return Object.values(produtos);
}

function deletarProdutos(id) {
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}

module.exports = {
    salvarProduto,
    getProdutoId,
    getProdutos,
    deletarProdutos
}