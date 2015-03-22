var fs = require('fs');

var leido = fs.readFileSync(process.argv[2]);

var texto = leido.toString().split("\n");

console.log(texto.length-1);