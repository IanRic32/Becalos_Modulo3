// Función para clasificar una fruta
function clasificarFruta(fruta) {
    const frutasAcidas = ["Kiwi", "Limón", "Pomelo", "Naranja", "Manzana"];
    const frutasSemiacidas = ["Uva", "Piña", "Fresa", "Membrillo", "Níspero", "Ciruela", "Melocotón", "Mango", "Mandarina", "Frambuesa"];
    const frutasNeutras = ["Coco", "Aguacate", "Aceituna", "Almendra", "Avellana", "Cacahuete", "Nuez"];
    const frutasDulces = ["Plátano", "Cereza", "Higo", "Melón", "Sandía", "Pera", "Granada", "Chirimoya"];

    if (frutasAcidas.includes(fruta)) {
        return "Ácida";
    } else if (frutasSemiacidas.includes(fruta)) {
        return "Semiácida";
    } else if (frutasNeutras.includes(fruta)) {
        return "Neutra";
    } else if (frutasDulces.includes(fruta)) {
        return "Dulce";
    } else {
        return "Desconocida";
    }
}


// Arreglo de frutas
const frutas = [
    "Kiwi", "Limón", "Pomelo", "Naranja", "Manzana", 
    "Uva", "Piña", "Fresa", "Membrillo", "Níspero", 
    "Ciruela", "Melocotón", "Mango", "Mandarina", "Frambuesa", 
    "Coco", "Aguacate", "Aceituna", "Almendra", "Avellana", 
    "Cacahuete", "Nuez", "Plátano", "Cereza", "Higo", 
    "Melón", "Sandía", "Pera", "Granada", "Chirimoya"
];

// 1. Ciclo for
console.log("Clasificación usando ciclo for:");
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    const clasificacion = clasificarFruta(fruta);
    console.log(`${fruta}: ${clasificacion}`);
}

// 2. Ciclo while
console.log("Clasificación usando ciclo while:");
let j = 0;
while (j < frutas.length) {
    const fruta = frutas[j];
    const clasificacion = clasificarFruta(fruta);
    console.log(`${fruta}: ${clasificacion}`);
    j++;
}

// 3. Ciclo do...while
console.log("Clasificación usando ciclo do...while:");
let k = 0;
do {
    const fruta = frutas[k];
    const clasificacion = clasificarFruta(fruta);
    console.log(`${fruta}: ${clasificacion}`);
    k++;
} while (k < frutas.length);

// 4. Ciclo for...of
console.log("Clasificación usando ciclo for...of:");
for (const fruta of frutas) {
    const clasificacion = clasificarFruta(fruta);
    console.log(`${fruta}: ${clasificacion}`);
}

// 5. Ciclo for...in (no recomendado para arreglos, pero se puede usar)
console.log("Clasificación usando ciclo for...in:");
for (const indice in frutas) {
    const fruta = frutas[indice];
    const clasificacion = clasificarFruta(fruta);
    console.log(`${fruta}: ${clasificacion}`);
}