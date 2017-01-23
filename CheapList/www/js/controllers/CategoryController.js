angular.module('starter')


.controller('CategoriesCtrl',function($scope, $stateParams,$http,BASE_URL){


    //console.log($stateParams.sectionId);
    
    var url = BASE_URL.base+'/sections/'+$stateParams.sectionId+'/categories';
    //http://localhost:8080/cheaplist/sections/1/categories/

    $http.get(url).success(function(response){

      if(response){
        
        $scope.categories = response;

        console.log(response);

      }else{
        console.log("fail");
      }
//return sections;
    })
})