//Map serve para transformar um array de 3 elementos em outro sendo que com os dados "transformados"

const nums = [1, 2, 3, 4, 5]; //O array original NÃO É MODIFICADO

//For com propósito

let resultado = nums.map(function (e) {
  return e * 2; //Gerando o dobro do elemento que eu recebi
}); //Ele recebe uma função callback como parâmetro e na função pode receber 3 parâmetros (1 - O valor atual, 2 - Valor do índice, 3 - O array completo)

console.log(resultado, nums);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `RS ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
