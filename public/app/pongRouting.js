angular.module('pongRouting', ['ngRoute']).config([ '$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
 			.when('/createPlayer', {
 				controller : "CreatePlayerController",
 				templateUrl : "/app/views/editplayer.html"
 			})
 			.when('/leaderboard', {
 				controller : "LeaderBoardController",
 				templateUrl : "/app/views/leaderboard.html"
 			})
 			.when('/addGame', {
 				controller : "AddGameController",
 				templateUrl : "/app/views/addgame.html"
 			});;

 		$locationProvider.html5Mode(true);
	}
]);
