//Classe

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("Valdir");
p1.falar();

//Função Factory

const pessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const p2 = pessoa("Aline");
p2.falar();

/**
 * OBS: NO NAVEGADOR, O QUE SE SOBRESAI É A FUNCTION, POIS CASO QUEIRA CHAMAR A VARIÁVEL DECLARADA NA CLASSE
 * IRÁ DAR ERRO (UNDEFINED). QUANDO A VARIÁVEL QUE FOI DECLARADA NA FUNÇÃO É CHAMADA NO NAVEGADOR ELA SEMPRE
 * SERÁ CHAMADA DEVIVO AO CONTEXTO LÉXICO.
 */

//Função construtora

function Pessoa3(nome) {
  this.nome = nome;

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p3 = new Pessoa("XICO");
p3.falar();
