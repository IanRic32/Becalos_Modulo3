
// Array para almacenar los libros leídos
let librosleidos = [];

// Función para agregar un libro al array
function agregarLibro(libro) {
    librosleidos.push(libro);
    alert(`Se agregó el libro "${libro}" al historial.`);
}

// Función para mostrar el historial de libros leídos
function mostrarHistorial() {
    if (librosleidos.length === 0) {
        alert("El historial está vacío.");
    } else {
        let mensaje = "Historial de libros leídos:\n";
        librosleidos.forEach((libro, index) => {
            mensaje += `${index + 1}. ${libro}\n`;
        });
        alert(mensaje);
    }
}

// Función para preguntar cuántos libros desea agregar al historial
function preguntarCantidadLibros() {
    let cantidad = parseInt(prompt("¿Cuántos libros desea agregar al historial?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida. Intente de nuevo.");
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        let libro = prompt(`Ingrese el nombre del libro ${i + 1}:`);
        if (libro) {
            agregarLibro(libro);
        } else {
            alert("Debes ingresar un título válido.");
            i--; // Repetir la iteración si no se ingresa un título
        }
    }
}

// Menú principal
function menu() {
    let opcion = prompt(
        "Selecciona una opción:\n1. Agregar libros\n2. Mostrar libros\n3. Salir"
    );

    switch (opcion) {
        case "1":
            preguntarCantidadLibros();
            break;
        case "2":
            mostrarHistorial();
            break;
        case "3":
            alert("Gracias por usar el sistema de seguimiento de libros.");
            return; // Salir del programa
        default:
            alert("Opción no válida. Por favor, selecciona una opción válida.");
            break;
    }

    // Volver a mostrar el menú después de realizar una acción
    menu();
}

// Iniciar el programa
menu();