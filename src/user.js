var User = function(id, name) {
  this.name = name;
  this.id = id;

}

User.authenticate = function(name, password) {
  return new User(name, password)
}

module.exports = User;
