var React = require("react");
var UrlInfo = require("./UrlInfo.jsx");
var CreateTiny = require("./CreateTiny.jsx");

module.exports = React.createClass({
   render:function(){
       return(
          <div>
            <CreateTiny />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="col-lg-6 col-lg-offset-3">
                    {
                        this.props.url.map(function(u,index){
                              return(
                                  <UrlInfo info={u} key={"url"+index} />
                              )
                          })
                      }
                  </div>
             </div>
       )
   }
});
