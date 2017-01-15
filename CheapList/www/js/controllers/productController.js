'use strict';


app.controller('getProduct', function($scope,$stateParams,$http,BASE_URL){
	//console.log('getProduct');
	var url = BASE_URL.url+'/categories/'+$stateParams.categoryId+'/products/';

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

app.controller('product',function($rootScope,$scope,$http,$templateCache,BASE_URL){


	$scope.addToList = function(productQuantity,opt,product){

		//console.log($rootScope.listId);

		if(productQuantity >= 0){
			var new_quantity = productQuantity + opt;
			$scope.productQuantity = 	new_quantity >= 0 ?new_quantity : 0;
		}

		 var url = 'http://localhost:8080/cheaplist/lists/'+$rootScope.listId+'/element/';
		//var url = BASE_URL.url+'/lists/'+$rootScope.listId+'/element/';

		var el = {
			idProduct : product.id,
			productQuantity : productQuantity
		};

		$http.put(url, JSON.stringify(el),{headers: {'Content-Type': 'application/json','Accept': 'application/json'} })
		.success(
			function (response){

				if(response){
				//sections = response;
				console.log(response);
				//$scope.categories = response;

				console.log("product ajouter a la liste");

			}else{
				console.log("fail");
			}
		},function(error){
			console.log(error);
		})

	};
	$scope.removeProduct = function(product){
		/*** Suppression un element dans une liste *****/

		
		//var url = BASE_URL.url+'/lists/'+$rootScope.listId+'/element/'+product.id;
		//var url = BASE_URL.url+'/lists/'+$rootScope.listId+'/element/'+product.id;
		var url = BASE_URL.url+'/lists/'+$rootScope.listId+'/element/35785';

		//console.log($rootScope.listId);

	// 	$http.delete(url).success(function(response){

	// 	if(response){
	// 		console.log(response);

	// 	}else{
	// 		console.log("fail");
	// 	}
	// });



	}
})



















