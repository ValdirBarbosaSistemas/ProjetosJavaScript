let comparaComThis = function (param) {
  console.log(this === param); //O THIS é extritamente igual ao parametro passado?
};

comparaComThis(global); /*Neste caso vai ser TRUE, pois no escopo 'global' 
na pespectiva NODE é TRUE*/

const obj = {};
comparaComThis = comparaComThis.bind(obj); /*Neste caso como ja vimos, no aspecto de objeto
ele vai ser TRUE*/
comparaComThis(obj);

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);
//No caso do código acima (com arrow function) ele irá retornar (TRUE)

//Com o 'BIND'
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
/*Neste caso com o 'BIND' o arrow function é mais forte que o 'bind' porque ela não vai
mudar, pois o this ele aponta para o objeto no qual ele foi escrito e devido a isso
ele não consegue ser mudado.*/  
