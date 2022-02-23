//Como o próprio nome já diz, ela serve para gerar valores

function* geradora1() {
  //Código qualquer
  yield "Valor 1"; //O Yield se usa como um return em uma função geradora
  //Código qualquer
  yield "Valor 2";
  //Código qualquer
  yield "Valor 3";
}

const g1 = geradora1();
console.log(g1); //Dessa maneira ele não irá visualizar os valores da funcao criada
console.log(g1.next()); //Para visualizar os elementos da função, basta colocar o método "next()"
/*Quando é mostrado na tela, irá aparecer os atributos (value e done), ou seja, para visualizar somente
os valores, coloca-se o value como mostra abaixo*/
console.log(g1.next().value);
console.log(g1.next().value);

/**
 * OBS: PARA SE CHAMAR O PRÓXIMO VALOR DA FUNÇÃO GERADORA, É NECESSÁRIO USAR NOVAMENTE O
 * MÉTODO "next()", POIS SE NÃO FOR USADO, ELE NÃO IRÁ CHAMAR O PRÓXIMO VALOR.
 * OBS2: O SEGUNDO ATRIBUTO "done" SERVE PARA DIZER SE A FUNÇÃO GERADORA "TERMINOU" O TRABALHO
 * DE GERAÇÃO DE VALORES. QUANDO NÃO SE TEM MAIS NENHUM VALOR PARA SER GERADO, ELE APARECERÁ
 * NO "value" UNDEFINED E NO "done" TRUE, OU SEJA, A FUNÇÃO GERADORA TERÁ TERMINADO
 */
console.log(g1.next());

//Gerando valores INFINITOS
function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//FUNÇÕES QUE DELEGAM TAREFA PARA OUTRAS FUNÇOES

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  //Estamos dizendo que a função geradora 3 vai até o número indicado e a geradora 4 irá fazer o resto
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor);
}

//LEMBRANDO QUE O RETURN ELE TERMINA/MATA A FUNÇÃO NO MOMENTO EM QUE ELE É POSTO NELA