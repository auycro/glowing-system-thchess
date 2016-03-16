var init = function() {
var board;
//var game = new Chess();

var cfg = {
  draggable: true,
  dropOffBoard: 'snapback',
  //position: 'start',
  position: 'rnbqkbnr/8/pppppppp/8/8/PPPPPPPP/8/RNBQKBNR', 
};

board = ChessBoard('board', cfg);

}; // end init()
$(document).ready(init);