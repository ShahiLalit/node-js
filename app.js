var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// create application/json parser
var jsonParser = bodyParser.json();

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", function(req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/person/:id", function(req, res) {
  res.render("person", {ID: req.params.id});
});

app.post("/person", urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send("Thank you" + JSON.stringify(req.body));
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});
app.get("/api", function(req, res) {
  res.json({firstname: "John", lastname: "Carter"});
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}...`);
});
