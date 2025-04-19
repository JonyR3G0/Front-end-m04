// Instrucciones para resolver el problema:

//     Escribe una función recursiva que busque un regalo específico en un arreglo. Ready!
//     Si el regalo se encuentra, devuelve un mensaje indicando su posición. Ready!
//     Si no se encuentra, devuelve un mensaje diciendo que no está en la lista. Ready!

//Lista
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

let index = 0;
//Función recursiva
function findGift(gifts, giftName, index) {
    //Caso base
    if (index === gifts.length) {
        return console.log(`${giftName} no se ha encontrado dentro de la lista`)
    }
    //Me parecio interesante hacerle un lowercase.
    else if (gifts[index].toLowerCase() === giftName.toLowerCase()) {
        return console.log(`${giftName} se ha encontrado en la posición ${index+1}`)
    }
    //recursion
    else {
        findGift(gifts, giftName, index + 1);
    }
}

findGift(gifts, 'lego', index)
findGift(gifts, 'terreneitor', index)