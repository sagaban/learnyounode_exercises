var http = require('http');
var url = require('url');
var portNumber = process.argv[2];

var server = http.createServer(function (request, response) {
	if (request.method == 'GET') { 
		var parsed_url = url.parse(request.url, true);
		var date = new Date(parsed_url.query.iso);
		var response_obj = {};
		switch(parsed_url.pathname){
			case '/api/parsetime':
				response_obj['hour'] = date.getHours();
				response_obj['minute'] = date.getMinutes();
				response_obj['second'] = date.getSeconds();
				break;
			case '/api/unixtime':
				response_obj['unixtime'] = date.getTime();
				break;
			default:
				return response.end('Ask for the right url\n')
		}
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.write(JSON.stringify(response_obj));
		response.end();
	}
});
server.listen(portNumber);


/* var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))*/
