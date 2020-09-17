"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log(typeof Object === "undefined" ? "undefined" : _typeof(Object)); // Sabemos que vai ser uma função

console.log(_typeof(new Object())); // Neste caso o resultado será um Object, pois ele só é object a partir de uma instância

var cliente = function cliente() {};

console.log(_typeof(cliente)); // Saberemos que aqui se trata de uma função

console.log(_typeof(new cliente())); // Neste caso será um Object 

var produto = function produto() {
  _classCallCheck(this, produto);
};

console.log(_typeof(produto)); // Resultado será função

console.log(_typeof(new produto())); // Resultado será Object