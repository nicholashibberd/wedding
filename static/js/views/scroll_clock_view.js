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
        startTime: "14:00",
        offset: 100
      }
      this.$el.scrollClock(elements, options)
    }
  })
  return ScrollClockView;
})
