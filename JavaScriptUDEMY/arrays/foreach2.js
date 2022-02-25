//Como se criar um "Foreach" do zero

Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); //Primeiro parâmetro é o elemento, segundo o índice e o terceiro é o array
  }
};

const aprovados = ["Agatha", "Ricardo", "Ana", "Lucia"];
aprovados.forEach2(function (nome, indice) {
  //O foreach2 NÃO EXISTE, IRÁ SER FEITO NO MÉTODO ACIMA...
  console.log(`${indice + 1}) ${nome}`);
});
