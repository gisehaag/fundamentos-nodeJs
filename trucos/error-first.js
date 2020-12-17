//Error First Callback
//como convencion cuando se llama a un callback, es pasar el error como primer argumento

function asincrona(callback) {
	setTimeout(()=> {
		try {
			let a = 3 + z; //va a dar error, es el objetivo del ejemplo 😏😏
			callback(null, a);
		} catch(error) {
			callback(error) //podría pasarse como segundo argumento un null
		}
	}, 1000)
}

asincrona((error, dato)=> {
	if(error) {
		console.error('tenemos un error', error);
		// throw error; no va a funcionar porque estamos dentro una de una función asincrona
		return false; //con esto paramos la ejecución de la funcion
	}
	console.log('todo salió bien! mi dato es: ', dato)
});