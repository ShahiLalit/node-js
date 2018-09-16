var fs = require("fs");

var readable = fs.createReadStream(`${__dirname}/greet.txt`, {
  encoding: "utf8",
  highWaterMark: 16 * 1024,
});

var writable = fs.createWriteStream(`${__dirname}/greetCopy.txt`);

readable.on("data", function(chunk) {
  console.log(chunk);
  writable.write(chunk);
});

// Pipe in node js helps to make it better and faster...
