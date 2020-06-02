{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)
/* Em muitas linguagens de programação, a variável só seria visível dentro do bloco de código em que foi
declarada. No caso do javascript a variável 'var' ela é GLOBAL, ou seja, ela ficará visível em qualquer 
bloco de código.
*/

function teste() {
    var local = 123
}

teste()
console.log(local) // neste caso, a variável 'var' dentro de uma FUNÇÃO, ela não será visível