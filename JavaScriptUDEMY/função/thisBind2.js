function Pessoa() {
  this.idade = 0; /*Aqui quando for instanciar essa função, ela já vai vir 
                    com a idade disponível para manipulação*/
  //Essa função ela chama outra função através do intervalo que voce vai passar
  setInterval(function () {
    this.idade++; //Aqui ele vai incrementar a idade de um em um
    console.log(this.idade); //Mostrando a idade
  }.bind(this), 1000); //Intervalo de 1000 milisegundos que fica em torno de 1 segundo
}
new Pessoa();
//Desse modo ele vai mostrar o (NaN) ou seja, para mostrar os valores precisamos usar o BIND

//Outro modo também de fazer isso é declarando em uma variável e atribuindo o THIS a ela...

/* function Pessoa() {
    this.idade = 0; 

    const self = this
    setInterval(function () {
      self.idade++; 
      console.log(self.idade); 
    }, 1000); 
  }
  new Pessoa();
 */  