//O node faz cache dos modulos
module.exports = {
  valor: 1,
  inc() { //uma função para incrementar o valor
    this.valor++;
  },//Aqui nesse exemplo ele ira fazer uma instancia unica, pois ele faz cache nos módulos
};
