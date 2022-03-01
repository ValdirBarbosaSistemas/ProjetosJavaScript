console.log(module.exports);
console.log(module.exports === this); //True
console.log(module.exports === exports); //True

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
  nome: "Teste",
};

console.log(module.exports);

module.exports = { publico: true };

//Temos que ter a noção que mesmo que eu venha alterar o exports ou o this, ele não vai ser retornado. SEMPRE o que vai ser retornado é o "module.exports"