// Instrucciones para resolver el problema:

//     Divide el arreglo en dos mitades. Ready!
//     Resuelve el problema recursivamente para encontrar el máximo en cada mitad. Ready!
//     Combina las soluciones comparando los máximos de ambas mitades. Ready!
//     Devuelve el número máximo encontrado. Ready!

function findMax(arr) {
    //Caso base, si el array mide 1, ya no se puede partir,
    // entonces retornamos el ultimo elemento para procesarlo
    if (arr.length === 1) {
        console.log('stopu!')
        return arr[0]
    }

    //Dividimos el arreglo en dos mitades
    const mid = Math.floor(arr.length/2)
    //Calculamos los dos lados
    console.log(mid)
    const left = arr.slice(0, mid)
    console.log(left)
    const right = arr.slice(mid)
    console.log(right)

    //Llamada recursiva a cada mitad
    const leftMax = findMax(left)
    const rightMax = findMax(right)

    // TODO: Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax)
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10

//Gracias a Dios ya le entendí :)