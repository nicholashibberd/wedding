var express = require("express");
var passport = require('passport');
var app = express();
var Rsvp = require("./src/rsvp")
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

app.post('/rsvp', function(request, response) {
  var params = {
    name: request.body.name,
    attending: request.body.attending,
    transport_church: request.body.transport_church,
    transport_reception: request.body.transport_reception,
    starter: request.body.starter,
    main: request.body.main,
    dessert: request.body.dessert,
  }
  var rsvp = Rsvp.submit(params);
  response.json(
    {
      rsvp: rsvp,
    }
  )
});

app.get('/rsvp', function(request, response) {
  rsvps = Rsvp.getAll(function() {
    response.json(rsvps)
  })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
