"use strict";

class Person {
  // synatactic sugar {Just a function constructor in JS}.... Very Different from classes from other languages{java, c#, ...}
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hello, " + this.firstname + " " + this.lastname);
  }
}

var john = new Person("John", "Carter");
john.greet();

var jane = new Person("Jane", "Carter");
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
