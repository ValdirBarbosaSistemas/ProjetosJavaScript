function MeuObjeto() {}

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1.__proto__ === obj2.__proto__); //Aqui ele vai dizer que é TRUE
console.log(MeuObjeto.prototype === obj1.__proto__); //Aqui ele vai dar true

MeuObjeto.prototype.nome = "Anônimo"; //Como vimos anteriormente, dessa forma também podemos declarar os atributos do objeto
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia, meu nome é ${this.nome}!`);
}; //Neste caso o obj1 e obj2 a partir do momento que for chamado o "__proto__", serão atribuídos a eles os atributos "nome e falar"

obj1.falar(); //Irá imprimir ANÔNIMO
obj2.nome = "Rafael";
obj2.falar(); //Irá imprimir o nome RAFAEL

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; //Aqui ele ta setando o MeuObjeto para o obj3
obj3.nome = "OBJ3";
obj3.falar();

//VER A TABELA DE PROTOTYPE PARA MELHOR ENTENDIMENTO CASO DE DÚVIDAS