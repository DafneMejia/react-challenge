var dispatcher = require("../dispatcher");

module.exports = {
  createTiny:function(url){
    dispatcher.dispatch({
      actionType:"url:createTiny",
      url:url
    });
  },
  deleteURL:function(url){
    dispatcher.dispatch({
      actionType:"url:deleteURL",
      url:url
    });
  }
}
