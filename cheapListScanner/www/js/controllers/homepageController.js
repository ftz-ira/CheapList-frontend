'use strict';

app.controller('homepage', function($scope, $http, $rootScope, userData) {

	var url = "http://localhost:8080/cheaplist/members/69/lists";

	$http.get(url).success(function(response) {

		var lists = response.shoppingLists;
	//	console.log("seb",lists)
		userData.addLists(lists);

		//console.log("produit", userData.getElement(22, 9) );
		console.log(userData.getProductQuantity(22,36336));
		$rootScope.lists = lists;
	})
})
