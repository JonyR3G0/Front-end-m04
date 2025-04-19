// Instrucciones para resolver el problema:

//     Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
//     Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
//     Devuelve la palabra más larga al final del proceso.

function findLongestWord(text) {
    //Descomponemos el parrafo en palabras
    const words = text.split(' ')
    //Almacenamos la palabra mas larga
    let longestWord = ''
    //Me parecio mas optimo usar el metodo ForEach con un .lenght para calcular la palabra mas larga
    words.forEach(e => {
        e.length > longestWord.length ? longestWord = e : 0;
    });
    //Retornamos la palabra mas larga
    return longestWord
}

//Cadena de texto mas grande
const text = "JavaScript es un lenguaje de programación increíble para aprender."
//Llamamos a la funcion
console.log(findLongestWord(text))