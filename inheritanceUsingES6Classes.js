class Person {
  constructor() {
    this.firstname = "John";
    this.lastname = "Carter";
  }

  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }

  getRollNumber() {
    console.log(`My rollNumber is ${this.rollNumber}`);
  }
}

class Students extends Person {
  constructor() {
    super();
    this.rollNumber = "15";
  }
}

var student = new Students();
student.greet();
student.getRollNumber();

console.log(Person);
console.log(Students);

console.log(`Prototype of Person: ${Person.__proto__}`);
console.log(`Prototype of Students: ${Students.__proto__}`);
console.log(`Prototype of student: ${student.__proto__}`);
