"use strict";

function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com a nota " + nota);
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6.5); //O If em JavaScript é muito parecido com o do Java

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade..." + valor);
  }
} //Os Falsos


seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0); //Os Verdadeiros

seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2, 3]);
seForVerdadeEuFalo({});