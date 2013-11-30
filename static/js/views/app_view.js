define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
  var AppView = Backbone.View.extend({
    el: '#container',
    initialize: function(app, model) {
      this.app = app;
      this.model = model;
      // this.render();
    },

    render: function() {
      this.$el.html("Hello World AMD!!");
    }
  });
  
  return AppView;
});
