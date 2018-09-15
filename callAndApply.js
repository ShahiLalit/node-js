var obj = {
  name: "John Doe",
  greet: function() {
    console.log(`Hello ${this.name}`);
  },
};

obj.greet();
obj.greet.call({name: "Jane Doe"}); // Helps to borrow the function from the object and work on our inputs.

obj.greet.apply({name: "Lalit Singh Shahi"});

//Difference between the call and apply is the distribution of parameters while calling the function

var object = {
  name: "John Doe",
  greet: function(age, sex, job) {
    console.log(`Hello ${this.name}. I am ${age}, ${sex} & a ${job}.`);
  },
};

object.greet();
object.greet.call({name: "Jane Doe"}, 24, "female", "Software Dev");
object.greet.apply({name: "Lalit Singh Shahi"}, [25, "male", "Web Dev"]);

// call and apply let us change the keyword this points to...
