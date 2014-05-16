 angular.module('pongResources', ['ngResource'])
 	.factory('Player', ['$resource', function($resource) {

 		return $resource('/api/players/:playerId', { playerId : "@_id" });

	}])
	.factory('Game', ['$resource', function($resource) {

		return $resource('/api/games/:gameId', { gameId : "@_id" });

	}]);