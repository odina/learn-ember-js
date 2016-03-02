App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  actions: {
    User: function(user) {
      this.controller.set('isExpanded', 'Welcome..');
    }
  }
});
