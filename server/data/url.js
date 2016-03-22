var mongoose = require("mongoose");

var urlSchema = mongoose.Schema({
  originalURL:String,
  tinyURL:String
});

module.exports = mongoose.model("url",urlSchema);
