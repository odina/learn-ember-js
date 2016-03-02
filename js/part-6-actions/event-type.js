HelloEmber = Em.Application.create();

HelloEmber.ApplicationRoute = Em.Route.extend({
  model: function() {
    return HelloEmber.Data;
  }
});

HelloEmber.ApplicationController = Em.Controller.extend({
  actions: {
    user: function() {
      this.set('isShown', !this.isShown);
    }
  }
});

HelloEmber.Data = [];
HelloEmber.Data.push('Welcome...');
