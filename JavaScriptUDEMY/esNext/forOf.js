/** Enquanto que o forIn serve para mostrar os valores pelo INDICE,
 * o forOf serve para mostrar os valores pelo VALOR em si.
 */

const assuntosEcma = ["Map", "Set", "Promisse"];

for (let indice in assuntosEcma) {
  console.log(indice);
}
//No código acima, irá mostrar os valores pelo INDICE

for (let valor of assuntosEcma) {
  console.log(valor);
}
//No código acima, irá mostrar os valores pelo VALOR do array

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promisse", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let chave of assuntosMap.keys) {
  console.log(chave); //apenas as chaves
}

for (let valor of assuntosMap.values) {
  console.log(valor); //apenas os valores
}

for (let [chv, vlr] of assuntosMap.entries) {
  console.log(chv, vlr); //irá mostrar os dois
}
