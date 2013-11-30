define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var NavView = Backbone.View.extend({
    el: '.navbar',
    initialize: function(app) {
      this.app = app;
      return this.nav_items = this.$el.find('ul li');
    },
    select_nav_item: function(id) {
      this.nav_items.removeClass('active');
      return this.$el.find('ul li#' + id).addClass('active');
    }
  });

  return NavView;
});

// (function() {
//   this.NavView = Backbone.View.extend({
//     el: '.navbar',
//     initialize: function(app) {
//       this.app = app;
//       return this.nav_items = this.$el.find('ul li');
//     },
//     select_nav_item: function(id) {
//       this.nav_items.removeClass('active');
//       return this.$el.find('ul li#' + id).addClass('active');
//     }
//   });

// }).call(this);
