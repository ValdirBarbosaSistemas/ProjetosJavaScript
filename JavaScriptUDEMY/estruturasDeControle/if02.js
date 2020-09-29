function teste1(numero) {
  if (numero > 7) console.log(numero);
  console.log("Final");
}

/*No JavaScript NÃO É OBRIGATÓRIO O USO DAS CHAVES PARA DELIMITAR UM BLOCO DE CÓDIGO
CASO HAJA APENAS UMA SENTENÇA DE CÓDIGO*/

//teste1(6)
//teste1(8)

function teste2(num) {
  if (num > 7); //CUIDADO COM O ';'. NÃO USAR NAS ESTRUTURAS DE CONTROLE
  {
    
    console.log(num);
  }
}

teste2(6); //NESTE CASO ELE VAI IMPRIMIR TANTO O 6 COMO O 8
teste2(8);
