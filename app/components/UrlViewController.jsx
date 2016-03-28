var UrlInfo = require('./UrlInfo.jsx');
var UrlList = require('./UrlList.jsx');
var CreateTiny = require('./CreateTiny.jsx');

var React = require('react');
var UrlStore = require('../stores/urlStore');
var urlServices = require('../services/urlServices.js');

function getUrlState(){
  return{
    allUrls : UrlStore.getAll()
  };
}

var UrlViewController = React.createClass({
  getInitialState: function(){
    return getUrlState();
  },

  componentDidMount : function(){
    UrlStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UrlStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return(
      <div>
        <CreateTiny />
        <br />
        <br />
        <br />
        <br />
        <br />
        <UrlList
          allUrls = {this.state.allUrls}
        />
      </div>
    );
  },

  _onChange: function(){
    this.setState(getUrlState());
  }

});

module.exports = UrlViewController;
