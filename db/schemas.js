var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

exports.playerSchema = new Schema({
	name : String,	
	games : Array, 
	wins : Number,
	losses : Number
});

exports.gameSchema = new Schema({
 	player1 : { type: Schema.Types.ObjectId, ref : 'Player' }, 
 	player2 : { type : Schema.Types.ObjectId, ref : 'Player' },
 	sets : Array, 	 
 	date : Date
});

