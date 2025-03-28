// Array de destinos
// (lo separé, ya que pensé que sería interesante agregar una
// logica que ordenara los elementos de manera alfabetica)

export const destinosAlmacenados = []

export const destinos = (nuevoDestino) => {
    destinosAlmacenados.push(nuevoDestino)
    destinosAlmacenados.sort((ObjectArr1, ObjectArr2) => ObjectArr1.destino.localeCompare(ObjectArr2.destino))
}