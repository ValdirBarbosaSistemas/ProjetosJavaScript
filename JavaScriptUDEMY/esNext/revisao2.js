//Arrow functions

const soma = (a, b) => a + b;
console.log(soma(3, 2));

//Arrow functions (this)

const lexico1 = () => console.log(this === exports); //aqui ele vai dar true porque o this aponta pra o exports no conceito de arrow function
lexico1();

//Operador REST

function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}
console.log(total(1, 2, 3, 4, 5));

/**
 * No JS temos 2 conceitos para o REST. No conceito de função,
 * o nome é REST (Agrupar), porém no conceito de ARRAY/Objeto,
 * o nome é SPREAD (Espalhar).
 */
