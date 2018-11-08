// Dependencies
// =============================================================
var express = require("express");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content from the "public" directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(epress.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("hanldebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start server to listen for client requests
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});