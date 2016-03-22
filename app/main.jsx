var React = require("react");
var ReactDOM = require("react-dom");
var UrlList = require("./components/UrlList.jsx");
var UrlStore = require("./stores/urlStore");
var url = [];
var getUrlCallback = function(url){
  _url = url;
  render();
};
UrlStore.onChange(getUrlCallback);


function render(){
    ReactDOM.render(<UrlList url={_url} />, document.getElementById("container"));
}
