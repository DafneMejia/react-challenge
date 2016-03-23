var app = require("./app");

// DB Dependency
var mongoose = require("mongoose");

//Starting server
app.listen(7778,function(){
    console.log("Started listening on port", 7778);
});

//Connecting to DB
mongoose.connect("mongodb://localhost/urlCollection");
