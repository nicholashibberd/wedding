define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var LoginView = Backbone.View.extend({
    el: '#login_form',
    initialize: function(app) {
      this.app = app;
      return this.form = this.$el.find('form');
    },
    events: function() {
      return {
        "submit form": 'submit_form'
      };
    },
    submit_form: function(event) {
      var form_data;
      event.preventDefault();
      form_data = this.form.serialize();
      return $.ajax({
        url: '/login',
        method: "post",
        data: form_data,
        success: function(data, textstatus, jqXHR) {
          return console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return console.log(errorThrown);
        }
      });
    } 
  });

  return LoginView;
});
