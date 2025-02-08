console.log("Hola mundo");
/*typeof  es para ver el tipo de dato que se tiene en la variable*/
/***  Existen 7 tipos de datos primitivos en JavaScript: string, number, bigint, boolean, undefined, symbol y null.
 * Todos los tipos de datos, excepto los objetos, definen valores inmutables (valores que son incapaces de cambiar).
 * En JavaScript, los objetos son valores compuestos, es decir, pueden contener otros valores, son una collecion de pares clave-valor.
 * las funciones, arrays son objetos son mutables y tambien tienen métodos.
 * Los tipos de datos primitivos no son objetos son inmutables y no tienen métodos.
 * Los objetos son valores compuestos y pueden contener otros valores.
*/

// Números
console.log(typeof 42);             // numero
console.log(typeof -666);           // numero
console.log(typeof 0);              // numero
console.log(typeof 1.23e4);        // numero
console.log(typeof NaN);            // number
console.log(typeof Infinity);       // number

// Cadenas de texto (Strings)
console.log(typeof 'Veinticinco');  // string
console.log(typeof '');             // string

// Booleanos
console.log(typeof true);           // boolean
console.log(typeof FALSE);          // undefined (porque FALSE no está definido, debería ser false)
console.log(typeof false);          // boolean

// Nulos y Undefined
console.log(typeof null);           // object (peculiaridad de JavaScript)
console.log(typeof undefined);      // undefined

// Ejemplos adicionales
console.log(typeof [1, 2, 3]);      // object (los arrays son objetos en JS) new Array(), o []. new Object() o {}
console.log(typeof {a: 1});         // object
console.log(typeof function(){});   // function
console.log(typeof NaN);            // number (aunque significa "Not a Number")
console.log(typeof Symbol('sym'));  // symbol

console.log(typeof new Date());             // date -- object pero varia si se queda con Date
console.log(typeof Date());     // por que es string, no existe el tipo de dato date?

console.log(typeof parseInt('10'));        // number
console.log(typeof parseFloat('10'));        // number