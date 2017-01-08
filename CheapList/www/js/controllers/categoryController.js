'use strict';

app.controller('categories',function($scope, $stateParams,$http){

	
     //console.log($stateParams.sectionId);
     
     var url = 'http://localhost:8080/cheaplist/categories/'+$stateParams.sectionId;
		var categories = null;
		$http.get(url).success(function(response){

			if(response){

				//sections = response;
				$scope.categories = response;
		
				console.log("ok");
				
			}else{
				console.log("fail");
			}
			//return sections;
		})

  /*   	$scope.categorys = 
	[{
			"name": "formage",
			"description" : " Les fromages",
			"id" : "1",
			"pict": "http://placehold.it/140x100"
		},
		{
			"name": "yahourt",
			"description" : " Les yahourts",
			"id" : "2",
			"pict": "http://placehold.it/140x100"
	},
	{
			"name": "yahourt",
			"description" : " Les cremes dessert",
			"id" : "3",
			"pict": "http://placehold.it/140x100"
	},{
			"name": "yahourt",
			"description" : " Les oeufs",
			"id" : "4",
			"pict": "http://placehold.it/140x100"
	}]*/
    
  
	
})