function saludo(nombre){
	setTimeout(()=>{
		console.log('Buenas ', nombre)
	},1000)
}

function bienvenida(nombre, callback) {
	callback(nombre);
}


function hablar(callbackHablar){
	setTimeout(() => {
		console.log('bla, bla, bla');
		callbackHablar();
	},1000);
}

function adios(nombre) {
	console.log('Hasta luego ',nombre, '..!');
}

// podrías resolver un callback hell utilizando una función recursiva
// que es una función que se llama asi misma

function conversar(nombre, veces, callback){
	let i = 0;

	function seguirHablando() {
		if( i == 0 ) {
			bienvenida(nombre, saludo);
		}

		i++;

		if( veces >= 0 ) {
			// console.log(veces);
			hablar(()=>{
				veces--;
				seguirHablando();
			})
		} else {
			callback(nombre)
		}
	}

	seguirHablando();
}

conversar('gise', 2, adios);

