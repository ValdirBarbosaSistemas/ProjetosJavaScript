function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}
new Pessoa();

//Neste caso o THIS não varia, ele sempre será setado em uma arrow function
