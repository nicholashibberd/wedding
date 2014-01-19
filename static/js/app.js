define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'js/router',
  'js/views/app_view',
  'js/views/nav_view',
  'js/views/map_view',
  'js/views/rsvp_view',
  'async!http://maps.google.com/maps/api/js?sensor=false'
], function($, _, Backbone, Bootstrap, Router, AppView, NavView, MapView, RsvpView) {

  return {
    initialize: function() {
      Router.initialize();
      var app = new AppView();
      var nav_bar = new NavView(this);
      var map_view = new MapView();
      var rsvp_view = new RsvpView();
    },
  }
});
