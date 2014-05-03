var mongoose = require('mongoose');
var schemas = require('../db/schemas');

var Player = mongoose.model('Player', schemas.playerSchema);

exports.insert = function(playerData, callback) {	
	var player = new Player(playerData);
	player.save(function(error, player) {
		var result = {
			successful :  error ? false : true,
			data : error ? {} : player,
			error : error
		};
		callback(result);
	});
};

exports.findAll = function(callback) {
	Player.find(function(error, players) {
		var result = {
			error : error,
			data : players
		};
		callback(result);
	});
};