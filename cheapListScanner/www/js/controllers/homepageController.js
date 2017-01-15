'use strict';

app.controller('homepage',function($scope,$http){

	var url = "http://localhost:8080/cheaplist/members/69/lists";

		$http.get(url).success(function(response){

			if(response){
				
				//sections = response;
				$scope.lists = response.shoppingLists;
		
				console.log("list ok go to section");

			}else{
				console.log("fail");
			}
			//return sections;
		})
})