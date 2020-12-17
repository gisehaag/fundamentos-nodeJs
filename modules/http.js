// https://nodejs.org/dist/latest-v14.x/docs/api/http.html

const http = require('http');

// para crear un servidor:
/*
http.createServer((request, response) => {
	console.log('nueva petición', request.url);


	escribe la respuesta al usuario
	response.writeHead(201, { //cambio el codigo de autenticación (que suele ser 200), por el 201 para el cliente sepa que esta todo bien
		'Content-Type': 'text/plain'
	});
	response.write('<h1>hola! ya se usar HTTP desde NodeJs! ;)</h1>');
	response.end();
}).listen(3000) //acá le decis que escuche en el puerto 3000, podrías ser 3001, 3002, 8080, etc

*/


// Ahora lo ordenamos para que quede mejor organizado:

http.createServer(router).listen(3000);

function router(request, response) {
	console.log('nueva petición', request.url);

	switch(request.url) {
		case '/hola':
			response.write('<h1>hola! que tal! ;)</h1>');
			response.end();
			break;

		default:
			response.write('<h1>Error 404, no se lo que queres</h1>');
			response.end();
	}
}


console.log('Escuchando http en el puerto 3000');