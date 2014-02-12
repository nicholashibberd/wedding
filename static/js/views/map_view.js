define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var MapView = Backbone.View.extend({
    initialize: function() {
      var allSaintsLatLng = new google.maps.LatLng(51.335453, -0.0746121)
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
      var allSaintsAddress = "<b>All Saints Church</b><br />" +
        "Onslow Gardens<br />" +
        "Sanderstead<br />" +
        "Surrey<br />" +
        "CR2 9AB"
      var allSaintsInfoWindow = new google.maps.InfoWindow({
        position: allSaintsLatLng,
        content: allSaintsAddress
      });
      allSaintsInfoWindow.open(map);

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
      var gorseHillAddress = "<b>Gorse Hill</b><br />" +
        "Hook Heath Road<br />" +
        "Woking<br />" +
        "Surrey<br />" +
        "GU22 0QF"
      var gorseHillInfoWindow = new google.maps.InfoWindow({
        position: gorseHillLatLng,
        content: gorseHillAddress
      });
      gorseHillInfoWindow.open(map);
    },
  });

  return MapView;
});
