define([
   'jquery',
   'underscore',
   'backbone'
], function($, _, Backbone) {
  var AccommodationView = Backbone.View.extend({
    el: '#container',
    initialize: function() {
      return this.render();
    },
    render: function() {
      return this.$el.html("Accommodation goes here!!");
    }
  });
  return AccommodationView;
});
