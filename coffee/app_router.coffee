@AppRouter = Backbone.Router.extend(
  routes: 
    "index": "index"
    "menu": "menu"
    "accommodation": "accommodation"

  initialize: (app) -> @app = app
  
  index: ->
    console.log('index called')

  menu: (event) ->
    menu = new MenuView()
    menu.render().el
    @app.nav_bar.select_nav_item('menu')

  accommodation: (event) ->
    accommodation = new AccommodationView()
    accommodation.render().el
    @app.nav_bar.select_nav_item('accommodation')
)
