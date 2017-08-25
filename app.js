var express = require("express");
var path = require("path");
const app = express();
const port = 3000;

app.use(express.static("./views/"));

// serve entire public directory with HTML & CSS files inside
app.use(express.static(path.resolve(__dirname + "/public")));

// adjust routes with new path to views directory
app.get("/", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/index.html"));
});

// Nasa
app.get("/nasa", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/nasa.html"));
});

// SpaceX
app.get("/spacex", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/spacex.html"));
});

// contact page
app.get("/credits", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/credits.html"));
});

// error page
app.get("*", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/404.html"));
});
app.listen(port, function() {
  console.log("Listening on port " + port);
});
