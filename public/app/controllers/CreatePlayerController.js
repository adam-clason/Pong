angular.module('pongApp')

	.controller('CreatePlayerController', ['$scope', 'Player',  function($scope, Player) {
		
		$scope.player = {};
		$scope.callInProcess = false; 
		$scope.result = null;

		$scope.save = function(player) {
			$scope.callInProcess = true;
			$scope.result = null;
			var newPlayer = new Player();
			newPlayer.name = player.name; 
			newPlayer.$save()
				.then(function() {
					$scope.reset();
					$scope.result = {
						success : true,
						message : "Player successfully created"
					}
				}).catch(function(err) {
					$scope.result = {
						success : false,
						message : "There was an error creating the player"
					}
				}).finally(function() {
					$scope.callInProcess = false;
				});
		};


		$scope.reset = function() {
			$scope.player = {};	
		};


	}]);