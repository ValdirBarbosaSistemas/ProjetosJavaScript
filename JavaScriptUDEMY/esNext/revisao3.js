//Object.values e Object.entries

const obj = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.keys(obj)); //Aqui mostra só a chave
console.log(Object.values(obj)); //Aqui mostra só o valor
console.log(Object.entries(obj)); //Aqui mostra tanto a chave como o valor

//Melhorias na notação literal de object

const nome = "Valdir";
const pessoa = {
  nome,
  ola() {
    return "Olá gente!";
  },
};
console.log(pessoa.nome, pessoa.ola);

//Criação de classes em JS

class Animal {}
class Cachorro extends Animal {
  falar() {
    return "Au Au!";
  }
}
console.log(new Cachorro().falar());
