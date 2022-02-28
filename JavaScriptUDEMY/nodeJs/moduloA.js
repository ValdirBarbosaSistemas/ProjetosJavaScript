//Tipos de exportação do NodeJs
this.ola = "Fala pessoal"; //Ela pode ser acessada em outro arquivo
exports.bemVindo = "Bem vindo ao node!";
module.exports.ateLogo = "Até o próximo exemplo";

/**Sabemos que o Node trabalha com OBJETOS e que nos objetos temos chave e valor.
 * Neste caso a "chave" é o valor [olá, bemVindo e ateLogo], enquanto os "valores"
 * são ["Fala pessoal", "Bem vindo ao node!" e "Até o próximo exemplo"]
 */
