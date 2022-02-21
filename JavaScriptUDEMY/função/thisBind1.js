const pessoa = {
  saudacao: "Bom dia",
  /*Existe um recurso novo em JS que voce pode colocar uma função dentro
  de um objeto sem a declaracao 'function'*/
  falar() {
    console.log(this.saudacao); //Está acessando através do THIS a saudacao do objeto pessoa
  },
};
pessoa.falar() //Ele vai imprimir o 'Bom dia'
const falar = pessoa.falar //Voce pode armazenar a chamada da função em uma variável
falar() /*Neste caso a saudacao está apontando para um THIS diferente 
do que está no objeto pessoa CONFLITO ENTRE PARADIGMAS (FUNCIONAL E OO)*/

/*No caso do 'bind' traduzido significa (ligar/vincular). Ele recebe um OBJETO no qual voce quer
que seja resolvido o this*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()//Ele vai dar certo