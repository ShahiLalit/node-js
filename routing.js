var http = require("http");
var fs = require("fs");

http
  .createServer(function(req, res) {
    if (req.url === "/") {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      fs.createReadStream(`${__dirname}/index.html`).pipe(res); // using stream helps us to keep memory low and improves the performance of the application. Stream always deals with chunks of data.
    }

    if (req.url === "/json") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      var obj = {
        firstname: "Lalit",
        lastname: "Shahi",
      };
      res.end(JSON.stringify(obj));
    }
  })
  .listen(1337, "127.0.0.1");
