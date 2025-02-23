/*
let text = "Este Mdulo es increible porque estoy aprendiento a programar";
let vocal = "AEIOU";
let contador = 0;

for (let i = 0; i < text.length; i++) {
    if (vocal.indexOf(text[i].toUpperCase()) !== -1) {
        contador++;
    }
}
console.log(`El texto tiene ${contador} vocales`);


*/


// Otra solución utilizando una expresión regular
// let text = "Este Mdulo es increible porque estoy aprendiento a programar";
// let vocal = /[aeiou]/gi;
// let contador = text.match(vocal).length;
// console.log(`El texto tiene ${contador} vocales`);


//Usar cualquier tipo de bicle para crear una tabla de multiplicar, solicitar al usuario un numero del 1 al 10 y que realice la tabla de multiplicar del 1 al 10 de ese numero

/*let numero = parseInt(prompt("Ingresa un número del 1 al 10"));

if (numero >= 1 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Número inválido. Ingresa un valor entre 1 y 10.");
}


//Solicitar al usuario un numero y usar cualquier tipo de blucle para contar los digitos que tiene el numero
let num
num = ParseInt(prompt("Ingresa un número"));    
let cont = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    cont++;
}
*/



let text = "Este Mdulo es increible porque estoy aprendiento a programar";
let vocal = "AEIOU";
let contador = 0;

for (let i = 0; i < text.length; i++) {
    if (vocal.indexOf(text[i].toUpperCase()) !== -1) {
        contador++;
    }
}
console.log(`El texto tiene ${contador} vocales`);

// Otra solución utilizando una expresión regular
// let text = "Este Mdulo es increible porque estoy aprendiento a programar";
// let vocal = /[aeiou]/gi;
// let contador = text.match(vocal).length;
// console.log(`El texto tiene ${contador} vocales`);

// Usar cualquier tipo de bicle para crear una tabla de multiplicar, solicitar al usuario un numero del 1 al 10 y que realice la tabla de multiplicar del 1 al 10 de ese numero

/*let numero = parseInt(prompt("Ingresa un número del 1 al 10"));

if (numero >= 1 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Número inválido. Ingresa un valor entre 1 y 10.");
}
*/
/*
// Solicitar al usuario un numero y usar cualquier tipo de blucle para contar los digitos que tiene el numero
let num = parseInt(prompt("Ingresa un número"));
let cont = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    cont++;
}

console.log(`El número tiene ${cont} dígitos.`);
*/

/*
//Usar cualquier ciclo, para realizar una tabla de multipplicar
let numeroMultiple;
numeroMultiple = parseInt(prompt("¿De que numero quiceras crear su tabla de multiplicacion?"));
for (let index = 1; index <= 10; index++) {
    console.log(index +" x " + numeroMultiple+" = "+(index*numeroMultiple));
    
}
    */

let numStr = prompt("Ingresa un número"); // Mantener como cadena de texto
let cleanNumStr = numStr.replace('.', ''); // Elimina el punto decimal
let cont = cleanNumStr.length;

console.log(cleanNumStr);
console.log(`El número tiene ${cont} dígitos (sin contar el punto decimal).`);

// Mostrar el resultado en una alerta
alert(`El número tiene ${cont} dígitos (sin contar el punto decimal).`);



/* */