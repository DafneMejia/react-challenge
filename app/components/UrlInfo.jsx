var React = require("react");
var actions = require("../actions/UrlActions");

module.exports = React.createClass({
    deleteUrl:function(e){
      e.preventDefault();
      actions.deleteURL(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.originalURL}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteUrl}>&times;</span>
                </div>
                <div className="panel-body">http://localhost:7778/url/{this.props.info.tinyURL}</div>
            </div>
        )
    }
})
