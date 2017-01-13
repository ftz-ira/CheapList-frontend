'use strict';

app.controller('list',function($http){

	 $scope.addToList = function(product_quantity,productId,){

		var url = 'http://localhost:8080/cheaplist/lists/22/element/';

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
		
				console.log("section ok go to categories");
				
			}else{
				console.log("fail");
			}
		})
	};
})