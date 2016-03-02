App = Ember.Application.create();

App.Router.map(function() {
  this.resource('info');
  this.resource('records', { path: 'records/:records_id' });
});

App.ApplicationController = Em.Controller.extend({
  recoModel: function() {
    return { records_id: 1, name: 'Docs List' }
  }.property()
});
