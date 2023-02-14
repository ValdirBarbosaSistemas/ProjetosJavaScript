require("./global");

console.log(MinhaApp.saudacao());

MinhaApp.nome = "Eita!";
console.log(MinhaApp.nome);
 /** Aqui ele irá ser modificado (CUIDADO), pois na visão global 
  * não seria legal modificar os dados. A única maneira de resolver 
  * isso é colocando o Object.freeze para congelar os dados e nao 
  * poder mais modificar.
  */
