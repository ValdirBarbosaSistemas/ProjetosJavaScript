"use strict";

//FUNÇÃO OBJETO
function rand(_ref) {
  var _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 1000 : _ref$max;
  // USANDO OPERADOR DESTRUCTURING
  var valor = Math.random() * (max * min) + min; //Aqui acima ele vai mostrar os numeros de forma aleatória entre '0' e '1000' 

  return Math.floor(valor);
}

var obj = {
  max: 50,
  min: 40
};
console.log(rand(obj));