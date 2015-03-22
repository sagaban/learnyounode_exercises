var http = require('http');
var bl = require('bl')


http.get(process.argv[2], function(response) {
	response.pipe(bl(function (err, data){
			var data_string = data.toString();
			console.log(data_string.length);
			console.log(data_string);

		})
	);
});


/*   var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })
*/


	