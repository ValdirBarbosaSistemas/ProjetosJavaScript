//pessoa -> 123 -> {...} ENDEREÇO DE MEMÓRIA
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa); //Aqui o resultado será {Pedro}

/**Em objetos, pode-se mudar um conteúdo de sua variável. O que não muda
 * é a sua declaração de variável, ou seja, o nome da variável pessoa 
 * (que é uma constante) não muda. Porém o seu conteúdo que no caso é
 * um objeto, pode ser modificado. Para se ter um "objeto constante" 
 * tem que se usar o método "Freeze"; Pois com ele o conteúdo do objeto
 * não será mudado.
 */
Object.freeze(pessoa);

pessoa.nome = "Maria"; //Quando se usa o "Freeze" não se pode ALTERAR
pessoa.end = "Rua abc"; //Não se pode INCLUIR
delete pessoa.nome; //Não se pode DELETAR

console.log(pessoa.nome);
console.log(pessoa);

//Outra forma de criar objetos constantes é durante sua criação...
const pessoaConstante = Object.freeze({ nome: "João" });
console.log(pessoaConstante);
