(function() {

	"use strict";
	var http = require("http");
	var fs = require("fs");
	var querystring = require("querystring");
	var server;
  var nodeStatic = require('node-static');
  var staticServer = new nodeStatic.Server('./static');
  var User = require("./user")

	exports.start = function(homepageToServe, notFoundPageToServe, portNumber, callback) {
		if (!portNumber) throw new Error("Require port number");
		server = http.createServer();

		server.on("request", function(request, response) {
			if (request.url === '/' || request.url === '/index.html' ) {
        serveFile(response, homepageToServe);
      }
			if (request.url === '/login') {
        var data = authenticateUser(request)
        response.end(JSON.stringify(data)) }
      else if (isStaticRequest(request)) {
       var url = require('url');
       var pathname = decodeURI(url.parse(request.url).pathname);
       staticServer.serve(request, response);
      }
			else {
				response.statusCode = 404;
				serveFile(response, notFoundPageToServe);
			}
		});
		server.listen(portNumber, callback);
	};

	function serveFile(response, file) {
		fs.readFile(file, function(err, data) {
			if (err) throw err;
			response.end(data);
		});
	}

  function isStaticRequest(request) {
    var staticRequest = (request.url.match(/^\/(images|css|spec|js)/));
    return staticRequest;
  }

  function parseParams(request) {
    var data = ""
    var params = {}
    request.on('data', function(chunk) {
      data += chunk; 
    })
    request.on('end', function() {
      params = querystring.parse(data)
    });
    return params;
  }

  function authenticateUser(name, password) {
    var user = User.authenticate(name, password);
    // var user = { id: 1, name: 'Nick Hibberd', group_id: 1 }
    console.log(name);
    console.log(password)
    return {
      user: {},
      sessionId: 123, 
    };
    return user;
  }

	exports.stop = function(callback) {
		server.close(callback);
	};

}());
