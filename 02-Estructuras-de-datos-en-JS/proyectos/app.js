/* ==> Instrucciones para resolver el problema: <==
1. Crea un arreglo vacío llamado listaDeCompras.= ready! (en catalog)

2. Implementa una función agregarProducto(producto)
que agregue un nuevo producto al final de la lista. ready! (en product-moderator)

3. Implementa una función eliminarProducto(producto) 
que elimine un producto de la lista. ready! (en product-moderator)

4. Implementa una función mostrarLista() que
imprima todos los productos de la lista. ready! (en render)

5. Asegúrate de que no haya productos
duplicados en la lista. Ready! (en logica del product moderator, no hay duplicados pero modifica un valor cantidad.)

6. Puedes usar arrow functions para la funcionalidad
solicitada así como otras características del estandar ECMAScript. Ready! (arrow functions, modulos)*/

//Para hacerlo mas divertido, agregue una tematica un poco post apocaliptica/ super tec a los productos, como si fuera una tienda de "habilidades" o algo asi para Neura Link jeje
//Te invito a que veas la pagina desplegada, :) aunque no es responsive la page, no me dio tiempo. (solo desktop)

import { mostrarCarrito, mostrarLista} from "./render.js";
import { listaDeCompras, listaDeProductos } from "./catalog.js";
import { productsEvent, cartEvent } from "./product-moderator.js";

//Cargar elementos del DOM
//event delegation 4 the buy bttns
const containerProducts = document.getElementById('products')
const containerCart = document.getElementById('cart')
//! I didn't know that you need to call the function without the param
containerProducts.addEventListener("click", productsEvent)
containerCart.addEventListener("click", cartEvent)

document.addEventListener("DOMContentLoaded", () => {
  //main:
  // espera a que se cargue el dom
  // llama a las funciones principales (en modulos)

  // 1. Renderizamos las secciones productos y cart
  mostrarLista(listaDeProductos)
  //en teoría queria guardar la lista de compras en la memoria local, por eso en teoría acá debería de llamar para renderizar.
  mostrarCarrito(listaDeCompras)
});
