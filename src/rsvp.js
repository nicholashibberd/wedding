var Rsvp = function(row) {
  this.name = row.name;
  this.attending = row.attending;
  this.transport_church = row.transport_church;
  this.transport_reception = row.transport_reception;
  this.starter = row.starter;
  this.main = row.main;
  this.dessert = row.dessert;
}

Rsvp.getAll = function(callback) {
  var fs = require("fs");
  var file = "wedding.db";
  var exists = fs.existsSync(file);

  if(!exists) { return false };

  var sqlite3 = require("sqlite3").verbose();
  var db = new sqlite3.Database(file);
  var allRsvps = []

  db.each("SELECT * FROM Rsvps", function(err, row) {
    allRsvps.push(new Rsvp(row))
  }, callback);

  return allRsvps;
}

Rsvp.submit = function(params) {
  var fs = require("fs");
  var file = "wedding.db";
  var exists = fs.existsSync(file);

  if(!exists) {
    console.log("Creating DB file.");
    fs.openSync(file, "w");
  }

  var sqlite3 = require("sqlite3").verbose();
  var db = new sqlite3.Database(file);

  if(!exists) {
    db.run("CREATE TABLE Rsvps (name TEXT, attending INTEGER, transport_church INTEGER, transport_reception INTEGER, starter TEXT, main TEXT, dessert TEXT)");
  }

  var factory = function() {
    return function() {
      var stmt = db.prepare("INSERT INTO Rsvps VALUES (?,?,?,?,?,?,?)")

      stmt.run(
          params.name, 
          params.attending,
          params.transport_church,
          params.transport_reception,
          params.starter,
          params.main,
          params.dessert
          )
      stmt.finalize();
    }
  }

  db.serialize(factory());

  db.close();
}

module.exports = Rsvp;
