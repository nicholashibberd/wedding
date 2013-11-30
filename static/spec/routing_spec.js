define(
  ['js/router'], 
  function(Router) {
  describe('Router routes', function() {
    var _this = this;
    beforeEach(function() {  
      _this.router = Router.initialize()
    });
    afterEach(function() {  
      Backbone.history.stop()
    });
    it("has an index route", function() {
      expect(_this.router.routes.index).toEqual('index');
      expect(_this.router.index).toBeDefined();
    });
    it("has a menu route", function() {
      expect(_this.router.routes.menu).toEqual('menu');
      expect(_this.router.menu).toBeDefined();
    });
  });
});
