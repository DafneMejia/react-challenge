var React = require("react");
var actions = require("../actions/UrlActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          originalURL:""
      }
    },
    createTiny:function(e){
        e.preventDefault();
        actions.createTiny(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
          <div className="col-lg-6 col-lg-offset-3">
            <div className="input-group">
              <input type="text" className="form-control" id="originalURL" name="originalURL" value={this.state.name} onChange={this.handleInputChange}  placeholder="Original Url" />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.createTiny}>Get Tiny!</button>
              </span>
            </div>
          </div>
        )
    }
})
