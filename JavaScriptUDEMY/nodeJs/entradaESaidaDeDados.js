const anonimo = process.argv.indexOf("exec") !== -1;
//Com essa funcionalidade acima, estou criando um comando para que o arquivo possa ser executado

//console.log(anonimo);

if(anonimo) {
    process.stdout.write("Olá Anônimo tudo bem?");//método para mostrar a informação na tela
    process.exit();//fechar o processo
}else {
    process.stdout.write("Informe seu nome: ");
    process.stdin.on('data', data => {//método para incluir os dados da tela
        const nome = data.toString().replace("\n", "");//transformando os dados em string

        process.stdout.write(`Fala ${nome}!`);//Colocando a informação na tela
        process.exit();
    });
}