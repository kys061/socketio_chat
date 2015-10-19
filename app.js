var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
console.log('Client connected...');

client.on('chat message', function (msg) {
  console.log('from client : ' + msg);
  client.emit('chat message', msg);
  client.broadcast.emit('chat message', msg);
})

});

app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function(){
  console.log('Server running at http://localhost:' + server.address().port)
})
