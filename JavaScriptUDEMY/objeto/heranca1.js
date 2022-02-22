const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  veloMax: 200,
};

console.log(ferrari.__proto__); // Objeto vazio
console.log(volvo.__proto__); // Objeto vazio
console.log(ferrari.__proto__ === Object.prototype); // True
console.log(volvo.__proto__ === Object.prototype); // True
console.log(Object.prototype.__proto__ === null); // True

//Definição de HERANÇA em JS usa-se o __proto__ para se ter acesso aos atributos/características de uma classe
//Prototype está presente apenas dentro de FUNÇÕES. É a "classe mãe de um protótipo"
