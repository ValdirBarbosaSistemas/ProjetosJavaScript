//Reduce é parecido com o que tem no JAVA (Favor analisar a explicação de lá)

/*
 * O Reduce serve para transformar dados do array em uma outra coisa totalmente diferente.
 * Pode transformar um dado de objetos em um array como exemplo. Ele também faz um
 * somatório dos elementos como exemplo. Ele recebe como parâmetro uma função anônima (callback)
 * e dentro dela recebe um 'acumulador' e o segundo é um valor atual. Além do valor atual, ele
 * pode receber o índice e o próprio array
 */

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

console.log(alunos.map((a) => a.nota));
const resultado = alunos
  .map((a) => a.nota) //Mapeando somente as notas
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual; //Recebendo o valor acumulado do array, somando com o valor atual
  });
/** Como não foi passado o valor inicial como 1 parâmetro, ele pegou o primeiro elemento do array 
 * e usou como "acumulador" e o 2 elemento do array usou como "Valor Atual".
 */

/**
 * LEMBRANDO QUE: O REDUCE TEM COMO RECEBER AINDA COMO VALOR OPCIONAL UM VALOR INICIAL.
 * ESTE VALOR É PASSADO NA CALLBACK COMO PRIMEIRO ARGUMENTO. CASO NÃO SEJA INFORMADO, 
 * ELE IRÁ USAR O VALOR COMO ACUMULADOR E O VALOR ATUAL NÃO SERÁ LIDO. SE O VALOR INICIAL
 * NÃO TIVER SIDO PASSADO COMO ARGUMENTO, ENTÃO O REDUCE EXECUTARÁ O CALLBACK DA FUNÇÃO
 * COMEÇANDO A PARTIR DO ÍNDICE 1, PULANDO O PRIMEIRO ÍNDICE. SE O VALOR INICIAL FOR PASSADO
 * COMO ARGUMENTO, A FUNÇÃO IRÁ COMEÇAR DO ÍNDICE 0.
 */

console.log(resultado);
