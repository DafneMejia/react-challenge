var mongoose = require("mongoose");
var UrlModel=require("../data/url");
var _=require("underscore");

var router = require("express").Router();

router.route("/urls/:id?").get(getUrls).post(createTiny).delete(deleteUrl);

function getUrls(req,res){
  UrlModel.find(function(err,urls){
    if(err)
      res.send(err);
    else
      res.json(urls);
  });
}


function createTiny(req,res){
  // generate a hash from string
  var maxTiny = "";
  UrlModel.findOne()
  .sort({tinyURL : -1})  // give me the max
  .select({tinyURL:1})
  .exec(function (err, max) {
    if(err)
      res.send(err);
    else
      if(max!=null)
        maxTiny = max.tinyURL;
      else
        maxTiny = "aaaa";

    for(var i=0;i<4;i++){
      var index = 3;
      var newTiny = "";
      if (maxTiny.charAt(index)<'z'){
        newTiny = maxTiny.substring(0,3) + String.fromCharCode(maxTiny.charCodeAt(index) + 1) ;
      }else{
        newTiny = 'a';
        if (maxTiny.charAt(--index)<'z'){
          newTiny = maxTiny.substring(0,2) + + String.fromCharCode(maxTiny.charCodeAt(index) + 1) + newTiny;
        }else{
          newTiny = 'a' + newTiny;
          if (maxTiny.charAt(--index)<'z'){
            newTiny = maxTiny.charAt(0) + + String.fromCharCode(maxTiny.charCodeAt(index) + 1) + newTiny;
          }else{
            newTiny = 'a' + newTiny;
            if (maxTiny.charAt(--index)<'z'){
              newTiny = + String.fromCharCode(maxTiny.charCodeAt(index) + 1) + newTiny;
            }
          }
        }
      }
    }

    var url = new UrlModel({"originalURL" : req.body.originalURL, "tinyURL":newTiny});
    url.save(function(err){
      if(err)
        res.send(err);
      else
        res.json(url);
      });
  });



  //var url = new UrlModel({"originalURL" : req.body.originalURL, "tinyURL":value});
  //_.extend({}, req.body)
  //url.originalURL = req.body;

  // generate a hash from string
  // var crypto = require('crypto'),
  //     text = req.body,
  //     key = 'secretTiny'
  //
  // // create hahs
  // var hash = crypto.createHmac('sha512', key)
  // hash.update(text)
  // var value = hash.digest('hex')
  //url.tinyURL = "value";

}

function deleteUrl(req,res){
  var id = req.params.id;
  UrlModel.remove({ _id:id}, function(err,removed){
    if(err)
      res.send(err);
    else
      res.json(removed);
  });
}

router.get('/url/*' , function (req,res){
    var tinyURL = req.originalUrl;
    tinyURL = tinyURL.substr(5,tinyURL.length);
       UrlModel.findOne({'tinyURL': tinyURL}, 'originalURL' ,function(err, url){
        if(err)
          res.send(err);
        else
          if(url!=null)
            res.redirect(url.originalURL);
          else
            res.redirect("../../index.html");

    });
});
module.exports = router;
