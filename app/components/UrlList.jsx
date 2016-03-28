var React = require("react");
var UrlInfo = require("./UrlInfo.jsx");
var CreateTiny = require("./CreateTiny.jsx");
var ReactPropTypes = React.PropTypes;

module.exports = React.createClass({

  propTypes:{
    allUrls : ReactPropTypes.object.isRequired
  },

   render:function(){
      var allUrls = this.props.allUrls;
      var urls = [];

      for(var key in allUrls){
        urls.push(<UrlInfo key={key} info={allUrls[key]} />);
      }
       return(
          <div className="col-lg-6 col-lg-offset-3">
            {urls}
          </div>
       )
   }
});
