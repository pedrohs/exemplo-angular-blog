app.controller("homeCtrl", function($scope, $http){
	$http.get('/api/posts.json').success(function(data){
		$scope.posts = data;
	});
});