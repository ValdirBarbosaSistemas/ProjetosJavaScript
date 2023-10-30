//let e const

{
  var a = 2;
  //let b = 3
}
console.log(a); //A variável a será vista porém a b não, pois o let tem escopo de bloco
//console.log(b);

//uma variavel declarada com var não tem escopo de bloco

//template string

const produto = "ipad";
console.log(`${produto} é caro`);

//Destructuring

const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras); //devido ao operador SPREAD, ele vai dividir o trecho d3r em um array

const [x, , y] = [1, 2, 3];
console.log(x, y); //Aqui ele vai imprimir 1 e 3

const { idade: i, nome: n } = { nome: "Ana", idade: 9 };
console.log(i, n); //Aqui ele vai imprimir o nome e a idade