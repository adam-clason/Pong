 angular.module('pongApp')

	.controller('LeaderBoardController', ['$scope', 'Player',  function($scope, Player) {

		$scope.leaderboard = Player.query() || []; 

	}]);