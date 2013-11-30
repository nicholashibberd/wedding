describe "App", ->
  it "has a model", ->
    app = new App()
    expect(app.view).toBeDefined()

  it "creates a view with reference to the model", ->
    app = new App()
    expect(app.view.model).toBe app.model

  it "defines routes", ->
    app = new App()
    expect(app.routes).toBeDefined()
