define([
  'js/models/user'
], function(User) {
  describe('User', function() {
    describe("initialize", function() {
      it("has an id", function() {
        var user = new User({id: 2})
        expect(user.id).toEqual(2)
      });
      it("has an name", function() {
        var user = new User({id: 3, name: "Test Name"})
        expect(user.name).toEqual("Test Name")
      });
    })
    describe("autheticate", function() {
      it("returns false if the user is not found", function() {
        var user = User.authenticate('not_found_user')
        expect(user).toEqual(false)
      });
    })
  });
})
