var path = require('path');

// Express Dependencies
var express = require('express');
var bodyParser = require('body-parser');

//controllers
var urlController = require("./controller/urlController");

//express request pipeline
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",urlController);

module.exports = app;
