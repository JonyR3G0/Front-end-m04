// Instrucciones para resolver el problema:

//     Usa un puntero al inicio del arreglo y otro al siguiente elemento. Ready!
//     Compara las iniciales de los nombres en las posiciones de ambos punteros. Ready!
//     Si coinciden, detén la búsqueda y devuelve los nombres. Ready!
//     Si no coinciden, avanza ambos punteros y repite. Ready!
//     Detén la búsqueda si recorres toda la lista sin encontrar un par. Ready!

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const comparacion1 = Array.from(arr[inicio])
        const comparacion2 = Array.from(arr[siguiente])
        if (comparacion1[0] === comparacion2[0]) {
            return console.log(`Los invitados que coinciden son ${arr[inicio]} ${arr[siguiente]} con posiciones ${inicio} y ${siguiente}`)
        } else {
            inicio++
            siguiente++
            console.log('reiterando con otro intento')
        }
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]