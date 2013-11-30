requirejs.config({
  baseUrl: "../../",
  paths: {
    jquery: 'js/lib/jquery/jquery-1.10.2.min',
    underscore: 'js/lib/underscore/underscore',
    backbone: 'js/lib/backbone/backbone',
    jasmine: 'spec/lib/jasmine-1.3.1/jasmine',
    'jasmine-html': 'spec/lib/jasmine-1.3.1/jasmine-html'
  },

  shim: {
    'underscore': {
      'exports': '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    'jasmine': {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine) {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

  specs.push('spec/routing_spec');
  specs.push('spec/user_spec');

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });
})
