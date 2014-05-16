 angular.module('pongApp')

	.controller('AddGameController', ['$scope', 'Player', 'Game',  function($scope, Player, Game) {
		
		$scope.save = function() {
			if ($scope.selectedPlayer1 && $scope.selectedPlayer2) {				
				$scope.callInProcess = true;
				var newGame = new Game();
				newGame.player1 = $scope.selectedPlayer1._id;
				newGame.player2 = $scope.selectedPlayer2._id;
				newGame.sets = $scope.sets; 
				console.log(newGame);
				newGame.$save().then(function(){
					$scope.result = {
						success : true,
						message : "Game successfully saved"
					};
					$scope.reset();
				}).catch(function() {
					$scope.result = {
						success : true,
						message : "Error saving game"
					};
				}).finally(function() {
					$scope.callInProcess = false; 
				});
			}
		};

		$scope.addSet = function() {
			$scope.sets.push({
				'score1' : '',
				'score2' : ''
			});
		};

		$scope.removeSet = function(index) {
			$scope.sets.splice(index, 1);
		};

		$scope.reset = function() {
			$scope.selectedPlayer1 = {};
			$scope.selectedPlayer2 = {};
			$scope.sets = [];
			$scope.addSet();
		};

		$scope.result = null;
		$scope.callInProcess = false;
		$scope.players = Player.query() || [];
		$scope.reset();
	}]);