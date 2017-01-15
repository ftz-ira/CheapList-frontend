'use strict';

app.controller('homepage',function($scope,$http,$rootScope){

	var url = "http://localhost:8080/cheaplist/members/69/lists";

	$http.get(url).success(function(response){

		// if(response){


		// 		//$scope.lists = response.shoppingLists;
		// 		var lists = response.shoppingLists;
		// 		//console.log(response.shoppingLists[0].listProducts[0].id);
		// 		//console.log(response.shoppingLists);
				
				
		// 		for(var i = 0; i <= response.shoppingLists.length; i++){
		// 		 	//console.log(response.shoppingLists[i].listProducts[i].id);
		// 		 	for(var y= 0;y<=response.shoppingLists[i].listProducts.length;y++){

		// 		 		//if(typeof response.shoppingLists[i].listProducts[y].id !== undefined){
		// 		 			lists.elementId = response.shoppingLists[i].listProducts[y].id;	
				 			
		// 		 		//}
				 		
		// 		 	}
		// 		 }
		// 		 console.log(lists);
		// 		 //console.log(lists);


		// 		//console.log("list ok go to section");

		// 	}else{
		// 		console.log("fail");
		// 	}
				// fonctionnelle
			if(response){


				$scope.lists = response.shoppingLists;
				console.log("list ok go to section");

			}else{
				console.log("fail");
			}
			//return sections;
		})

})