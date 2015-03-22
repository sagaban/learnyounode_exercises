//console.log(process.argv);

var total = 0;

for(var i=2; i<process.argv.length; i++) {
	total = total + Number.parseInt(process.argv[i]);
}

console.log(total);