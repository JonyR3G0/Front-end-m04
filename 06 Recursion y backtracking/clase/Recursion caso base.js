function cuentaAtras (numero) {
    debugger
    //caso base
    if (numero === 0) {
        return
    }
    //llamada recursiva
    console.log(numero)
    cuentaAtras(numero-1)
}

cuentaAtras(5)

function factorizar (x) {

    //caso base
    if (x === 0) {
        return 1
    }

    //llamada recursiva
    return x * factorizar (x-1)
}

console.log(factorizar(5))

function encontrarPar (numero) {
    //caso base
    if (numero === 0) {
        return console.log('PAR')
    }
    else if(numero === 1){
        return console.log('IMPAR')
    }
    else if (numero < 0) {
        return console.log('error')
    }
    //llamada recursiva
    encontrarPar(numero-2)
}

encontrarPar(-2)