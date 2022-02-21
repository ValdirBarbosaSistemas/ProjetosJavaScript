//Cadeia de protótipos (prototype chain)

Object.prototype.attr = "0"; //Não faça isso para criar prototype
const avo = {
  attr1: "A",
};

const pai = {
  __prot__: avo, //Recebendo os dados do avo através da palavra '__proto__'
  attr2: "B",
  attr: "3",
};

const filho = {
  __prot__: pai,
  attr3: "C",
}; //attr3 = conceito de "sombreamento" || sobrescrita

console.log(filho.attr); //Vai imprimir o valor '0'
console.log(pai.attr1); //Vai imprimir os dados do avo

const carro = {
  //valores por padrão
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`;
  },
};

const ferrari2 = {
  modelo: "F40",
  velMax: 324, //Shadowing
};

const volvo2 = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`; //'super'...Referenciar um método criado pelo protótipo
  },
};

Object.setPrototypeOf(ferrari2, carro); //Outra forma de se criar/declarar um protótipo
Object.setPrototypeOf(volvo2, carro);
/*Aqui temos uma outra forma de declarar prototype, que no caso é usando o método 'setPrototypeOf'
 *que no caso só se usa com o 'Object'. Recebe 2 parâmetros, um é o nome do objeto e o outro é o nome
 *da classe onde irá ser pego o protótipo (Objeto Pai).
 */

console.log(ferrari2);
console.log(volvo2);
/**
 * OBS: NA EXIBIÇÃO DO OBJETO, POR PADRÃO ELE MOSTRA OS ATRIBUTOS QUE FORAM
 * CRIADOS. PARA SE TER ACESSO AOS DEMAIS, TEM QUE SE USAR O PROTOTYPE.
 */

volvo2.acelerarMais(100);
console.log(volvo2.status()); //Aqui ele irá chamar o status criado a partir do volvo

ferrari2.acelerarMais(300);
console.log(ferrari2.status());
