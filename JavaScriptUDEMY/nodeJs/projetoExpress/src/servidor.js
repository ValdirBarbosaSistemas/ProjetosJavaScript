const porta = 3003; //informando a porta que será usada na aplicação

const express = require("express"); //chamando o express e atribuindo à variável

const app = express(); //chamando a função express (criada acima) na variável 'app'

const bancoDeDados = require("./bancoDeDados"); //chamando as funcionalidades do arquivo 'bancoDeDados'

const bodyParser = require("body-parser"); //chamando o body-parser

app.use(bodyParser.urlencoded({ extended: true })); //Forma OBRIGATÓRIA
/**
 * Quando utilizados a chamada 'use' ao invés de GET, POST, PUT ou DELETE,
 * estamos dizendo que em qualquer chamada ele irá ser enviado as informações.
 * O body-parser é uma biblioteca para se fazer um 'parse' para o corpo da
 * requisição. Pois quando enviamos sem ele, ocorre um erro na hora de
 * enviar as informações pela requisição POST.
 */


/*app.get('/produtos', (request, response, next) => {
    response.send({nome: 'Notebook', preco: 123.45}) //converter a resposta para JSON (resposta da aplicação)
})*/
//chamando a função 'get' na variável 'app' passando por parâmetro um 'produto' e a função (middleware)

//requisição GET para pegar as informações de todos os 'produto'
app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos());
});

//requisição GET para pegar as informações do produto por ID
app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProdutos(req.params.id));
});

//requisição POST para cadastrar um produto
app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //JSON
});

//requisição PUT para atualizar a informação de um produto
app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
      id: req.params.id,  
      nome: req.body.nome,
      preco: req.body.preco,
    });
    res.send(produto); //JSON
  });

//requisição DELETE para remover um produto
app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.deletarProdutos(req.params.id)
    res.send(produto);
}); 


app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
  /**
   * Essa função (listen) serve para dizer onde está
   * setada a porta em que será usada na aplicação.
   */
});