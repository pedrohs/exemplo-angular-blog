app.controller('appCtrl', function($scope, $http){
	$http.get('/api/info.json').success(function(result){
		$scope.info = result;
	});
});