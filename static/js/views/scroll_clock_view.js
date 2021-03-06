define([
    'jquery',
    'underscore',
    'backbone',
    'js/lib/jquery/jquery.scrollclock'
],function($, _, Backbone) {
  var ScrollClockView = Backbone.View.extend({
    el: '#scroll-clock',
    initialize: function(app) {
      var elements = $('.scroll-clock');
      var options = {
        startTime: "July 18, 2014 18:00",
        offset: 0,
        fix: 930
      }
      this.$el.scrollClock(elements, options)
    },
  })
  return ScrollClockView;
})
