const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
console.log(JSON.stringify(obj)); //Aqui ele ta transformando os dados do objeto para o formato JSON

/*LEMBRE-SE... O JSON ELE (ARMAZENA SOMENTE DADOS TEXTUAIS E NÃO ARMAZENA DADOS DE FUNÇÃO)*/

console.log(JSON.parse('{"a":1, "b":2, "c":3}')); //Aqui ele ta transformando o JSON em código

/*LEMBRANDO TAMBÉM QUE O FORMATO PADRÃO PARA O JSON É DESSA MANEIRA...

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))

ou seja, para números, valores booleanos e arrays, NORMAL, SEM ASPAS. 
Para Strings, COM ASPAS. Atributos com aspas duplas

*/
