const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}.${nome}`); //
}

//O 'forEach' é uma função que já vem de forma padrão no ARRAY
fabricantes.forEach(imprimir); //chamando a função imprimir (para cada elemento do array)
fabricantes.forEach(function (a) {
  console.log(a); //Aqui ele irá imprimir apenas o nome
});
/* O 'CallBack' nada mais é que passar uma funcao para uma outra funcao e que 
ela será chamada quando um evento acontecer, que no caso é o loop do foreach*/
