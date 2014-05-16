var games = require('../db/games');


exports.update = function(req, res) {
	var game = req.body; 
};

exports.insert = function(req, res) {
	var newGame = req.body; 
	newGame.sets = newGame.sets || [];	
	games.insert(newGame, function(result) {
		res.json(result.data);			
	});
};

exports.findAll = function(req, res) {
	games.findAll(function(result) {
		res.json(result.data)
	});	
};