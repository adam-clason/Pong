var players = require('../db/players');

exports.insert = function(req, res) {
	var newPlayer = req.body; 
	newPlayer.games = newPlayer.games || [];	
	newPlayer.wins = 0;
	newPlayer.losses = 0; 
	players.insert(newPlayer, function(result) {
		res.json(result.data);			
	});
};

exports.findAll = function(req, res) {
	players.findAll(function(result) {
		res.json(result.data)
	});	
};