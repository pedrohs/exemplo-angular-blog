app.controller("postCtrl", function($scope, $http, $stateParams){
	var postId = $stateParams.postId;
	$http.get('/api/posts.json').success(function(data){
		var i = data.length;
		while(i--){
			if(data[i].id == postId) break;
		}
		if(data[i] != undefined){
			$scope.post = data[i];
		}
		
	});
});