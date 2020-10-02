//Usando o while

let contador = 1;
while (contador <= 10) {
  console.log(`Contador: ${contador}`);
  contador++;
}

/*usando o FOR (O FOR É IGUAL AO JAVA OU SEJA, PRIMEIRO DECLARA A VARIÁVEL, DEPOIS A EXPRESSAO
E DEPOIS O INCREMENTO SEPARADOS POR ';')*/
for (let i = 1; i <= 10; i++) {
  console.log(`Contador do FOR: ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
  console.log(`For com array: ${notas[i]}`);
}
