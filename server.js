//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// port the server listening on.
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});