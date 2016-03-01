App = Ember.Application.create();

App.TodosController = Ember.Controller.extend({
  todos: [
    Ember.Object.create({ isDone: true }),
    Ember.Object.create({ isDone: false }),
    Ember.Object.create({ isDone: true })
  ],

  remaining: function() {
    var todos = this.get('todos');
    return todos.filterBy('isDone', false).get('length');
  }.property('todos.@each.isDone')
});


var car = App.TodosController.create();
document.write('Remaining cars in my todolist: '+car.get('remaining'));
