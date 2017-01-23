angular.module('starter')

.controller('ShoptTimeCtrl',function($scope, $stateParams,$http,$cordovaBarcodeScanner,BASE_URL){

   $scope.scanBarcode = function() {
       $cordovaBarcodeScanner.scan().then(function(imageData) {
           alert(imageData.text);
           console.log("Barcode Format -> " + imageData.format);
           console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
          console.log("An error happened -> " + error);
          });
       alert("testsseb");
      };

      var listIdd = "22";
    
    var url = BASE_URL.base+'/lists/'+listIdd; //$stateParams.listId;   
    //var url = http://localhost:8080/cheaplist/lists/22;

    $http.get(url).success(function(response){

      if(response){
        
        $scope.listshoptime= response;

        console.log(response);

      }else{
        console.log("fail");
      }

    })
})