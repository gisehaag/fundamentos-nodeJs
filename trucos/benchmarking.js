let suma = 0;
let suma2 = 0;

console.time('todo');
//para saber cuánto tarda en ejecutarse algo, encerramos entre console.time y console.timeEnd
console.time('bucle');

for (let i = 0; i < 100000; i++) {
	suma += 1;
}

console.timeEnd('bucle');


console.time('bucle2');

for (let i = 0; i < 1000000000; i++) {
	suma2 += 1;
}

console.timeEnd('bucle2');

//y qué pasa con las funciones asincronas?? funciona igual ;) acá un ejemplo...

function asincrona() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('termina el proceso asincrono');
			resolve();
		}, 1000)
	})
}
console.time('asincrono');
console.log('empieza el proceso asincrono...')

asincrona()
	.then(() => console.timeEnd('asincrono'));



console.timeEnd('todo');




