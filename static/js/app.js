define([
  'jquery',
  'underscore',
  'backbone',
  'js/router',
  'js/views/app_view',
  'js/views/nav_view',
  'js/views/login_view',
  'js/session'
], function($, _, Backbone, Router, AppView, NavView, LoginView, Session) {

  return {
    initialize: function() {
      Router.initialize();
      var app = new AppView();
      var nav_bar = new NavView(this);
      var login = new LoginView(this);
      var session = new Session();
    },
  }
});
