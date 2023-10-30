function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);//funcao criada para gerar numeros aleatorios
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback(); //se a callback fo passada no parametro, execute ela mesma
  }, rand());
}

function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

f1(function () {
  f2(function () {
    f3(function () {
      console.log("Olá Mundo!");
    });
  });
});
