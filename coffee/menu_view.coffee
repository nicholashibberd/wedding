@MenuView = Backbone.View.extend
  el: '#container'
  initialize: -> 
    @render()
  render: -> 
    @$el.html("Menu goes here!!")

