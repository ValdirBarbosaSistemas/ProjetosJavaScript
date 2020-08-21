const escola = 'cod3r'

console.log(escola.charAt(4)) // No Javascript irá mostrar a última letra
console.log(escola.charAt(5)) // No Javascript irá mmostrar um valor em branco
console.log(escola.indexOf(3)) // Irá procurar em qual índice está a palavra
console.log(escola.substring(1)) // Irá imprimir na tela do 'o' até o final
console.log(escola.substring(0, 3)) // Irá começar do índice 0 e vai até o índice 3 SEM MOSTRAR ELE
console.log('Escola '.concat(escola).concat("!!!")) /* Irá concatenar o que quiser, ou seja,
O valor que quer concatenar 'Escola' na variável escola e outro valor '!!!' também na mesma variável                                                     
*/ 
console.log(escola.replace(3, 'e')) // Irá substituir o valor do índice 3 pela letra 'e'
console.log('Ana. Maria, Pedro'.split(',')) // Aqui ele vai gerar um ARRAY e separar por vírgulas