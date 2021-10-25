var numero = 1;
{
  let numero = 2;
  console.log("dentro...", numero);
}
console.log("fora...", numero);
/* Neste caso, o 'let' ele ficará visível dentro do bloco, ou seja, será impresso na tela o valor de let = 2 
e fora dela, será impresso o valor de 'var' que é um.
 O let, é uma variável que tem um certo 'respeito' com o modo que é a linguagem, ou seja, se ficar dentro do 
 escopo de bloco ele não ficará visível fora dele e vice-versa. NÃO HAVERÁ CONFLITO
*/
