import { listaDeProductos, listaDeCompras } from "./catalog.js";
import { mostrarCarrito, mostrarLista } from "./render.js";

export const agregarProducto = (producto) => {
    if (listaDeCompras.includes(producto)) {
        // asegurarse que no haya productos duplicados en el array eh!!
        console.log("producto duplicado");
        //aumentamos la cantidad para poder seleccionar multiples carritos
        producto.cantidad++
        //tema de precios
        producto.precioCalculado = producto.precio*producto.cantidad
        //Para cumplir con los requ. de la tarea
        console.log(listaDeCompras)
        //Ordenamos alf.
        listaDeCompras.sort((a,b) => a.nombre.localeCompare(b.nombre));
        //Actualizamos el carrito
        mostrarCarrito(listaDeCompras)
    } else {
        // push (pidieron que se agregara al final
        producto.cantidad  = 1
        listaDeCompras.push(producto);
        //recalculamos los precios
        producto.precioCalculado = producto.precio
        // la ordenamos alfabeticamente
        listaDeCompras.sort((a,b) => a.nombre.localeCompare(b.nombre));
        console.log(listaDeCompras)
        mostrarCarrito(listaDeCompras)
    }
};
export const eliminarProducto = (eliminarProducto) => {
    if (listaDeCompras.includes(eliminarProducto)) {
        //Buscamos el index para pasarselo al splice
        const u = listaDeCompras.indexOf(eliminarProducto)
        //Para respetar la cantidad, si hay mas de un elemento, se va eliminando.
        //si solo hay uno, hacemos un splice, use este metodo por que al importar el array
        //no permite reescribir, creo.
        listaDeCompras[u].cantidad === 1 ? listaDeCompras.splice(u, 1) : listaDeCompras[u].cantidad --
        //actualizamos
        eliminarProducto.precioCalculado = eliminarProducto.precio*eliminarProducto.cantidad
        mostrarCarrito(listaDeCompras)
    } else {
        console.log('Error, el item a eliminar no está en el carrito')
    }
};
//Maneja una delegacion de eventos para los botones de los productos
export function productsEvent (e) {
    if (e.target.matches('.card__button') ) {
        console.log(`producto agregado al carrito: ${e.target.id}`)
        //! aca estaba usando sin un return y con llaves
        let arrayFiltrado = listaDeProductos.filter(name => name.nombre === e.target.id)
        agregarProducto(arrayFiltrado[0])
    } else {
        console.log('no se que clicaste pero buy no fue pana')
    }
}
//Maneja una delegacion de eventos para los botones del carrito
export function cartEvent (e) {
    if (e.target.matches('.card__button') ) {
        console.log(`producto eliminado del carrito: ${e.target.id}`)
        //! aca estaba usando sin un return y con llaves
        let arrarFiltrado = listaDeProductos.filter(name => name.nombre === e.target.id)
        eliminarProducto(arrarFiltrado[0])
    } else {
        console.log('no se que clicaste pero eliminar no fue pana')
    }
}

//Literalmente, gracias Dios, toda la glora a el :)