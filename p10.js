var net = require('net');
var strftime = require('strftime');

var portNumber = process.argv[2];

var server = net.createServer(function (socket){
	var date = new Date();
	var string_date = date.getFullYear() + "-";
    string_date += leftPadding(date.getMonth()+1,2) + "-";
    string_date += leftPadding(date.getDate(),2)  + " ";     // devuelve día del mes, empieza en 1
    string_date += leftPadding(date.getHours(),2) + ":";
    string_date += leftPadding(date.getMinutes(),2);

    var string_date_mod = strftime('%Y-%m-%d %H:%M', date);
    // console.log(string_date);
    // console.log(string_date_mod);
    socket.end(string_date_mod);
});

server.listen(portNumber)

function leftPadding(number, padding){
	var string_number = number.toString();
	while (string_number.length < padding){
		string_number = "0"+string_number;
	}
	return string_number;
}

   /* var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))*/
