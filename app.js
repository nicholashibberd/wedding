var express = require("express");
var passport = require('passport');
var app = express();
var Rsvp = require("./src/rsvp")
var compass = require("node-compass")
var path = require("path")
var env = process.env.NODE_ENV;
var db_config = {
  'development': "postgres://wedding:password@localhost/wedding",
  'production': process.env.DATABASE_URL 
}
var conString = db_config[env];
console.log('###############################');
console.log('ENV: ' + env);
console.log('dataase_url: ' + process.env.DATABASE_URL);
console.log('db_config dev: ' + db_config.development);
console.log('db_config prod: ' + db_config.production);
console.log('###############################');

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
  var rsvp = Rsvp.submit(params, conString);
  response.json(
    {
      rsvp: rsvp,
    }
  )
});

app.get('/rsvp', function(request, response) {
  Rsvp.getAll(conString, function(results) {
    response.json(results);
  })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
