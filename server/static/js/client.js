'use strict';
var socket = io();
socket.on('move', function (move) {
	game.move(move);
	board.position(game.fen()); // fen is the board layout
	updateStatus();
});
var Client = {
	Hello: function(){
		console.log('Hello,World');
	},
	Init: function(){
		socket 

		socket.on('move', function (msg) {
    		game.move(msg);
    		board.position(game.fen()); // fen is the board layout
    		Client.UpdateStatus;
		});
	},
	Send: function(msg) {
    	console.log(msg);
    	socket.emit('message', msg);
    },
    SendMove: function(move) {
    	socket.emit('move', move);
    },
};