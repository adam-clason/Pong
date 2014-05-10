 angular.module('pongResources', ['ngResource'])
 	.factory('Player', ['$resource', function($resource) {

 		return $resource('/api/players/:playerId', { playerId : "@_id" });

 }]);