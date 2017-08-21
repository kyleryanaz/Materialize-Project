var express = require("express");
var path = require("path");
const app = express();
const port = 8080;

app.use(express.static("./views/"));

// homepage
app.get("/", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/views/index.html"));
});

// about page
app.get("/about", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/views/about.html"));
});

// error page
app.get("*", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/views/404.html"));
});
app.listen(port, function() {
  console.log("Listening on port " + port);
});
