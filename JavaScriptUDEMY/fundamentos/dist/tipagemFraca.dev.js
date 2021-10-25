"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var qualquer = "Valdir"; //tanto faz se for aspas simples ou aspas duplas que reconhece

console.log(qualquer);
console.log(_typeof(qualquer)); //Diz qual tipo de variável é

qualquer = 3.1516;
console.log(qualquer);
console.log(_typeof(qualquer));