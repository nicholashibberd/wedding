define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var MapView = Backbone.View.extend({
    el: '#map_canvas',
    initialize: function() {
      var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        scrollwheel: false
      };
      var map = new google.maps.Map(document.getElementById('getting-to-the-church-map'), mapOptions);
    },
  });

  return MapView;
});

