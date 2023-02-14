const fs = require("fs"); //importando a biblioteca 'file system'

const caminho = __dirname + "/lerArquivos.json"; //dizendo o local do arquivo

//síncrono
const conteudo = fs.readFileSync(caminho, "utf-8");
//no método par ler o arquivo (no parametro, coloca-se a variável mais a codificaçõa do texto que no caso é UTF-8)
console.log(conteudo);