//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// 1. Usar Filter para obtener los productos que cuesten menos de 100
const productosMenosCien = productos.filter(a => a.precio < 100);
console.log(productosMenosCien)

// 2. Usar sort para ordenar los elementos del array en orden alfabetico
productos.sort((a, b) => a.nombre.localeCompare(b.nombre)) 
console.log(productos)

// 3. Usar map para generar un array de solo los nombres
const productosNombres = productos.map(p => p.nombre)
console.log(productosNombres)