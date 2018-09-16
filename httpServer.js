var http = require("http");
var fs = require("fs");

http
  .createServer(function(req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    var html = fs.readFileSync(`${__dirname}/index.html`, "utf8"); // without utf8 it will in the binary form, adding utf8 converts the data into string.

    var message = "Dynamic Hello World!!";
    html = html.replace("{message}", message);
    res.end(html);
  })
  .listen(1337, "127.0.0.1");
