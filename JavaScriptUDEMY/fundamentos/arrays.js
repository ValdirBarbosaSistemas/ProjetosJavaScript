const valores = [7.7, 8.9, 6.3, 9.2] //declaração do array
console.log(valores[0], valores[3]) //imprime o primeiro valor e o último
console.log(valores[4]) //vai exibir UNDERFINED

valores[10] = 10
console.log(valores) //Irá exibir na tela que consta 6 itens vazios
console.log(valores.length) //irá mostrar o tamanho do array

valores.push({id: 3}, false, null, 'teste') //irá acrescentar os dados no array
console.log(valores)

console.log(valores.pop()) // irá tirar o último elemento do array
delete valores[0] //irá tirar o primeiro elemento do array
console.log(valores)

console.log(typeof valores) //irá dizer o tipo do array