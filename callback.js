var data = {
  name: "John Carter",
};

function greet(callback) {
  console.log("hello");
  callback(data);
}

greet(callbackFunction); // We do not call the function we pass the reference
greet(callbackFunction2); //  and call it when we need it.

function callbackFunction(data) {
  console.log(data);
  console.log("First Callback invoked!");
}

function callbackFunction2(data) {
  console.log(data.name);
  console.log("Another callback invoked!!");
}
