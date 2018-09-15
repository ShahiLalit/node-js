var util = require("util");

function Person() {
  this.firstname = "John";
  this.lastname = "Carter";
}

Person.prototype.greet = function() {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
};

function Students() {
  Person.call(this);
  this.rollNumber = "15";
}

util.inherits(Students, Person);

var student = new Students();
student.greet();
