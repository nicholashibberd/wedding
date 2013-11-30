(function() {
	"use strict";

	var server = require('./src/server.js');
	var port = process.argv[2];
	server.start('index.html', '404.html', port, function() {
		console.log("Server started");
	});
}());
