/*Em aulas passadas anteriormente foi dito que em Javascript voce pode criar valores padrão
em funções, veremos abaixo alguns exemplos de como fazer isso*/

//estratégia 01 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1; //caso o valor não for digitado no parâmetro, POR PADRÃO ele vai receber o valor '1'
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log(soma1()); //Como não foi passado nada, POR PADRÃO ele vai gerar o valor '1'
console.log(soma1(3)); /*Como só foi passado o primeiro parâmetro, os demais vão ser '1'
e o resultado vai ser '5'*/
console.log(soma1(1, 2, 3)); //*Neste caso como foram TODOS, o valor vai ser '6'
console.log(0, 0, 0); /*Neste caso todos os valores foram setados PORÉM ele não vai
retornar '0'. Neste caso como o '0' em javascript é 'FALSO', ele vai gerar o valor '1', ou seja,
ele vai retornar '3'*/

//estratégia 02 para gerar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1; /*Neste caso se a for diferente de 'underfined' retorne o valor
  de 'a'. Caso não seja, retorne o valor '1'*/
  b = 1 in arguments ? b : 1; /*Neste caso se o valor '1' estiver em 'arguments' retorne o
  valor de 'b', caso não, retorne o valor '1'*/
  c = isNaN(c) ? 1 : c; /*Neste caso se o valor de 'c' for um 'NotANumber' retorne '1', caso
  contrário, retorne o valor de 'c'*/
  return a + b + c;
}
console.log(soma2()) //Vai retornar o valor padrão que no caso é '1'
console.log(soma2(3)) //O valor retorna '5' pois o primeiro valor é '3' e os demais '1'
console.log(soma2(1,2,3)) //O valor retorna '6' pois usou todos os parâmetros

//MELHOR ESTRATÉGIA, POIS É A MAIS SIMPLES E CORRETO DO JAVASCRIPT
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c;
}
console.log(soma3()) //Valor vai ser 3
console.log(soma3(3)) //Valor vai ser 5
console.log(soma3(1, 2, 3)) //Valor vai ser 6
