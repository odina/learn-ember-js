App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
  bool: false,
  check: function() {
    return this.bool;
  }.property('content.check')
});
