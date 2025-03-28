const precios = [1,2,3,4,5,6,7,8,9,10]
//acumulador y elemento inicial para reduce
const suma =precios.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(suma)

//every devuelve un booleano si encuentra algo dentro de un array
const pares = precios.every(elemento => typeof(elemento) === 'number')
console.log(pares)

//Para saber si incluye 
const frutas = ['pera','manzana']
console.log(frutas.includes('manzana'))
console.log(9%2)

const peliculas = [
    {
        id: 0,
        nombre: '',
        clasificacion: ''
    }
]