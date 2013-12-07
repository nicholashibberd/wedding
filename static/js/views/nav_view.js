define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var NavView = Backbone.View.extend({
    el: '.navbar',
    initialize: function(app) {
      this.closeCollapsedNavOnClick()
    },
    closeCollapsedNavOnClick: function() {
      this.$el.find('a').not('.dropdown-toggle').click(function() {
        console.log('clicked')
        var navbar_toggle = $('.navbar-toggle');
        if (navbar_toggle.is(':visible')) {
          navbar_toggle.trigger('click');
        }
      });
    }
  });

  return NavView;
});
