App = Ember.Application.create();

App.Student = Ember.Object.extend({
  rollnum : 'null',
  name    : 'null'
});

App.StudentInfo = App.Student.extend({
  disp: function() {
    var roll = this.get('rollnum');
    var name = this.get('name');

    document.write('Student lists:<br/>');
    document.write('Roll No: '+roll+'<br/>Name: '+name);
    document.write('<br/><br/>');
  }
});

var stud = App.StudentInfo.create({
  rollnum : '12',
  name    : 'Manu'
});

stud.disp();
