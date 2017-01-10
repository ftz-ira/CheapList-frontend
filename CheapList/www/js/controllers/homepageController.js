'use strict';

app.controller('homepage',function($scope,$http){

	var url = "http://localhost:8080/cheaplist/members/69/lists";

		var list = null;
		$http.get(url).success(function(response){

			if(response){

				//sections = response;
				$scope.lists = response.shoppingLists;
		
				console.log("ok");
				
			}else{
				console.log("fail");
			}
			//return sections;
		})


})