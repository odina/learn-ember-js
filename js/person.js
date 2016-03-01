App = Ember.Application.create();

App.Person = Ember.Object.extend({
  firstName : null,
  lastName  : null,
  age       : null,
  mobileNo  : null,

  Person: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  Details: function() {
    return 'Name: ' + this.get('Person') + '<br/>' +
           'Age: ' + this.get('age') + '<br/>' +
           'Mobile No: ' + this.get('mobileNo') + '<br/>';
  }.property('Person', 'age', 'mobileNo')
});

var person = App.Person.create({
  firstName : 'Odina',
  lastName  : 'A',
  age       : '26',
  mobileNo  : '123456789'
});

person.set('lastName', 'Abellana');

document.write(person.get('Details'));
