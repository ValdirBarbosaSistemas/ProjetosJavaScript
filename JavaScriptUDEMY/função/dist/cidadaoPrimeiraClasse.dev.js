"use strict";

//Função em JS é conhecida como FIRST-CLASS Object(Citizens)
//Higher-order Function
//Criação de forma literal
function f1() {} //A função sem um return ela é UNDEFINED
//Armazenar em uma variável


var fun2 = function fun2() {}; //Função anônima, pois não tem nome
//Armazenar em array


var array = [function (a, b) {
  return a + b;
}, f1, fun2];
console.log(array[0](2, 3)); //Armazenar em objetos

var obj = {};

obj.falar = function () {
  return "Opa";
};

console.log(obj.falar()); //Passar função como parâmetro

function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
}); //chamando a função
//Uma função pode retornar/conter uma função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4); //DOIDERA

var resultadoGeral = soma(2, 3); //Outra forma de chamar a função é criando outra variável

resultadoGeral(4);