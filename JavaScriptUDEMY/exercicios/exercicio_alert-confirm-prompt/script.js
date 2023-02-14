alert("Com a nossa mensagem"); //A diferença é que o alert só é mostrado no navegador

/**
 * No navegador o "pai" de todos os elementos é o WINDOW
 * e no caso para confirmação de dados é o CONFIRM
 * também existe o PROMPT que é uma funcionalidade também
 * do objeto WINDOW. Iremos ver com mais detalhes quando
 * formos trabalhar com a árvore DOM
 */
confirm('Deseja realmente apagar?');
/**
 * O confirm é um elemento de confirmação, ou seja, ele cria
 * uma caixa (como o alert) com uma pergunta se voce deseja
 * confirmar ou não. Aparece um botão de confirmação ou de
 * cancelar. 
 */ 

prompt("Digite seu nome");
/**
 * No caso do prompt, ele cria uma janela com um imput
 * de texto para preencher, e retorna o valor no terminal.
 */