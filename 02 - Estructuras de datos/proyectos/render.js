//Pensando en el futuro jeje
const TIPOCAMBIO = 'MXN'

//capturamos las secciones del DOM que vamos a modificar
const seccionProductos = document.getElementById('products')
const seccionCarrito = document.getElementById('cart')

export const mostrarCarrito = (array) => {
    //Limpiamos el html (quizas no es la manera mas optima, pero funciona.)
    //para actualizar los elemento cada vez que se llame la funcion y
    //no se sobre-escriban las cards.x  
    seccionCarrito.innerHTML = ''
    //recorremos toda la lista y renderizamos los elementos
    for (let i = 0; i < array.length; i++) {
        seccionCarrito.appendChild(
            createCardAside(array[i].producto, array[i].precioCalculado, array[i].cantidad)
        )
        console.log(array[i])
    }
}

export const mostrarLista = (array) => {
        //logica que imprima tanto en consola y agregamos funcionalidad para el DOM
        //recorremos el array del catalogo, aceddemos a los objetos y creamos uno por cada elemento para adjuntarlo al contenedor.
        for (let i = 0; i < array.length; i++) {
            seccionProductos.appendChild(
                createCard(array[i].producto, array[i].precio, array[i].descripcion)
            )
            console.log(array[i])
        }
    }

//Un especie de constructor para las cards de los productos (oh Dios, hubiera aprendido esto antes)
const createCard = (productName, price, description) => {
    //creamos un elemento card con createElement
    const card = document.createElement('div')
    //le asignamos la class
    card.className = 'products__card'

    //Icon (para ahorrarme hacer fotos para cada producto)
    const PnArray = Array.from(productName)
    
    const IconLetter = document.createElement('p')
    //class
    IconLetter.className = 'card__icon'
    //first letter
    IconLetter.textContent = PnArray[0]

    //title
    const h3 = document.createElement('h3')
    //class
    h3.className = 'card__title'
    //name
    h3.textContent = productName
    
    //description
    const info = document.createElement('p')
    //class
    info.className = 'card__description'
    //txt
    info.textContent = description

    //price
    const priceT = document.createElement('p')
    //class
    priceT.className = 'card__price'
    //price
    priceT.textContent = `$${price}${TIPOCAMBIO}`

    //
    const buyBtn = document.createElement('button')
    //class
    buyBtn.className = 'card__button'
    //price
    buyBtn.textContent = 'Agregar al carrito'
    //bttn
    buyBtn.id = productName

    card.append(IconLetter, h3, info, priceT, buyBtn)
    return card
}
//Lo mismo pero para las cards del carrito
const createCardAside = (productName, priceCalculated, quantity) => {
    //creamos un elemento card con createElement
    const card = document.createElement('div')
    //le asignamos la class
    card.className = 'cart__card'

    //title
    const h3 = document.createElement('h3')
    //class
    h3.className = 'card__title'
    //name
    h3.textContent = productName
    
    //description
    const quantityP = document.createElement('p')
    //class
    quantityP.className = 'card__description'
    //txt
    quantityP.textContent = `Cantidad: ${quantity} items`

    //price
    const priceT = document.createElement('p')
    //class
    priceT.className = 'card__price'
    //price
    priceT.textContent = `$${priceCalculated}${TIPOCAMBIO}`

    //
    const removeBtn = document.createElement('button')
    //class
    removeBtn.className = 'card__button card__button--removeCart'
    //price
    removeBtn.textContent = 'Remover del carrito'
    //bttn
    removeBtn.id = productName

    card.append(h3, quantityP, priceT, removeBtn)
    return card
}