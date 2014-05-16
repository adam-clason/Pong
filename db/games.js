var mongoose = require('mongoose');
var schemas = require('../db/schemas');

var Game = mongoose.model('Game', schemas.gameSchema);

exports.findAll = function(callback) {
	Game.find(function(error, games) {
		var result = {
			error : error,
			data : games
		};
		callback(result);
	});
};

exports.insert = function(gameData, callback) {
	var game = new Game(gameData); 
	game.save(function(error, game) {
		var result = {
			successful :  error ? false : true,
			data : error ? {} : game,
			error : error
		};
		callback(result);
	});
};