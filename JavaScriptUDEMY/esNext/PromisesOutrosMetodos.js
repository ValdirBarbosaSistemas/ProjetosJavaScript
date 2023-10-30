function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(new Error("Aconteceu algo errado aqui!!!"));
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

//PROMISE ALL

const promises = [
  "Primeiro valor",
  esperaAi("Primeira Promise", 3000),
  esperaAi("Segunda Promise", 500),
  esperaAi("Terceira Promise", 1000),
  "Outro valor",
];

/**
 * O (Promise.all) recebe um dado do tipo array. O seu resultado são todas as promises
 */
Promise.all(promises)
  .then((valorQualquer) => console.log(valorQualquer)) //No then, coloca-se uma funçao para mostrar o valor das promises criadas
  .catch((err) => console.log(err));

//Promise Race

/**
 * O (Promise.race), como o nome ja diz, ele mostra o primeiro promise na tela de acordo com o tempo
 */
Promise.race(promises)
  .then((valorQualquer) => console.log(valorQualquer))
  .catch((err) => console.log(err));
