const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]() //Aqui irá imprimir o valor 2
funcs[8]() //Aqui irá imprimir o valor 8
/*Neste caso a resposta para isso é que segundo indícios é que ele tem o conceito de CLOSURES, que nada
mais é que ele "guarda a lembrança de que a variável i guardou o valor 2 e 8 respectivamente"*/