/**
 * Web scraping o raspado web, es una técnica utilizada mediante programas
 * de software para extraer información de sitios web.​ Usualmente, estos programas
 *  simulan la navegación de un humano en la World Wide Web ya sea utilizando el
 * protocolo HTTP manualmente, o incrustando un navegador en una aplicación.
 */

 const puppeteer = require('puppeteer');

 //todo puppeteer funciona de forma asincrona.
 //Vamos a hacer funciones autoejecutadas, la sintaxis es esta:

 (async () => {
	//nuestro codido
	console.log('Lanzamos el navegador');
	const browser = await puppeteer.launch({ ignoreDefaultArgs: ['--disable-extensions'],});

	const page = await browser.newPage();
	await page.goto('https://es.wikipedia.org/wiki/Node.js');

	var titulo1 = await page.evaluate(() => {
		const h1 = document.querySelector('h1');
		console.log(h1.innerHTML);
		return h1.innerHTML;
	});

	console.log('titulo1');


	console.log('Cerramos el navegador!');
	browser.close();
	console.log('Navegador cerrado!');

 })();

