console.log(this === global); //FALSE
console.log(this === module); //FALSE

console.log(this === module.exports); //TRUE
console.log(this === exports); //TRUE

function logThis() {
  console.log("Dentro de uma função");
  console.log(this === exports); //FALSE
  console.log(this === module.exports); //FALSE
  console.log(this === global); //TRUE
}

/**
 * Podemos verificar que FORA DA FUNÇÃO O THIS NÃO
 * APONTA para global, enquanto que DENTRO DE UMA
 * FUNÇÃO ele APONTA. Vimos também que FORA DA FUNÇÃO
 * o this aponta para o EXPORTS e o MODULE.EXPORTS.
 * Enquanto que DENTRO DA FUNÇÃO ele NÃO APONTA.
 */
