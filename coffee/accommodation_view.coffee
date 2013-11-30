@AccommodationView = Backbone.View.extend
  el: '#container'
  initialize: -> 
    @render()
  render: -> 
    @$el.html("Accommodation goes here!!")

