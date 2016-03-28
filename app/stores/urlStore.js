var dispatcher = require("../dispatcher");
var EventEmitter = require("events").EventEmitter;
var urlServices = require("../services/urlServices");
var assign = require("object-assign");
var promise = require("es6-promise");

var _urls = {};

function getUrls(){
  urlServices.getUrls().then(function(res){
     _urls = {};
     for(var k in res){
       _urls[k] = res[k];
     }
     UrlStore.emitChange();
  });
}

function createTiny(url) {
  urlServices.createTiny(url).then(function (res) {
    console.log(res);
    getUrls();
  });
}

function deleteUrl(url) {
  urlServices.deleteUrl(url).then(function (res) {
    console.log(res);
    getUrls();
  });
}

var UrlStore = assign({}, EventEmitter.prototype, {
  getAll : function(){
    return _urls;
  },

  emitChange : function(){
    this.emit('change');
  },

  addChangeListener: function(callback){
    this.on('change',callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

dispatcher.register(function (payload) {
  var split = payload.actionType.split(":");
  if (split[0] === "url") {
    switch (split[1]) {
      case "createTiny":
        createTiny(payload.url);
        break;
      case "deleteURL":
        deleteUrl(payload.url);
        break;
    }
  }
});

module.exports = UrlStore;
