define([
    'jquery', 
    'underscore', 
    'backbone',
    'js/lib/jquery/jquery.cookie'
],function($, _, Backbone) {
    var Session = Backbone.Model.extend({
      defaults: {
        access_token: null,
        user_id: null
      },
      initialize: function() {
        return this.load();
      },
      authenticated: function() {
        return Boolean(this.get("access_token"));
      },
      save: function(auth_hash) {
        $.cookie('user_id', auth_hash.id);
        return $.cookie('access_token', auth_hash.access_token);
      },
      load: function() {
        return this.set({
          user_id: $.cookie('user_id'),
        access_token: $.cookie('access_token')
        });
      }
    });  
  return Session;
})
