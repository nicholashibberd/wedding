var fs = require("fs");
var file = "wedding.db";
var exists = fs.existsSync(file);

if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE Rsvps (name TEXT, attending INTEGER)");
  }

  var stmt = db.prepare("INSERT INTO Rsvps VALUES (?,?)")

  stmt.run("Nick", 1)
  stmt.run("Pete", 0)
  
  stmt.finalize();

  db.each("SELECT rowid AS id, name, attending FROM Rsvps", function(err, row) {
    console.log(row.id + ": " + row.name + ": " + row.attending  );
  });
});

db.close();
