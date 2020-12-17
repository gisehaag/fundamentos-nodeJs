/*Node aparte de gestionar su propio proceso, pude gestionar procesos hijos

cada vez que se ejecuta cualquier cosa asíncrona corre un hilo nuevo lo ejecuta,
pero tambien se puede ejecutar otro proceso

un proceso es algo que se ejecuta y termina

modulo: child-process (https://nodejs.org/dist/latest-v14.x/docs/api/child_process.html)
*/

const { exec, spawn } = require('child_process');

// utilizamos la sintaxis EMC6 que es para desestructurar un objeto
// equivalente a la linea:

// const exec = require('child_process').exec;

// con el comando spawn podemos invocar procesos de node

exec('ls -la', (err, stdout, stderr) => { //podrías ejecutar cualquier otro comando del sistema
	if (err) {
		console.error(err);
		return false;
	}
	console.log(stdout);
});

exec('node modules/console.js', (err, stdout, stderr) => {
	if (err) {
		console.error(err);
		return false;
	}
	console.log(stdout);
});

let process = spawn('ls', ['-la']);
console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (dato) => {
	console.log('está muerto??', process.killed);
	console.log(dato.toString());
})

process.on('exit', () => {
	console.log('el proceso terminó')
	console.log('está muerto??', process.killed);
});
