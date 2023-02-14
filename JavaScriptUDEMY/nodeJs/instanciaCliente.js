const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica"); //Compartilham do mesmo objeto retornada

const contadorC = require("./instanciaNova")();
console.log(contadorA);
console.log(contadorA);
console.log(contadorB);
console.log(contadorC);