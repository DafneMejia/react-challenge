var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var schoolController = require("./controller/urlController");

//express request pipeline
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json());
app.use("/",schoolController);
app.listen(7778,function(){
    console.log("Started listening on port", 7778);
})

mongoose.connect("mongodb://localhost/urlCollection");
