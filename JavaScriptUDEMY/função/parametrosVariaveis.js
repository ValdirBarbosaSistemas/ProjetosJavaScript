/*Em javascript voce pode criar função sem parâmetro 
e colocar os mesmos depois da declaração da função*/
function soma() {
  let soma = 0;
  for (i in arguments) {
    /*No javascript, 'arguments' é um array interno de uma função, ou seja,
    soma += arguments[i]; pego todos os argumentos do array e somo*/
  }
  return soma;
}
console.log(soma()); //Vai retornar '0'
console.log(soma(1)); //vai mostrar '1'
console.log(soma(1.1, 2.2, 3.3)); //vai mostrar '6.6'
console.log(soma("a", "b", "c")); //vai retornar '0,abc'
/*Como havia falado, no javascript a função por padrão já vem com o 'arguments' que nada
mais é que um array que já fica disponível na função. Quando não se coloca parâmetros, ele
já vem com valor '0', ou seja, tem a possibilidade de pegar todos os parâmetros e somar 
como no exemplo acima*/
