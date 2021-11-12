//IIFE = Significa Emmediately Invoked Function Expression

(function () {
  console.log("Será executado na hora");
  console.log("Foge do escopo mais abrangente!");
})();
//padrão muito usado para que voce possa fugir do escopo global

(function nome() {
  //pode-se dar nomes em uma funcao IIFE
  console.log("Valdir Barbosa");
})();

(function (nome) {
  console.log(nome);
})("Xico"); //pode-se declarar funcao IIFE por parâmetros POR PADRÃO É UMA FUNÇÃO ANÔNIMA
