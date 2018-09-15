var Emitter = require("./emitter");

var emit = new Emitter();

emit.on("greet", function() {
  console.log("Hey! someone said Hello");
});

emit.on("greet", function() {
  console.log("An event Occurred");
});

emit.on("morning", function() {
  console.log("Good Morning!");
});

console.log("Hello!!");

emit.emit("greet");
emit.emit("morning");
