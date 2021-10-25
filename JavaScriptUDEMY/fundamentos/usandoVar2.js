var numero = 1;
{
  var numero = 2;
  console.log("dentro...", numero);
}
console.log("fora...", numero);
/*Neste caso como ja sabemos, a variável 'var' ela fora de uma 'function' ela é global, ou seja, ficará visível
em todo bloco, tanto dentro, como fora dele. Neste caso irá ser impresso o número '2' duas vezes
*/
