//===============> ECMA SCRIPT ARROW

//Creo un array vacio

const listaDeCompras = [];

//implementa una funcion que agruegue un nuevo producto al final de la lista

const agregarProducto = (producto) => {
  listaDeCompras.push(producto);
};

//alcance local para el caso de usar producto :)
const eliminarProducto = (eliminarProducto) => {
  let nuevoArray = listaDeCompras.filter(
    (producto) => producto !== eliminarProducto
  );
  listaDeCompras = nuevoArray;
};

//Funcion para imprimir todos los productos

const mostrarLista = () => {
  listaDeCompras.forEach((item) => {
    console.log(item);
  });
};
