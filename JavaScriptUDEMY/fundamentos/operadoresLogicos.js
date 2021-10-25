function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwase XOR
  const comprarTv32 = trabalho1 != trabalho2; //outra maneira de fazer o OU EXCLUSIVO
  const manterSaudavel = !comprarSorvete; //operador UNÁRIO

  return {
    comprarSorvete: comprarSorvete,
    comprarTv50: comprarTv50,
    comprarTv32: comprarTv32,
    manterSaudavel: manterSaudavel,
  };
}
console.log(compras(true, true));
