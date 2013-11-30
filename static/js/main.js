requirejs.config({
  baseUrl: "../",
  paths: {
    jquery: 'js/lib/jquery/jquery-1.10.2.min',
    underscore: 'js/lib/underscore/underscore',
    backbone: 'js/lib/backbone/backbone',
    bootstrap: 'js/lib/bootstrap.min'
  },

  shim: {
    'underscore': {
      'exports': '_'
    },
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    'bootstrap': {
      'deps': ['jquery']
    }
  }
});

require(['js/app'], function(App) {
  App.initialize();
})

