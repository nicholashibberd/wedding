var express = require("express");
var passport = require('passport');
var app = express();
var User = require("./src/user")
var compass = require("node-compass")
var path = require("path")

app.use(express.logger());
app.configure(function() {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(__dirname + '/static'));
  app.use(express.bodyParser());
  app.use(compass({
    project: path.join(__dirname, 'static'),
    sass: path.join(__dirname, 'static', 'css', 'sass'),
    css: path.join(__dirname, 'static', 'css')
  }));
});

var engines = require('consolidate');
app.engine('html', engines.underscore);
app.set('views', __dirname + '/views');

app.get('/', function(request, response) {
  response.render('./index.html')
});

app.post('/login', function(request, response) {
  var name = request.body.name
  var password = request.body.password
  var user = User.authenticate(name, password);
  response.json(
    {
      user: user,
      sessionId: 123
    }
  )
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
