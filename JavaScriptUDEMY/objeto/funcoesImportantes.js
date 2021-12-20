const pessoa = {
  nome: "Rebecca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); //Imprimir "chave"
console.log(Object.values(pessoa)); //Imprimir "valor"
console.log(Object.entries(pessoa)); //Imprimir "chave e valor"

Object.entries(pessoa).forEach((e) => {
  console.log(`${e[0]}:$e{[1]}`);
});
