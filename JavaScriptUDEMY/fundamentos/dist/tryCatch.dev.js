"use strict";

function tratarErroELancar(erro) {
  //throw new Error("Ocorreu um erro aqui...");
  //throw 10  PODE LANÇAR NÚMERO
  //throw true   PODE LANÇAR BOOLEAN
  //throw 'mensagem'   PODE LANÇAR UMA STRING
  throw {
    //PODE LANÇAR OBJETO
    nome: erro.name,
    msg: erro.msg,
    date: new Date()
  };
} //Declaração de uma função colocando para MAIÚSCULA


function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e); //Função
  } finally {
    console.log("Final...");
  }
} //Criação do objeto


var obj = {
  nome: "roberto"
};
imprimirNomeGritado(obj); //Chamando o objeto criado

/*Aqui ele vai dá erro devido ao nome da variável ser diferente do objeto criado e para isso
basta usar a palavra reservada 'try/catch' para tratar o erro*/