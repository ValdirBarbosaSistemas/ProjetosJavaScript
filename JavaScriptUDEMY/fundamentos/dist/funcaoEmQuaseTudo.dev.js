"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log(typeof Object === "undefined" ? "undefined" : _typeof(Object)); //No javascript o Objet é uma FUNÇÃO

var produto = function produto() {
  _classCallCheck(this, produto);
};

console.log(_typeof(produto)); //No javascript a classe produto é uma FUNÇÃO