/**
 * Created by arlt on 9/20/16.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// connect //
io.on('connection', function(socket){
  console.log("we have a connection");
  socket.on("new-message", function(msg){
    console.log(msg);
    io.emit("receive-message", msg);
  })
  socket.on("test", function(){
    console.log("Mounted")
  })
});

http.listen('3000', function(){
  console.log("we are connected")
});