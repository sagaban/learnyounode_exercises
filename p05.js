var fs = require('fs');
var path = require("path");

var leido = fs.readdir(process.argv[2], function(error, data) {
	
	var ext = "." + process.argv[3];
	
	for(var x=0; x<data.length; x++) {
		if(path.extname(data[x]) == ext) {
			console.log(data[x]);
		}
	}
	
});

