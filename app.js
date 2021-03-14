var express = require("express");
var app = express();
var path = require("path");

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("index");
	//response.send("<h1>Coming Soon!</h1>");
});

app.get("/btc/:page", function(req, res) {
        var page = req.params.page;
	res.render("btcKeypage",{ page });
	//res.send("<h1>page: " + page + "</h1>"); // Send Hello World
});


// Set the application to listen on port 80
app.listen(80, function() {
	console.log("Application has started on port 80"); // Log console message
});
