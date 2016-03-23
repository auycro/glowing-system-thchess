var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '/static')));
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
 	res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', function(socket) {
    console.log('new connection ' + socket);

    socket.on('message', function(msg) {
    	console.log('Got message from client: ' + msg);
    });
});

http.listen(port, function() {
    console.log('listening on *: ' + port);
});