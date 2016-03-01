App = Ember.Application.create();

App.Car = Ember.Object.extend({
  CarName  : null,
  CarModel : null,

  disp: function() {
    document.write('Details of the car:<br>');
    document.write(this.get('fullDetails'));
    document.write('<br/><br/>');
  },

  fullDetails: function() {
    return this.get('CarName') + ' ' + this.get('CarModel');
  }.property('CarName', 'CarModel')
});

var car = App.Car.create({
  CarName  : 'Alto',
  CarModel : '800'
});

car.disp();
