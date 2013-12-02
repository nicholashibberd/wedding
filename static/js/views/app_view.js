define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
  var AppView = Backbone.View.extend({
    el: 'body',
    initialize: function(app, model) {
      this.app = app;
      this.model = model;
      this.render();
    },

    render: function() {
      this.$el.scrollspy({target: '#main-nav'})
    }
  });
  
  return AppView;
});
