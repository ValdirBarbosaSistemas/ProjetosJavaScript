//Usando os modulos que instalamos de terceiros através do NPM

const _ = require("lodash"); //Por convenção quando fazemos a requisição do LODASH, utilizamos o "_"

setInterval(() => console.log(_.random(1, 100)), 2000); //Esta é uma função do "lodash" que cria números aleatórios de 1 a 1000 a cada 2 segundos

//Com a instalação do "nodemon", voce tem como modificar o código em tempo real