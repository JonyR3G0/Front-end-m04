// ==>  Algoritmo de los dos punteros  <==
//
//     Este algoritmo busca los pares
//     dentro de un array hasta encontrar
//     la posicion de los pares que sumen
//     la cantidad deseada.

const encontrarPar = (arreglo, objetivo) => {
  // 1. Iniciamos y definimos la ubicación
  // de los punteros
  let punteroIzq = 0;
  let punteroDer = arreglo.length - 1;

  // 2. Iniciamos la lógica de analisis
  // mientras los dos punteros no se toquen
  while (punteroIzq < punteroDer) {
    // Suma es el valor de los dos punteros juntos
    let valoresSumados = arreglo[punteroIzq] + arreglo[punteroDer];
    //  3. comparamos los dos valores, para
    //  saber si ya encontramos los pares
    if (valoresSumados === objetivo) {
      return [arreglo[punteroIzq], arreglo[punteroDer]];
    } else if (valoresSumados < objetivo) {
      punteroIzq++;
    } else {
      punteroDer--;
    }
  }
  return false;
};

let array = [2, 7, 11, 15];
let objetivo = 9;

let resultado = encontrarPar(array, objetivo);
console.log(resultado);

// Otro algoritmo que en este caso (⁄ ⁄•⁄ω⁄•⁄ ⁄)
// verificara si una palabra es palindromo

const esPalindromo = (input) => {
  let punteroIzq = 0;
  let punteroDer = input.length - 1;

  while (punteroIzq < punteroDer) {
    if (input[punteroIzq] !== input[punteroDer]) {
      return false;
    }
    punteroIzq++;
    punteroDer--;
  }
  return true;
};

console.log(esPalindromo(12321));

// ==> Encontrar duplicados en un array ＼(〇_ｏ)／ <==

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
const listaDeUsuarios = [
  { id: 1, nombre: "ana" },
  { id: 2, nombre: "carlos" },
  { id: 2, nombre: "carmen" },
  { id: 3, nombre: "zelda" },
  { id: 4, nombre: "link" },
  { id: 4, nombre: "peach" },
  { id: 5, nombre: "daisy" },
];

const encontrarParParaCena = (usuarios) => {
  let punteroIzq = 0;
  let punteroDer = 1;
  let duplicados = [];

  while (punteroDer < usuarios.length) {
    if (usuarios[punteroIzq].id === usuarios[punteroDer].id) {
      duplicados.push(usuarios[punteroIzq].nombre);
      duplicados.push(usuarios[punteroDer].nombre);
    }
    punteroDer++;
    punteroIzq++;
  }

  return duplicados.length > 0 ? duplicados : false; // Si no se encuentra ningún par
};

console.log(encontrarParParaCena(listaDeUsuarios));