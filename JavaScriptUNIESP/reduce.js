var numeros = [2, 3, 5, 12, 31, 11, 4];

function soma(ac, valor) {
  return ac + valor;
}

var somarDeTodosOsElementos = numeros.reduce(soma, 0);
console.log(somarDeTodosOsElementos);

//REDUCE soma todos os elementos do array. Ele recebe uma variável e um iterador
//PARECIDO COM JAVA