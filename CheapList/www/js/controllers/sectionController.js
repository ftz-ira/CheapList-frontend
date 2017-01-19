'use strict';

app.controller('sectionList',function($scope,$http,$stateParams,$rootScope,BASE_URL){

	// passage de l'id de liste pour ajouter les produits
	$rootScope.listId = $stateParams.listId;
	
	
	var url = BASE_URL.url+'/sections';

	$http.get(url).success(function(response){

		if(response){
				//sections = response;
				$scope.sections = response;

				console.log("section ok go to categories");
				
			}else{
				console.log("fail");
			}
		});

	this.saveSectionListName =  function(){
/*	this.titre = 'new label of my list';
	console.log(titre);
*/
		
	};
	$scope.clearSectionListName =  function(){

	}
})
