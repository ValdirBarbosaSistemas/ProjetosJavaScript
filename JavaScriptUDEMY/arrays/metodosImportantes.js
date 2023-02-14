const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //Exclui o último elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); //Add no último elemento do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton"); //Add ao primeiro elemento do array
console.log(pilotos);

//Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);
//O que ele ta fazendo é que vai adicionar no índice 2, não vai remover ninguém e vai adicionar as strings informadas

//remover
pilotos.splice(3, 1); //Aqui ele ta informando que vai tirar o elemento a partir do índice 3 e só vai tirar 1 elemento
console.log(pilotos);

//Slice retorna um novo array

const algunsPilotos1 = pilotos.slice(2); //A partir do índice 2 ele vai gerar um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); //Aqui ele vai gerar um novo array através do índice 1 até o índice 4 não mostrando o elemento 4
console.log(algunsPilotos2);

aprovados = ['Bia', 'Carlos', 'Paulo'];
aprovados.sort(); // Ordena o array por ordem Alfabética

delete aprovados[0]; // Remove pelo índice