define([
    'underscore',
    'backbone'
  ], function() {
  var User = Backbone.Model.extend({
    initialize: function(options) {
      this.id = options.id;
      this.name = options.name;
    } 
  },
  {
    authenticate: function(id) { 
      return false
    }
  }
)
  return User
});
