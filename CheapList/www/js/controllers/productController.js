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

app.controller('product',function($rootScope,$scope,$http,$templateCache,BASE_URL,userData){


	this.userdata = userData;

	$scope.addToList = function(productQuantity,listId,productId){
		productQuantity++;
		// Le serveur spring a besoin en JSON : idProduct,productQuantity,idList
		// HTTP PATCH : 

		/*HTTP PATCH : http://localhost:8080/cheaplist/lists/22

			{
				"idProduct":8780,
				"productQuantity":0
			}*/




		/*if(productQuantity >= 0){
			var new_quantity = productQuantity + opt;
			$scope.productQuantity = 	new_quantity >= 0 ?new_quantity : 0;
		}*/

		var url = BASE_URL.url+'/lists/'+listId+'/frantz';

		var el = {
			idProduct : productId,
			productQuantity : productQuantity
		};

		console.log(JSON.stringify(el));

		$http.patch(url, JSON.stringify(el),{headers: {'Content-Type': 'application/json','Accept': 'application/json'} })
		.success(
			function (response){

				if(response){
				//sections = response;
			//	console.log(response);
			//	userData.removeList(listId);
			//	userData.setList(response);
				//$scope.categories = response;
				userData.setProductQuantity(1,listId,productId)
				//console.log("product ajouter a la liste");

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
	productQuantity--;
	// 	$http.delete(url).success(function(response){

	// 	if(response){
	// 		console.log(response);

	// 	}else{
	// 		console.log("fail");
	// 	}
	// });



	}
})



















