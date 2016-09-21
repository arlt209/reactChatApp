/**
 * Created by arlt on 9/20/16.
 */
var ChatApp = React.createClass({

  // state //
  getInitialState: function() {
    return {
      messages: [],
      socket: window.io('http://localhost:3000')
    }
  },

  submitMessage: function(){
    var message = document.getElementById('message').value;
    console.log(message);
  },

   // on componentDidMount will push messages to messages state array //
  componentDidMount: function() {
    this.state.socket.on("new-message", function (msg){
    this.setState( {messages: this.state.messages.push(msg)} )
    });
  },

  // render function for ChatApp //
  render: function(){
  var self = this;

    return(
      <div>
        <ul>

        </ul>
        <input id="message" type="text" /> <button onClick={ () => self.submitMessage()}>Submit</button>
      </div>
    );
  }
});


// render DOm //
window.ReactDOM.render(
  <ChatApp />,
  document.getElementById("chat")
);