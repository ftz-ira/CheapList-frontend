angular.module('starter')

.controller('ProductsCtrl', function($stateParams,$rootScope,$scope,$http,$templateCache,BASE_URL,userData){

   // console.log("---------"+$stateParams.categoriesId);

    var url = BASE_URL.base+'/categories/'+$stateParams.categoriesId+'/products/';

    this.userdata = userData;

    $http.get(url).success(function(response){

      if(response){
        console.log(response);
        $scope.products = response;

      }else{
        console.log("fail");
      }
    })


  $scope.addToList = function(productQuantity,listId,productId){

    /*if(productQuantity >= 0){
    var new_quantity = productQuantity + opt;
    $scope.productQuantity = new_quantity >= 0 ?new_quantity : 0;
    }*/

    var url2 = BASE_URL.base+'/lists/'+listId+'/frantz';

    var el = {
      idProduct : productId,
      productQuantity : productQuantity
    };
    //console.log(JSON.stringify(el));

        $http.patch(url2, JSON.stringify(el),{headers: {'Content-Type': 'application/json','Accept': 'application/json'} })
          .success(
            function (response){

                if(response){
                  //sections = response;
                  console.log(response);
                  // console.log("Seb",userData.getListById(listId));
                  userData.getListById(listId).listProducts = response;

                  }else{
                    console.log("fail");
            }
            },function(error){
              console.log(error);
            })
      };
})



