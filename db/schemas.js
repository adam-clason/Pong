var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

exports.playerSchema = new Schema({
	name : String,
	games : Array, 
});

exports.setSchema = new Schema({
 	player1 : { type: Schema.Types.ObjectId, ref : 'Player' }, 
 	player2 : { type: Schema.Types.ObjectId, ref : 'Player' }, 
 	player1Score : Number,
 	player2Score : Number
});

exports.gameSchema = new Schema({
 	player1 : { type: Schema.Types.ObjectId, ref : 'Player' }, 
 	player2 : { type : Schema.Types.ObjectId, ref : 'Player' },
 	sets : Array,
 	player1SetsWon : Number,
 	player2SetsWon : Number,
 	date : Date
});

