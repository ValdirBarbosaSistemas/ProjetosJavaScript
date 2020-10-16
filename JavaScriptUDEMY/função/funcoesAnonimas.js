const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4);
/*Neste caso se voce prestar atenção o resultado será 7, pois na variável 'imprimirResultado'
ele pega os dois parâmetros e joga no terceiro que é 'operacao' e a mesma é 'automaticamente'
setada para a função 'soma'*/
imprimirResultado(3, 4, soma); //Neste caso o resultado será o mesmo
imprimirResultado(3, 4, function (x, y) {
  return x - y; //Neste caso o resultado será -1
});
imprimirResultado(3, 4, (x, y) => x * y); //Nesse caso o resultado será 12

const pessoa = {
  falar: function () {
    //Pode ser desse jeito
    console.log("opa");
  },
  falar() {
    //Pode ser desse outro jeito (NOVA VERSÃO DO ECMASCRIPT 2015)
    console.log("opa2");
  },
};
