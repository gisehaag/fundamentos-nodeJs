/* Los buffers son datos en binario, datos crudos, que van viniendo y moviendo de un lado a otro



*/

const { info } = require("console");
const { arch } = require("os");

let buffer = Buffer.alloc(4); //alloc viene de allocate (asigna) un espacio en memoria
/*El primer parámetro es el size, por eso que si solo mando eso, me aparece en consola <Buffer 00 00 00 00 >
porque no tiene info.
todos los parametros de la function son:
Buffer.alloc(size[, fill[, encoding]]) */

buffer = Buffer.alloc(4, 'g'); //<Buffer 67 67 67 67 >, tiene el formato hexadecimal

let otroBuffer = Buffer.from([1, 2, 3]);

otroBuffer = Buffer.from('hola');
otroBuffer = Buffer.from('Hola');

console.log(buffer, otroBuffer, otroBuffer.toString());

// Trabajar con buffers nos permite trabajar con datos en su versión más cruda

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
	abc[i] = i + 97 ; //en el código ascii el catacter 97 es la a y si en cada iteración le sumamos uno, ahi tendremos el abecedario
}

console.log(abc, abc.toString());

// Los buffers no vienen solos, por lo general vienen de un stream