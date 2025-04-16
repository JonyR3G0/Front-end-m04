// 1. Inventamos un array para el consumo de el test
const array = [12, 14, 125, 94, -10, 90, 1, 0, 15];

// Funcion principal
const maxSumCons = (array, k) => {
// Proceso 1 - Establecemos la ventana
// SLICE (devuelve una copia de un pedazo de un array dentro de un array nuevo)

    // 1. Tamanio de ventana
    let izq = 0
    // (para mantenerlo relativo a izq)
    let der = izq + k-1

// Proceso 2 - Sumamos los elementos de la ventana
    let sum = 0
    for (let i = izq; i < der; i++) {
        sum += array[i]
    }
}

maxSumCons(array, 3)