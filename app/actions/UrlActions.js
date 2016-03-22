var dispatcher = require("../dispatcher");

module.exports = {
  createTiny:function(url){
    dispatcher.dispatch({
      url:url,
      type:"url:createTiny"
    });
  },
  deleteURL:function(url){
    dispatcher.dispatch({
      url:url,
      type:"url:deleteURL"
    });
  }
}
