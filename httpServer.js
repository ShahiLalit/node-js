var http = require("http");
var fs = require("fs");

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     fs.createReadStream(`${__dirname}/index.html`).pipe(res); // using stream helps us to keep memory low and improves the performance of the application. Stream always deals with chunks of data.

//     // var html = fs.readFileSync(`${__dirname}/index.html`, "utf8"); // without utf8 it will in the binary form, adding utf8 converts the data into string.

//     // var message = "Dynamic Hello World!!";
//     // html = html.replace("{message}", message);
//     // res.end(html);
//   })
//   .listen(1337, "127.0.0.1");

// Outputting json data

http
  .createServer(function(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    var obj = {
      firstname: "Lalit",
      lastname: "Shahi",
    };
    res.end(JSON.stringify(obj)); // Serializing : Translating an object into a format that can be store or transferred.
  })
  .listen(1337, "127.0.0.1");
