'use strict';

app.controller('product',function($scope){

	
	$scope.setQuantity = function(product_quantity,opt){

		if(product_quantity >= 0){
			var new_quantity = product_quantity + opt;
			$scope.product_quantity = 	new_quantity >= 0 ?new_quantity : 0;
		}
		
		//console.log(product_quantity);	
	};
	
})