var a = 3;
let b = 4;
// O var é uma variável MUTÁVEL, ou seja, voce pode atribuir o valor que quiser que não vai dar problema
// o let é um pouco diferente, é o que é mais usado na linguagem

var a = 30;
b = 40;

/*
   O var é uma variável global enquanto o let é uma variável nõa mutável, ou seja, 
   ela não pode haver alteração depois de criada
*/
console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
//c = 50 A CONSTANTE NUNCA PODE SER MUDADA COMO O NOME JA DIZ
console.log(c);
