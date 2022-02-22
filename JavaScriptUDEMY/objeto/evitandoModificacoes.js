//Object.preventExtensions (Não vai permitir que os atributos sejam adicionados/extendidos)
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promocao",
}); //Aqui voce não poderá adicionar mais atributos. Somente excluir ou editar

console.log("É extensível: ", Object.isExtensible(produto)); //O resultado será FALSE, pois não é permitido

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto); //Aqui ele vai DELETAR o atributo tag. NÃO VAI INCLUIR O DESCRIÇÃO e VAI ALTERAR O NOME (É PERMITIDO ALTERAR ATRIBUTOS OU EXCLUÍ-LOS. ADICIONAR NÃO)

//Object.seal (OBJETOS SELADOS) => (NÃO PODE ADICIONAR NEM EXCLUIR DADOS, SOMENTE MODIFICAR)

const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);

pessoa.sobrenome = "Silva" //NÃO PODE
delete pessoa.nome //NÃO PODE
pessoa.idade = 29 //PODE

console.log(pessoa)

//O (Object.freeze) também se destaca nesse assunto no que se diz respeito a "Evitar modificações". Já vimos esse assunto.