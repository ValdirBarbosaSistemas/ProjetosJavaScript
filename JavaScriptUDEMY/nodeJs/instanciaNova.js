//Uma factory, retorna um novo objeto
module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++; //Aqui ele ta fazendo um contador igual ao arquivo anterior
    },
  };
};
