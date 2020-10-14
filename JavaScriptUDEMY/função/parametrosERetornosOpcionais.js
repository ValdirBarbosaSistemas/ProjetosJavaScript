//Parâmetros e retornos são opcionais em funções javascript
function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}
console.log(area(2, 2)); //resultado 4
console.log(area(2)); //resultado 'Not a Number', pois o primeiro
//parâmetro foi passado, mas o segundo não, e devido
//a isso, por padrão é UNDEFINED
console.log(area()); //Neste caso o valor vai dar 'Not a Number' também
console.log(area(2, 3, 17, 22, 44)); //Neste caso ele só irá considerar os dois primeiros
console.log(area(5, 5));
