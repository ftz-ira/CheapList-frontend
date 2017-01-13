'use strict';

app.controller('sectionList',function($scope,$http,$stateParams,$rootScope){

	// passage de l'id de liste pour ajouter les produits
	$rootScope.listId = $stateParams.listId;
	
	
	var url = 'http://localhost:8080/cheaplist/sections';

	$http.get(url).success(function(response){

		if(response){
				//sections = response;
				$scope.sections = response;

				console.log("categories ok go to products");
				
			}else{
				console.log("fail");
			}
		})
})
