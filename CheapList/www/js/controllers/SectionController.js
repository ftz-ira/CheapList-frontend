angular.module('starter')

.controller('SectionsCtrl',function($scope,$http,$stateParams,$rootScope,BASE_URL){

      // passage de l'id de liste pour ajouter les produits
      $rootScope.listId = $stateParams.listId;


      var url = BASE_URL.base+'/sections';
      //console.log(url)

      $http.get(url).success(function(response){

        if(response){
      //sections = response;
        $scope.sections = response;

        console.log("section ok go to categories");

        }else{
          console.log("fail");
        }
      });

        $scope.saveSectionListName =  function(){
          
          var listName = $scope.listName;

          if( (listName.length > 3) && (listName != undefined) ) {

            url2 = BASE_URL.base+"/lists/"+$rootScope.listId;

             var el ={  
              name: listName
             }

              $http.patch(url2,JSON.stringify(el)).success(function(response){

                if(response){
                //sections = response;
                  //response;
                  
                  $scope.listName = response.name;

                  console.log(response);
                  //console.log("list titre saved !");

                }else{
                  console.log("fail");
                }
              },function(error){
                console.log(error);
              });
          }else{
            alert('vous devez remplire le nom de votre liste');
          }
        
        };
        $scope.clearSectionListName =  function(){
            $scope.listName = null;
      }
})