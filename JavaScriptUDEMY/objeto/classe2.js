class Avo {

  //Atributos privados

  #nome
  #idade

  //outra forma de formular atributos privados
  _nome2 = Symbol("nome");

  constructor(nome, nome2, idade, sobrenome) {
    this.#nome = nome
    this[_nome2] = nome2 //outra forma de usar atributos privados
    this.#idade = idade
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai{
  constructor() {
    super("Silva");
  }
}

const filho = new Filho();
console.log(filho);
