/* ==> Instrucciones para resolver el problema: <==

Crea un arreglo de objetos con al menos 5 productos Ready! (en catalog)

Usa filter() para obtener los productos que cuesten menos de $100. Ready! (app principal filtra por precios en el DOM)

Usa sort() para ordenar esos productos alfabéticamente por su nombre. Ready! (dentro de la funcion agregarProducto()

Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos. Ready! (en este script)

Muestra los resultados de la aplicación de cada métiodo en consola. Ready! (todas las acciones comunican en consola)

(Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.
*/

import { mostrarCarrito, mostrarLista} from "./render.js";
import { listaDeCompras, listaDeProductos } from "./catalog.js";
import { productsEvent, cartEvent} from "./product-moderator.js";

//Cargar elementos del DOM
//event delegation 4 the buy bttns
const containerProducts = document.getElementById('products')
const containerCart = document.getElementById('cart')
//! I didn't know that you need to call the function without the param
containerProducts.addEventListener("click", productsEvent)
containerCart.addEventListener("click", cartEvent)

const valorFiltro = document.getElementById('costo')
const nombreFiltro = document.getElementById('nombre')

document.addEventListener("DOMContentLoaded", () => {
  //main:
  // espera a que se cargue el dom
  // llama a las funciones principales (en modulos)

  // 1. Renderizamos las secciones productos y cart
  // mostrarLista(listaDeProductos)
  //en teoría queria guardar la lista de compras en la memoria local, por eso en teoría acá debería de llamar para renderizar.
  mostrarCarrito(listaDeCompras)
  mostrarLista(listaDeProductos)

  //descomponemos el array en solo los nombres para imprimirlo en consola.
  console.log(`La lista actual de productos es: ${listaDeProductos.map(a => a.nombre)}`)

  valorFiltro.addEventListener('input',() => {
    valorFiltro.value = valorFiltro.value.replace(/\D/g, '');
    console.log(valorFiltro.value)
    const valor = parseInt(valorFiltro.value)
    console.log(valor)
    if (isNaN(valor)) {
      console.log('uh?')
      mostrarLista(listaDeProductos)
    } else {
        let arrayFiltrado = listaDeProductos.filter(a => a.precio < valor);
        console.log(arrayFiltrado)
        mostrarLista(arrayFiltrado)
    }
  })
})
