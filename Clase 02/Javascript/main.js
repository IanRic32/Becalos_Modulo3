// Función para generar un número aleatorio entre 0 y 100
function generarNotaAleatoria() {
    return Math.floor(Math.random() * 101);
}

// Función para evaluar la nota y devolver un mensaje personalizado
function evaluarNota(nota) {
    if (nota >= 90) {
        return `Nota: ${nota} - Excelente. ¡Felicidades! 🎉`;
    } else if (nota >= 75 && nota <= 89) {
        return `Nota: ${nota} - Bien hecho. Sigue así. 👍`; 
    } else if (nota >= 60 && nota <= 74) {
        return `Nota: ${nota} - Suficiente, pero puedes mejorar. 💪`;
    } else if (nota >= 0 && nota < 60) {
        return `Nota: ${nota} - No aprobado. ¡No te rindas! Intenta de nuevo. 🚀`;
    } else {
        return `Nota inválida: ${nota}. Ingresa un valor entre 0 y 100. ❌`;
    }
}

// Arreglo para almacenar las notas
let notas = [];
let estudiantes = ["Carlos", "Ana", "Pedro", "María", "Luis"];
// Ciclo para ingresar o generar 5 notas
for (let i = 1; i <= 5; i++) {
    // Puedes cambiar esta línea para permitir entrada del usuario si usas Node.js
    let nota = generarNotaAleatoria();

    // Validar que la nota esté en el rango correcto
    if (nota >= 0 && nota <= 100) {
        notas.push(nota);
        console.log(`${estudiantes[i]}: ${evaluarNota(nota)}`);
    } else {
        console.log(`${estudiantes[i]}: Nota inválida. ❌`);
    }
}

// Resumen de las calificaciones
console.log("\nResumen de Calificaciones:");
notas.forEach((nota, index) => {
    console.log(`${estudiantes[index]}: ${nota}`);
});
