define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var MapView = Backbone.View.extend({
    initialize: function() {
      var allSaintsLatLng = new google.maps.LatLng(51.311980, -0.056643)
      var allSaintsMapOptions = {
        center: allSaintsLatLng,
        zoom: 15,
        scrollwheel: false
      };
      var map = new google.maps.Map(document.getElementById('getting-to-the-church-map'), allSaintsMapOptions);
      var marker = new google.maps.Marker({
        position: allSaintsLatLng,
        map: map,
        title:"All Saints Church, Sanderstead, Surrey"
      });

      var gorseHillLatLng = new google.maps.LatLng(51.301587, -0.597526)
      var gorseHillMapOptions = {
        center: gorseHillLatLng,
        zoom: 12,
        scrollwheel: false
      };
      var map = new google.maps.Map(document.getElementById('getting-to-the-reception-map'), gorseHillMapOptions);
      var marker = new google.maps.Marker({
        position: gorseHillLatLng,
        map: map,
        title:"Gorse Hill, Woking, Surrey"
      });
    },
  });

  return MapView;
});
