var Rsvp = function(row) {
  this.name = row.name;
  this.attending = row.attending;
  this.transport_church = row.transport_church;
  this.transport_reception = row.transport_reception;
  this.starter = row.starter;
  this.main = row.main;
  this.dessert = row.dessert;
}

Rsvp.getAll = function(conString, callback) {
  var pg = require('pg');
  var client = new pg.Client(conString);

  var allRsvps = [];
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to ' + conString, err)
    }
    var stmt = "SELECT * from rsvps";
    client.query(stmt, function(err, result) {
      if(err) {
        return console.error('error running query', err)
      }
      if (result.rows.length === 0) {
        callback(allRsvps);
      }
      for(var i=0; i< result.rows.length; i++) {
        var row = result.rows[i];
        allRsvps.push(new Rsvp(row));
        if (i === (result.rows.length - 1)) {
          callback(allRsvps);
        }
      }
      client.end();
    });
  });
}

Rsvp.submit = function(params, conString) {
  var pg = require('pg');
  var client = new pg.Client(conString);

  var factory = function() {
    return function(err) {
      if(err) {
        return console.error('could not connect to postges', err)
      }
      var stmt = "INSERT INTO rsvps VALUES($1, $2, $3, $4, $5, $6, $7)"
      var values = [
        params.name, 
        params.attending,
        params.transport_church,
        params.transport_reception,
        params.starter,
        params.main,
        params.dessert
      ];
      client.query(stmt, values, function(err, result) {
        if(err) {
          return console.error('error running query', err)
        }
        client.end();
      });
    }
  }
  client.connect(factory());
}

module.exports = Rsvp;

