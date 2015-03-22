
'use strict';

var http = require('http');
var bl = require('bl');
var responses = [];
var counter = 0;

for (var i = 0; i < 3; i++){
	(function (index){
		http.get(process.argv[i+2], function (response) {
			response.pipe(bl(function (err, data) {
		        if (err)
		          return console.error(err)
		        data = data.toString();
		        // console.log(index);
		        responses[index] = data;
		        counter = counter+1;
		        // console.log("counter: "+counter);
		        if (counter === 3){
		        	printData();
		        }
	      }));
    	});
    })(i);
};

function printData(){
	// console.log(responses);
	responses.forEach(function(e){
		console.log(e);
	});
}


/*var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)*/




    
    



var total = ["","",""];
var count = 0;

http.get(process.argv[2], function(response) {
	response.on("data", function (data) {
		
	});
	response.on("end", function (data) {
		total[0] = data;
		if (count > 2){
			count += 1;
		} else {
			printData();
		}
	});
});

http.get(process.argv[3], function(response) {
	response.on("data", function (data) {
		total[1] = data;
	});
	response.on("end", function (data) {
		if (count > 2){
			count += 1;
		} else {
			printData();
		}
	});
});

http.get(process.argv[4], function(response) {
	response.on("data", function (data) {
		total[2] = data;
	});response.on("end", function (data) {
		if (count > 2){
			count += 1;
		} else {
			printData();
		}
	});
});

function printData(){
	total.forEach(function(el) {
		console.log(el.toString());
	});
}