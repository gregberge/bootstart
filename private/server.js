"use strict";

var express = require('express'),
app = express(),
cons = require("consolidate"),
router = require("./router");


var APP_PORT = 80;

app.configure(function() {
	app.engine("html", cons.hogan);
	app.set("view engine", "html");
	app.set("views", __dirname + "/../public/templates");
	app.use(express['static'](__dirname + "/../public"));
  app.use(express.compress());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.configure('development', function() {
  APP_PORT = 3001;
});

router(app);
app.listen(APP_PORT);