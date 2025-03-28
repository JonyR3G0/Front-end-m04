import {destinos} from "./places.js"
import calcularCosto from "./quotator.js";

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos(nuevoViaje);
}