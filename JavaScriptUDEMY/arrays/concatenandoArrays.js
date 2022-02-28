//Concatenar arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], "Luiz"); //Uma forma de concatenar é usando o método (concat())

//Outra forma de concatenar arrays é usando o array SPREAD (...)

const a4 = [...a1, "Luiz", ...a2, ...[7, 8, 9]];
console.log(a4);

//Outra forma de concatenar arrays
console.log([].concat([8.1, 7.3, 9.3], [8.9, 5.6, 7.0]));
