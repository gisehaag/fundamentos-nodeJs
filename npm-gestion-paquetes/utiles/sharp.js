//sharp sirve para manejar imagenes

const sharp = require('sharp');

sharp('favicon.png')
	.resize(80)
	.grayscale()
	.toFile('resize.png');

// toda la documentación en https://sharp.pixelplumbing.com/api-constructor