//Agora vamos importar os módulos criados pelo nodeJS

const moduloA = require("./moduloA");
const moduloB = require("./moduloB"); //Dessa forma acessamos os arquivos (VER PHP, pois é bem parecido)

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);

console.log(moduloB.bomdia);
console.log(moduloB.boaNoite);
/**
 * NPM = GERENCIADOR DE DEPENDÊNCIAS DO NODE. É COM ELE
 * QUE INSTALAMOS QUALQUER BIBLIOTECA DE TERCEIROS QUE
 * QUEREMOS INSTALAR EM NOSSO PC
 * 
 * (npm i (install) lodash [TODA CONFIGURAÇÃO DE INSTALAÇÃO DE BIBLIOCA PRECISAMOS 
 * COLOCAR A PALAVRA "NPM I [ou npm install]" OU "NPN -G" QUE NESTE CASO QUER DIZER QUE 
 * ELE VAI INSTALAR AS BIBLIOTECAS DE MANEIRA GLOBAL]
 * 
 * VIMOS TAMBÉM QUE A PASTA CRIADA "NODE_MODULES" É ONDE FICA GUARDADA TODAS AS
 * BIBLIOTECAS QUE INSTALAMOS NO NODE
 */