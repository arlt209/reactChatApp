/**
 * Created by arlt on 9/20/16.
 */
var ChatApp = React.createClass({
  render: function(){
    return(
      <div>
        This will be The Chat App.
      </div>
    )
  }
});

ReactDOM.render(
  <ChatApp />,
  document.getElementById("chat")
);