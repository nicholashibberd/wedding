@LoginView = Backbone.View.extend
  el: '#login_form'

  initialize: (app) -> 
    @app = app
    @form = @$el.find('form')

  events: ->
    "submit form" : 'submit_form'

  submit_form: (event) ->
    event.preventDefault()
    form_data = @form.serialize()
    $.ajax(
      url: '/login', 
      method: "post", 
      data: form_data
      success: (data, textstatus, jqXHR) ->
        console.log(data)
      error: (jqXHR, textStatus, errorThrown) ->
        console.log(errorThrown)
    )

