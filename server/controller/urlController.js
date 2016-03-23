var mongoose = require("mongoose");
var UrlModel=require("../data/url");
var crypto = require("crypto");

var _=require("underscore");

var express = require('express');
var router = express.Router();

router.route("/urls/:id?")
  .get(getUrls)
  .post(createTiny)
  .delete(deleteUrl);

function getUrls(req,res){
  UrlModel.find(function(err,urls){
    if(err)
      res.send(err);
    else
      res.json(urls);
  });
}


function createTiny(req,res){

  var hash = crypto.randomBytes(2).toString('hex');
  UrlModel.findOne({'tinyURL': hash}, function(err, url){
    if(url==null){
      var url = new UrlModel(_.extend({"tinyURL":hash},req.body));

      url.save(function(err){
        if(err){
          res.send(err);
        }
        else{
          res.json(url);
        }
      });
    }else{
      return createTiny(req,res);
    }
  });
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
