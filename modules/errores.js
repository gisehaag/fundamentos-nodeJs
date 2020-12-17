function otraFuncion() {
	seRompe();
}

function seRompe() {
	return 3 + z;
}

function seRompeAsincrona(callback) {
	setTimeout(() => {
		try {
			return 3 + z;
		} catch(error) {
			console.error('error en mi función asincrona', error.message, error);
			callback(error);
		}
	}, 1500);
}

// cada vez que sepamos que una función puede romperse y generar un error lo podemos meter en un try, catch:
// el catch captura el error y ahi ves como lo manejas

try {
	// otraFuncion();
	seRompeAsincrona(()=>console.log('hay un error'));
	// Como esta función de va a ejecutar en otro hilo(therad), desde el hilo principal no tenemos forma de detectar esa rotura.
	// lo más lógico es meter el trycatch dentro de la funcion asincrona
} catch(error) {
	console.error('ups algo se rompió', error.message, error);
}

// si no tendríamos el try-catch, esto que sigue no podría ejecutarse, porque el error rompe la ejecucuón del código
// rompe el hilo

console.log('esto debe continuar');

