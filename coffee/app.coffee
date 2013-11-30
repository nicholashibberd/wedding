class @App
  constructor: ->
    @model = new AppModel()
    @routes = new AppRouter(this)
    @view = new AppView(this, @model)
    @nav_bar = new NavView(this)
    @login = new LoginView(this)
    @session = new Session()

jQuery ->
  app = new App()
  $('body').append(app.view.render().el)

  if app.session.authenticated()
    console.log('authenticated')
  else
    console.log('not authenticated')

  Backbone.history.start()
