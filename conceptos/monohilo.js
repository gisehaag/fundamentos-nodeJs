console.log('hola mundo!');

let i = 0;
setInterval(()=> {
	console.log(i);
	i++;

	if(i === 3) {
		var a = 3 + z; //esto va a generar un error porque z no existe
	}
}, 1000); //esta funcion va a seguir hasta el infinito y más allá!

console.log('segunda instuccion');
/*La desventaja de que sea monohilo es que al momento de ejecutarse un error
va a parar por completo el proceso */