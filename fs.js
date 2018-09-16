var fs = require("fs");

var greet = fs.readFileSync(`${__dirname}/greet.txt`, "utf8"); // "utf8" is added by default
// Running Synchronously, javascript engine waits till the file is read and then moves to next line of code.
console.log(greet);

var greetAsyncBuffer = fs.readFile(`${__dirname}/greet.txt`, function(
  err,
  data,
) {
  // Error-First Callback
  console.log(data); // Asynchronously ran the code.
  // Needs to pass utf8 as a parameter to convert the data into string in asynchronous code.
  // Or we can convert the binary buffer data to string using .toString() funciton.
});

var greetAsyncUTF8 = fs.readFile(`${__dirname}/greet.txt`, "utf8", function(
  err,
  data,
) {
  // Error-First Callback
  console.log(data); // Asynchronously ran the code.
  // Needs to pass utf8 as a parameter to convert the data into string in asynchronous code.
});

var greetAsyncToString = fs.readFile(`${__dirname}/greet.txt`, function(
  err,
  data,
) {
  // Error-First Callback
  console.log(data.toString()); // Asynchronously ran the code.
  // Or we can convert the binary buffer data to string using .toString() funciton.
});

console.log("Runs Before greetAsync because asynchronous code.");

/* ====> Error-First-Callback

      Callbacks take an error object as their first parameter.

      null if no error, otherwise will contain as object defining the error. This is a standard so we know in what order to place our parameters for our callbacks.

*/

// There is a problem with this approach that the code is using buffer to store the data and if more people are using the application at a time it can cause more memory to be used and can effect the performance of the application.
