const sequencia = {
  _valor: 1, //Convenção (mostrando que essa variavel só será apenas usada com getters e setters - NÃO QUER DIZER QUE ELA É PRIVADA, É APENAS UMA BOA PRÁTICA)
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    this._valor = valor;
  },
};

console.log(sequencia.valor, sequencia.valor);
