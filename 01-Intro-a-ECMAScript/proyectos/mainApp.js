/* ==> Instrucciones del proyecto <==

1. Entender el flujo básico de la aplicación existente: Registrar destinos, calcular el
costo y mostrar el itinerario.

2. Registrar destinos: Llamar a registrarDestino(destino, fecha, transporte) para 
agregar destinos al sistema.

3. Calcular el costo: El costo se calcula con la función calcularCosto(), usa destino 
y el transporte como parámetros.

4. Mostrar el itinerario: Llamar a mostrarItinerario() para recorrer todos los viajes 
guardados y mostrar sus detalles.

==> Convertir algunas partes del código a ECMAScript(6). <==

5. Reemplazar Funciones tradicionales por Funciones de flecha donde consideres necesario.

6. Reemplaza las declaraciones de `var` por `let` o `const` cuando corresponda.
Recuerda que `let` se usa para variables que pueden cambiar, y `const` para las
que no cambiarán (como el arreglo de destinos).

7. Divide el código en módulos (en archivos) para separar la lógica de gestión 
de viajes de la interacción con el usuario.

8. Opcionalmente podrías extender la funcionalidad del sistema. Por ejemplo puedes 
agregar más destinos, más opciones de transporte o calcular descuentos de acuerdo 
al número de personas en el viaje. Usa tu creatividad para practicar lo aprendido.*/

import { registrarDestino } from "./logic.js";
import { mostrarItinerario } from "./render.js";
import { destinosAlmacenados } from "./places.js";

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de registro de destino
    registrarDestino("Paris", "2025-06-15", "Avión");
    registrarDestino("Londres", "2025-07-01", "Tren");
    registrarDestino("Tokyo", "2025-09-21", "Avión");

    // Mostrar el itinerario de los viajes
    mostrarItinerario(destinosAlmacenados);
}

// Ejecutar la aplicación
iniciarApp();