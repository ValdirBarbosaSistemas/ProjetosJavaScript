/**
 * Ver com mais detalhes SET (Collections em JavaScript = Conjunto de valores NÃO INDEXADOS
 * que não aceita repetições)
 */
const times = new Set();
times.add("Vasco");
times.add("São Paulo").add("Flamengo").add("Palmeiras");
times.add("Vasco"); //Não será adicionado pois não aceita repetição (Será IGNORADO)

console.log(times);
console.log(times.size);//Assim como no Map, para ver o tamanho usa-se o size também
console.log(times.has("Flamengo"));//Assim como no Map, para ver se contém o elemento
times.delete("Flamengo");//Assim como no Map, para remover o elemento usa-se o delete também


//Adicionando elementos no set através de um ARRAY
const nome = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nome);
console.log(nomesSet);
