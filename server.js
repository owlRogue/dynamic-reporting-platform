// To https://github.com/owlRogue/dynamic-reporting-platform.git

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================

var serverPORT = 8000;
var port = process.env.PORT || serverPORT;
var app = express();


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});


// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// // Displays all characters
// app.get("/api/sheets", function(req, res) {
//   return res.json(characters);
// });
