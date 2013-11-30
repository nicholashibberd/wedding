requirejs.config({
  baseUrl: "../",
  paths: {
    jquery: 'js/lib/jquery/jquery-1.10.2.min',
    underscore: 'js/lib/underscore/underscore',
    backbone: 'js/lib/backbone/backbone'
  },

  shim: {
    'underscore': {
      'exports': '_'
    },
    'backbone': {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    }
  }
});

require(['js/app'], function(App) {
  App.initialize();
})

