/**
 * Uma promisse ou como o nome já diz "promessa", é um objeto
 * que recebe como parâmetro duas funções... resolve e reject.
 * Ambas são funções que servem para representar a eventual
 * conclusão (ou falha) de uma operação assíncrona e seu valor
 * resultante, ou seja, resolve: função para retornar o resultado da promise.
 * reject: função para retornar o erro da promise. Com a explicação
 * das duas funções, temos também o then - permite definir o bloco
 * executado mediante o cumprimento de uma promise e o catch - permite
 * definir o bloco executado mediante a rejeição de uma promise.
 * RESUMINDO... Quando nós trabalhamos com a internet, nós muitas vezes
 * usamos recursos que não temos a noção exata de quanto tempo ele irá
 * retornar a resposta a nós, e é aí onde entra a promisse... vejamos abaixo...
 */

//EXEMPLO 01
const timeout = (duration) => {
  return new Promise((resolve, reject) => {
    //recebe uma função arrow que tem 2 parametros
    setTimeout(resolve, duration); //'resolvendo' a promisse
  });
};

timeout(3000).then(function () {
  // executa o bloco após 3 segundos
  console.log("passou 3 segundos");
}); //O 'then' será executando quando resolver/chamar a promisse, que no caso foi chamado logo acima

//EXEMPLO 02
function getTodosOsUsuarios() {
  return new Promise((resolve, reject) => {
    reject(new Error("Não foi possível recuperar a lista de usuários"));
  });
}

getTodosOsUsuarios().catch((err) => console.log(err.message)); // Não foi possível recuperar a lista de usuários
//Nesse caso o 'catch' só é usado quando o reject for chamado, que no caso foi chamado no código acima
//quando o then ou o catch são chamados, eles recebem também uma função.

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Que legal!")
  .then((frase) => frase.concat("?!?"))
  .then((outraFrase) => console.log(outraFrase));

//Vejamos outros exemplos

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error ("Aconteceu algo de errado no código"));
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Olá tudo bem?", 3000)
  .then((resposta) => {
    //A resposta passada no "then" é o parametro "msg" da função
    console.log(resposta);
    return esperaAi(2222, 3000); //Exemplo para cair no catch de erro
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Nova Frase 3", 3000);
  }).then((resposta) => {
    console.log(resposta);
  }).catch((error) => {
    console.log(error.message); //SERÁ MOSTRADA A MENSAGEM DE ERRO CRIADA NO REJECT
  }) //O "then" recebe APENAS 1 PARÂMETRO na função
//LEMBRANDO TAMBEM QUE DENTRO DO THEN PODEMOS RETORNAR UMA NOVA PROMISSE
