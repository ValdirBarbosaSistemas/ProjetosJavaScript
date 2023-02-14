const moduloA = require("../../moduloA");

console.log(moduloA.ola);

/**
 * Para se ter acesso a arquivos fora do local criado, acessamos através
 * da anotação ponto "../", pois dessa maneira ele volta a pasta anterior para
 * que assim possamos ter acesso aos arquivos que estão fora de nosso
 * alcance. (VER CONCEITO DE PHP)
 */

//Acessando módulo padrão do node (node_modules) que é o HTTP
const http = require("http");
http
  .createServer((req, res) => { //requisição e resposta
    res.write("Bom dia Valdir"); //Colocando a resposta no browser
    res.end();//Fim da resposta
  })
  .listen("8080");//Escutando a resposta na porta 8080
