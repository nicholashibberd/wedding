describe 'AppRouter routes', ->
  beforeEach ->
    @router = new AppRouter

  it "has an index route", ->
    expect(@router.routes.index).toEqual('index')
    expect(@router.index).toBeDefined()

  it "has a menu route", ->
    expect(@router.routes.menu).toEqual('menu')
    expect(@router.menu).toBeDefined()
