var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (request, response) {
	var fileStream = fs.createReadStream(file);
	fileStream.pipe(response);

	// fs.readFile(file, 'utf8', function(error, data) {
	// 	response.write(data);
	// });
});
server.listen(portNumber);

/* var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/
