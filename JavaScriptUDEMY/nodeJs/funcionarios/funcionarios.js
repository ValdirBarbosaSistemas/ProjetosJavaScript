const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"; //Caminho onde o arquivo está localizado

const axios = require("axios"); //Axios é um client http

//Mulher chinesa com menor salario

const chineses = (f) => f.pais === "China"; //Variável que será usada no FILTER
const mulheres = (f) => f.genero === "F"; //Variável que será usada no FILTER
const menorSalario = (func, funcAtual) => {
  //variávael que será usada no REDUCE
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  console.log(funcionarios);

  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(func);
});
//Aqui ele está fazendo uma requisicao na URL para pegar as informações e informando na tela
