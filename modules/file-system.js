// El módulo file system permite manejar archivos y directorios
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

// Primero hay que traerse el módulo de node de esta manera:
// (viene instalado por default con node)

const fileSystem = require('fs');

// Todo lo que se ejecute con módulos se va a procesar de forma asyncrona,
// si bien para todas los métodos está la alt sincrona (nombreMetodoSync), no se recomienda usarla porque
// podríamos estar bloqueando el proceso.

function leer(ruta, callback) {
	fileSystem.readFile(ruta, (error, data) => {
		//archivo ya está leído
		callback(data.toString())
	});
}


function escribir(ruta, contenido, callback) {
	fileSystem.writeFile(ruta, contenido, (error)=>{
		if(error) {
			console.error('No pude escribir el archivo', error);
		} else {
			console.log('Se escribió correctamente');
		}
	})
}

function borrar(ruta, callback) {
	fileSystem.unlink(ruta, callback);
}


//le pasamos el console.log como callback
leer(__dirname + '/texto-a-leer.md', console.log);
escribir(__dirname + '/archivo-a-escribir.txt', 'soy un archivo nuevo', console.log());
borrar(__dirname + '/archivo-a-escribir.txt', console.log);