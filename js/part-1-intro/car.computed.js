App = Ember.Application.create();

App.Car = Ember.Object.extend({
  CarName  : null,
  CarModel : null,
  CarYear  : null,

  fullDetails: Ember.computed('CarName', 'CarModel', 'CarYear', function() {
    var name  = this.get('CarName');
    var model = this.get('CarModel');
    var year  = this.get('CarYear');

    return 'Car Name: ' + name + '<br/>' +
           'Car Model: ' + model + '<br/>' +
           'Car Year: ' + year + '<br/>';
  })
});

var car = App.Car.create({
  CarName  : 'Alto',
  CarModel : '800',
  CarYear  : '2012'
});


document.write(car.get('fullDetails'));
