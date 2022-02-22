console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

/**
 * Sabemos que no JS, String, Array e Object são FUNCTIONS, ou seja,
 * todos eles tem o Prototype. E devido a isso, se pode criar novas
 * funcionalidades através do prototype Vejamos nos exemplos abaixo
 */

String.prototype.reverse = function () {
  return this.split("").reverse("").join("");
};

console.log("Escola Cod3r".repeverse()); //A String não tem a funcionalidade "reverse", porém como ela foi declarada pelo prototype é possível fazê-la

Array.prototype.first = function () {
  return this[0]; //Sempre quando for para se ter acesso aos protótipos, arrays, Functions etc. É pelo THIS
};

console.log([1, 2, 3, 4, 5].first()); //Nós sabemos que NÃO EXISTE ESSE MÉTODO FIRST NO ARRAY. NÓS CRIAMOS ATRAVÉS DO PROTOTYPE
