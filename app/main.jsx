var React = require("react");
var ReactDOM = require("react-dom");
var UrlList = require("./components/UrlList.jsx");
var CreateTiny = require("./components/CreateTiny.jsx");
var UrlViewController = require("./components/UrlViewController.jsx");
var UrlStore = require("./stores/urlStore");

ReactDOM.render(
  <UrlViewController />,
  document.getElementById("container")
);
