define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/menu_view',
  'js/views/accommodation_view'
], function($, _, Backbone, MenuView, AccommodationView) {
  var Router = Backbone.Router.extend({
    routes: {
      "index": "index",
      "menu": "menu",
      "accommodation": "accommodation"
    },

    index: function() { console.log('index called') },
    menu: function() { console.log('menu called') },
  });

  var initialize = function() {
    var router = new Router;
    router.on('index', function() {
      console.log('index called');
    });

    router.on('menu', function() {
      console.log('menu called')
      var menu;
      menu = new MenuView();
      menu.render().el;
      return this.app.nav_bar.select_nav_item('menu');
    });

    router.on('accommodation', function() {
      var accommodation;
      accommodation = new AccommodationView();
      accommodation.render().el;
      return this.app.nav_bar.select_nav_item('accommodation');
    });

    Backbone.history.start()
    return router;
  };

  return {
    initialize: initialize
  };
});
