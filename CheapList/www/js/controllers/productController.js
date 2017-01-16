'use strict';


app.controller('getProduct', function($scope,$stateParams,$http){
	//console.log('getProduct');
	var url = 'http://localhost:8080/cheaplist/categories/'+$stateParams.categoryId+'/products';

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

app.controller('product',function($scope,$http){

	
	$scope.setQuantity = function(product_quantity,opt){

		if(product_quantity >= 0){
			var new_quantity = product_quantity + opt;
			$scope.product_quantity = 	new_quantity >= 0 ? new_quantity : 0;
		}
	};

	$scope.addToList = function(product_quantity,productId,listId){

		var url = 'http://localhost:8080/cheaplist/lists/'+listId+'/element/';

		var el = {
			idProduct : productId,
			productQuantity : product_quantity
		}
		
		$http.put(url).success(
			function (response){

			if(response){
				//sections = response;
				console.log(response);
				$scope.categories = response;
		
				console.log("product ajouter a la liste");
				
			}else{
				console.log("fail");
			}
		})
	};
})