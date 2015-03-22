var mymodule = require('./p06modulo.js');

mymodule(process.argv[2], process.argv[3], function(error, data) {
	if(error) console.log(error);
});