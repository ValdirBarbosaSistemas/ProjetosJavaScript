let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = a => 2 * a; //retorno implícito
console.log(dobro(Math.PI)); //Dobro do PI

let ola = function () {
  return "Olá";
};

ola = () => "Olá"; //Função reduzida
console.log(ola())
