/**
 * Created by arlt on 9/20/16.
 */
var ChatApp = React.createClass({

  getInitialState: function() {
    return {
      messages: [],
      socket: window.io('http://localhost:3000')
    }
  },

  componentDidMount: function(){
    this.state.socket.emit.on("new-message", function(msg){
      this.setState({ messages: this.state.messages.push(msg) })
    });
  },
  // render function for ChatApp
  render: function(){
  var self = this;

    return(
      <div>
        <ul>

        </ul>
        <input id="message" type="text"><button onClick={ () => self.submitMessage() } ></button>
      </div>
    )
  }
      });


ReactDOM.render(
  <ChatApp />,
  document.getElementById("chat")
);