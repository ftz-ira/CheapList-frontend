'use strict';

app.controller('homepage', function($scope, $http, $rootScope) {

	var url = "http://localhost:8080/cheaplist/members/69/lists";

	$http.get(url).success(function(response) {

		if (response) {
			
			var lists = response.shoppingLists;
			
	      //console.log(response.shoppingLists);

	      for (var i = 0; i <= response.shoppingLists.length; i++) {

	      	if (response.shoppingLists[i] != undefined) {
	      		for (var y = 0; y <= response.shoppingLists[i].listProducts.length; y++) {

	      			if (response.shoppingLists[i].listProducts[y] != undefined) {
	      				lists.elementId = response.shoppingLists[i].listProducts[y].id;
		          
		      		}
		  		}
			}
		}

		$rootScope.lists = lists;
		//console.log($rootScope.lists);
		
		} else {
			console.log("fail");
		}
	})
})
