'use strict';

app.controller('sectionList',function($scope,sectionProvider,$http){

	//$scope.sections = sectionProvider.getSections();

	var url = 'http://localhost:8080/cheaplist/sections';
		var sections = null;
		$http.get(url).success(function(response){

			if(response){

				//sections = response;
				$scope.sections = response;
		
				console.log("ok");
				
			}else{
				console.log("fail");
			}
			//return sections;
		})
	
})
