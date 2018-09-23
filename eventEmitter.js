// var Emitter = require("./emitter"); // Custom Event Emitter
var Emitter = require("events"); // Node js Internal Event Emitter
var eventConfig = require("./config").events;

var emit = new Emitter();

emit.on(eventConfig.GREET, function() {
  console.log("Hey! someone said Hello");
});

emit.on(eventConfig.GREET, function() {
  console.log("An event Occurred");
});

emit.on(eventConfig.MORINING, function() {
  console.log("Good Morning!");
});

console.log("Hello!!");

emit.emit(eventConfig.GREET);
emit.emit(eventConfig.MORINING);
