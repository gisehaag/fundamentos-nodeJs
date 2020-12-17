// se podría definir un stream como el paso de datos de un punto a otro. Tres tipos de lectura, de escritura y de doble sentido
// te permite tambien dividir la info que te llega o que estás mandando en trozos más pequeños, sobretodo muy útil en archivos grandes


const fileSystem = require('fs');
const stream = require('stream');
const util = require('util');

const { stdout } = require('process');

let data = '';

let readableStream = fileSystem.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8'); //para setear el tipo de codificación, con esto, cuando venga el chunk de data, ya nos muestra como un string

readableStream.on('data', (chunk) => { //cada paquete de datos se llama chunk por eso lo uso como variable
	data += chunk;
} )

readableStream.on('end', () =>{
	console.log(data);
})

// stdout.write() ya es un buffer de escritura

process.stdout.write('hola!');  // con esto estamos escribiendo en el buffer una salida estandar del sistema
process.stdout.write('qué');
process.stdout.write('tal?');

// un buffer de transformación:

const Transform = stream.Transform;

function Mayus() { //va con mayusculas porque es una clase
	Transform.call(this);
}

util.inherits(Mayus, Transform); //le decis que mayus herede todo lo que necesite de transform

Mayus.prototype._transform = function (chunk, codificacion, callback) {
	// El error que tuvimos varios estaba en utilizar el this dentro
	// de una arrow function. En ese caso la función apunta al objeto Window y no a Mayus.
	chunkMayus = chunk.toString().toUpperCase();
	this.push(chunkMayus);
	callback();
}

let mayus = new Mayus();

readableStream
	.pipe(mayus)
	.pipe(process.stdout);