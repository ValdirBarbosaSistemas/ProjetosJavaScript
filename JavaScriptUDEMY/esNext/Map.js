//Ver com mais detalhes MAP (Collections em JavaScript = Coleção de Chave e Valor)

const tecnologias = new Map();

//adicionando valores a um map através do (SET)
tecnologias.set("React", { framework: false }); //Chave 'react' e o valor é o 'framework'
tecnologias.set("Angular", { framework: true }); //Chave 'angular'

console.log(tecnologias.react); //não vai dar certo esse tipo de acesso
console.log(tecnologias.get("Angular")); //Forma correta de se pegar o valor pela chave
console.log(tecnologias.get("React").framework); //Forma correta de se pegar o valor

/**
 * Inserir valores no map de forma dinâmica através do ARRAY.
 * OBS: Como podemos ver abaixo, as chaves em um map podem ser
 * de qualquer tipo de dados. Function, Object, Number, dentre outros.
 *
 */
const chavesVariadas = new Map([
  [function () {}, "Funcao"],
  [{}, "Objeto"],
  [123, "Numero"],
]);

chavesVariadas.forEach((vlr, chv) => {
  console.log(chv, vlr);
});

console.log(chavesVariadas.has(123)); //Verificar/Pesquisar se tem o valor no map
chavesVariadas.delete(123); //removendo o valor no map
console.log(chavesVariadas.has(123));
