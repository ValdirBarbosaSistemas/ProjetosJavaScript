const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * * * * *", function () {
  console.log("Executando tarefa 1", new Date().getSeconds()); //Mostrando os segundos na tela
});

/**
 * Schedule é uma biblioteca do JS que é um temporizador.
 * Parece muito com o setInterval e o setTimeout, porém
 * ele é mais preciso em alguns pontos. No código acima
 * podemos ver que ("*\/5") quer dizer que de 5 em 5 segundos
 * ele irá contar o processo. Os outros (*) são respectivamente
 * minutos, hora, dia do mês, mês e dia da semana contando
 * a partir do 0 para domingo
 */

//Agendador de tarefas
setTimeout(function () {
  tarefa1.cancel(); //aqui estamos acessando o método "cancel" para cancelar a tarefa 1 em 20 segundos
  console.log("Cancelando a tarefa1");
}, 20000);

/**
 * No código abaixo, temos uma opção de criar tarefas automatizadas.
 * na Schedule, temos uma função chamada de "RecurrenceRule" que serve
 * justamente para isso, colocamos as regras das tarefas que irão ser
 * executadas de acordo com o valor passado. Vejamos o código abaixo...
 */
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];//dia da semana... como é array, segunda a sexta
regra.hour = 12;//sempre as 12 horas
regra.second = 20;//sempre em 20 segundos

const tarefa2 = schedule.scheduleJob(regra, function () { //chamando a regra criada acima
  console.log("Executando tarefa 2", new Date().getSeconds());
});
