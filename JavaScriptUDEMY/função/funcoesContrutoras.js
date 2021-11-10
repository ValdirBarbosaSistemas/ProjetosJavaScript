/**
 * Iremos comecar a ver algumas coisas do paradigma Orientado a Objeto.
 * Algumas das coisas do paradigma OO mudam em relacao ao JAVA como exemplo...
 */

//FUNÇÕES CONSTRUTORAS (EM JAVASCRIPT A FUNÇÃO CONSTRUTORA NADA MAIS É QUE UMA CRIAÇÃO DE UMA "CLASSE")

function Carro(velocidadeMaxima = 200, delta = 5) { //RECEBENDO COMO PARÂMETRO VALORES PADRÃO

    //atributo privado
    let velocidadeAtual = 0; //PARA DECLARAÇÃO DE ATRIBUTO PRIVADO USA-SE A PALAVRA 'LET' E PARA ATRIBUTO PÚBLICO 'THIS'

    //metodos publicos
    this.acelerar = function () { //PARA DECLARAÇÃO DE MÉTODO PÚBLICO USA-SE A PALAVRA THIS
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    this.getVelocidadeAtual = function () { //OUTRO MÉTODO PÚBLICO...
        return velocidadeAtual;
    }
}

const uno = new Carro(); //INSTANCIANDO UM OBJETO
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar(); //CHAMANDO O MÉTODO CRIADO...
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro); //Aqui sera uma function
console.log(typeof ferrari); //Aqui sera ym object
