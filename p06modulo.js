module.exports = function (dir, ext, callback) {

	var fs = require('fs');
	var path = require("path");
	
	var leido = fs.readdir(dir, function(error, data) {

		if (error)
          return callback(error);
		
		//ext = "." + ext;

		var returndata = data.filter(function(element, index, array) {
			return path.extname(element) === '.' + ext;
		});
		
		/*
		for(var x=0; x<data.length; x++) {
			if(path.extname(data[x]) == ext) {
				console.log(data[x]);
			}
		}
		*/
		//console.log(returndata.length);
		
		returndata.forEach(function(e){
			console.log(e);
		});

		
		callback(null, returndata);
	});

}