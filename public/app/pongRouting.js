angular.module('pongRouting', ['ngRoute']).config([ '$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
 			.when('/createPlayer', {
 				controller : "CreatePlayerController",
 				templateUrl : "/app/views/editplayer.html"
 			});

 		$locationProvider.html5Mode(true);
	}
]);
