define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var MenuView = Backbone.View.extend({
    el: '#container',
    initialize: function() {
      return this.render();
    },
    render: function() {
      return this.$el.html("Menu goes here!!");
    }
  });
  
  return MenuView;
});
