/*
como podemos acceder a nuestro proceso, escucharlo y hacer cosas con esto.
documentación: https://nodejs.org/dist/latest-v14.x/docs/api/process.html

podrías llamarlo con:
const proceso = require('process');

pero process viene dentro de los módulos globales

*/



process.on('beforeExit', () => {
	console.log('el proceso va a terminar...')
});

process.on('exit', () => {
	console.log('el proceso ya terminó');
	setTimeout(() => {
		console.log('esto no se va a ejecutar nunca jamás!')
	}, 0);

});
// Una vez que se ha ejecutado el exit, y se ha escuchado el exit, ya te desconectaste del eventLoop, ya no podes ejecutar nada más

//PAra capturar un error:

process.on('uncaughtException', (err, origin) => {
	console.log('vaya! se nos olvidó capturar un error: ');
	console.error(err);
});

// funcionQueNoExiste();

console.log('si no se corrige el error esto no se ve');

/* PAra capturar promesas que se han rechazado y nadie tiene un catch
process.on('uncaughtRejection');
*/
