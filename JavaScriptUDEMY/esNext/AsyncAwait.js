function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no erro!!!");
      }
      resolve(msg);
      return;
    }, tempo);
  });
}

/**
 * O async é uma função que faz o processo de uso da promise,
 * ou seja, como se fosse a função then da promisse. Ele
 * permite que o código fico mais limpo;
 */

async function executa() {
  try {
    const frase1 = await esperaAi("Frase 01", 1000);
    console.log(frase1);
    const frase2 = await esperaAi("Frase 02", 3000);
    console.log(frase2);
    const frase3 = await esperaAi("Frase 03", 5000);
    console.log(frase3);
  } catch (error) {
    console.log(error);
  }
}
executa();
