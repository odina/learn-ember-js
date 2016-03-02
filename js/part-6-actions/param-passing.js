App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  actions: {
    User: function(user) {
      document.write('Welcome..');
    }
  }
});
