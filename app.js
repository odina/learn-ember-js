App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
  bool: true,
  check: function() {
    return this.bool;
  }.property('content.check')
});
