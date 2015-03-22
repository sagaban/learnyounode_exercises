var fs = require('fs');

var leido = fs.readFile(process.argv[2], 'utf8', function(error, data) {
	var texto = data.split("\n");

	console.log(texto.length-1);
});

