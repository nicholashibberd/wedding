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
    db.run("CREATE TABLE Users (name TEXT, encrypted_password TEXT)");
  }

  var stmt = db.prepare("INSERT INTO Users VALUES (?,?)")

  stmt.run("Nick", "test_pass123")
  stmt.run("Pete", "another_pass123")
  
  stmt.finalize();

  db.each("SELECT rowid AS id, name, encrypted_password FROM Users", function(err, row) {
    console.log(row.id + ": " + row.name + ": " + row.encrypted_password  );
  });
});

db.close();
