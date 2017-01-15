'use strict';


app.controller('getProduct', function($scope,$stateParams,$http){
	//console.log('getProduct');
	var url = 'http://localhost:8080/cheaplist/categories/'+$stateParams.categoryId+'/products/';

	//console.log($stateParams.categoryId);

	$http.get(url).success(function(response){

		if(response){
			console.log(response);
			$scope.products = response;

		}else{
			console.log("fail");
		}
	})
})

app.controller('product',function($rootScope,$scope,$http,$templateCache){

	
	$scope.setQuantity = function(product_quantity,opt){

		if(product_quantity >= 0){
			var new_quantity = product_quantity + opt;
			$scope.product_quantity = 	new_quantity >= 0 ?new_quantity : 0;
		}
	};

	$scope.addToList = function(product_quantity,opt,product){

		//console.log($rootScope.listId);

		if(product_quantity >= 0){
			var new_quantity = product_quantity + opt;
			$scope.product_quantity = 	new_quantity >= 0 ?new_quantity : 0;
		}

		var url = 'http://localhost:8080/cheaplist/lists/'+$rootScope.listId+'/element/';

		var el = {
			idProduct : 19830,
			productQuantity : 222
		};
		console.log(JSON.stringify(el));

		// $http.put(url, JSON.stringify(el),{headers: {'Content-Type': 'application/json','Accept': 'application/json'} })
		// .success(
		// 	function (response){

		// 		if(response){
		// 		//sections = response;
		// 		console.log(response);
		// 		//$scope.categories = response;

		// 		console.log("product ajouter a la liste");

		// 	}else{
		// 		console.log("fail");
		// 	}
		// },function(error){
		// 	console.log(error);
		// })


	};
})



















