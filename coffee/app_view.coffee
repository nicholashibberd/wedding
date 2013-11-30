@AppView = Backbone.View.extend
  el: '#container'
  initialize: (app, model) -> 
    @app = app
    @model = model
    @render()
  render: -> 
    @$el.html("Hello World")
  render_accommodation: -> 
    @$el.html("Hello World")
