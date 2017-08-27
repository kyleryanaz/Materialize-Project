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
app.get("/videos", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/videos.html"));
});

// photos
app.get("/photos", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/photos.html"));
});

// contact page
app.get("/news", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/news.html"));
});

// error page
app.get("*", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/public/views/404.html"));
});
app.listen(port, function() {
  console.log("Listening on port " + port);
});
