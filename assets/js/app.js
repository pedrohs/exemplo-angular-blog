var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "/assets/templates/home.html",
		controller: "homeCtrl"
	}).state('post', {
		url: "/post/:postId",
		templateUrl: "/assets/templates/post.html",
		controller: "postCtrl"
	});
});