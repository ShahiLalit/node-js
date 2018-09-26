var data = {
  name: "John Carter",
};

function greet(number, callback) {
  console.log("hello");
  let numTwice = number * 2;
  callback(numTwice);
}

greet(10, callbackFunction); // We do not call the function we pass the reference
greet(10, callbackFunction2); //  and call it when we need it.

function callbackFunction(data) {
  let numberTwice = data * 2;
  console.log(data);
  console.log("First Callback invoked!" + numberTwice);
}

function callbackFunction2(data) {
  let number = data * 3;
  console.log(data);
  console.log("Another callback invoked!!" + number);
}
