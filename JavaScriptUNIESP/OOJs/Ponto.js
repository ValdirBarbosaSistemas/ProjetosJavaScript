class Ponto {
  //Criação do construtor
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //Método
  toString() {
    return "[X=" + this.x + "Y=" + this.y + "]";
  }
}

//Criação de outra classe HERDANDO DE PONTO
class PintarPonto extends Ponto {
  //Método estático
  static defaut() {
    return new PintarPonto(0, 0, "azul");
  }

  //Construtor
  constructor(x, y, cor) {
    super(x, y);
    this.cor = cor;
  }

  //Método
  toString() {
    return "[X = " + this.x + ", Y = " + this.y + ", cor = " + this.cor + "]";
  }
}

console.log(">>>>>>>>>>>>>>>>" + new Ponto(4, 5));
console.log(">>>>>>>>>>>>>>>>" + new PintarPonto(13, 12, "azul"));
console.log(">>>>>>>>>>>>>>>>" + PintarPonto.defaut());