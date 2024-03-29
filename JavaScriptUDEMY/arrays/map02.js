const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco" : 7.50}',
];

//Retornar array apenas com os preços

const paraObjeto = (json) => JSON.parse(json); //Converter texto para Objeto
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(carrinho);
console.log(resultado);
