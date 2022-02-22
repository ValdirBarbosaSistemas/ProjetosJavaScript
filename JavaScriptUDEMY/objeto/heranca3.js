const pai = { nome: "Pedro", corCabelo: "Preto" };

const filha1 = Object.create(pai); //Outra maneira de herdar os dados é através do 'Object.create' passando no parâmetro o objeto que quer herdar

filha1.nome = "Ana"; //Aqui alterou o nome
console.log(filha1.corCabelo); //Aqui irá mostrar a cor PRETA

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true }, 
  //writable, quer dizer se tem como fazer escrita, que no caso está FALSE, ou seja, não pode sobrescrever (NÃO VAI ACEITAR SER MUDADO)
});

console.log(filha2.nome); //Irá aparecer BIA
filha2.nome = "Carla";
console.log(`${filha2.nome} tem cor do cabelo ${filha2.corCabelo}`);
//Aqui o nome não vai ser alterado devido ao atributo "writable" estar FALSO. A cor do cabelo será preto devido aos dados virem do PAI

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
  //console.log(key); //Irá mostrar 'nome' e 'corCabelo'
  filha2.hasOwnProperty(key) //método para verificar se a key existe em filha2 ("aquela propriedade pertence a ela?")
    ? console.log(key)
    : console.log(`Por herança: ${key}`);
}

/**writable = não vai aceitar ser mudado, FINAL
 * enumerable = quer dizer que ele irá permitir alterações
 */

/**
 * String, Array, Object (FUNCTIONS)
 * Function.prototype__proto__
 * Object.prototype__proto__ (null)
 */