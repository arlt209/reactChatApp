/**
 * Created by arlt on 9/20/16.
 */
var ChatApp = React.createClass({

  // initial state / state //
  getInitialState: function() {
    return {
      messages: [],
      socket: window.io('http://localhost:3000'),
      user: undefined
    }
  },

  // on componentDidMount will push messages to messages array stored in state//
  componentDidMount: function() {
    var self = this;
    this.state.socket.on("receive-message", function (msg){
      var messages = self.state.messages;
          messages.push(msg);
      self.setState({messages: messages});
      console.log(self.state.messages);
    });
  },



  submitMessage: function(){
    var body = document.getElementById('message').value;
    var message = {
          body: body,
          user: this.state.user || "guest"
    };
    this.state.socket.emit("new-message", message);
    console.log(message);
  },


  pickUser: function(){
    var user = document.getElementById("user").value;
    this.setState({user: user})
  },




  // render function for ChatApp //
  render: function(){

    var self = this;
    var messages = self.state.messages.map(function(msg){
      return <li><strong>{msg.user}</strong><span> {msg.body}</span></li>
    });
      return(
        <div>
          <ul>
            {messages}
          </ul>
          <input id="message" type="text" /> <button onClick={ () => self.submitMessage()}>Send</button><br/>
          <input id="user" type="text" placeholder="choose username" /> <button onClick={() => self.pickUser()}>select a username</button>
        </div>
      );
  }
});


// render DOm //
window.ReactDOM.render(
  <ChatApp />,
  document.getElementById("chat")
);