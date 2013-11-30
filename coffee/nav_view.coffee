@NavView = Backbone.View.extend
  el: '.navbar'

  initialize: (app) -> 
    @app = app
    @nav_items = @$el.find('ul li')

  select_nav_item: (id) ->
    @nav_items.removeClass('active')
    @$el.find('ul li#' + id).addClass('active')
