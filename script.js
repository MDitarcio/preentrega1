alert('--- A MARTE VIAJES --- \n Bienvenid@s a bordo!');



const destinos = [
    { id: 1, nombre: 'Rio de Janeiro', presupuesto: 450 },
    { id: 2, nombre: 'Cartagena', presupuesto: 780 },
    { id: 3, nombre: 'Nueva York', presupuesto: 1360 },
    { id: 4, nombre: 'Madrid', presupuesto: 2430 }
];

function mostrarDestinos() {
    let mensaje = 'Seleccione un destino:\n\n';
    
    destinos.forEach(destino => {
        mensaje += `${destino.id}. ${destino.nombre}\n`;
    });

    // Solicitar al usuario que ingrese el número del destino deseado
    let opcionElegida = parseInt(prompt(mensaje));

    // Verificar si la opción ingresada está en el rango de destinos
    if (opcionElegida >= 1 && opcionElegida <= destinos.length) {
        let destinoSeleccionado = destinos[opcionElegida - 1];
        let cantidadPasajeros = parseInt(prompt('Ingrese la cantidad de pasajeros:'));

        // Calcular descuento basado en la edad del pasajero
        let descuentoMenores10 = 0.2;
        let descuentoTotal = 0;
        let presupuestoTotal = destinoSeleccionado.presupuesto * cantidadPasajeros;
        
        alert('Sabias que... los pasajeros menores de 10 años tienen un 20% de descuento? =D')
        for (let i = 0; i < cantidadPasajeros; i++) {
            let edadPasajero = parseInt(prompt(`Ingrese la edad del pasajero ${i + 1}:`));
        
            if (edadPasajero < 10) {
                presupuestoTotal -= destinoSeleccionado.presupuesto * descuentoMenores10;
            }
        }

        // Mostrar el presupuesto final
        alert(`Presupuesto final para ${cantidadPasajeros} pasajero(s) a ${destinoSeleccionado.nombre}: $${presupuestoTotal}`);
    } else {
        alert('Opción no válida. Por favor, elija un número dentro del rango.');
    }
}

// Llamar a la función para mostrar los destinos y solicitar información al usuario
mostrarDestinos();