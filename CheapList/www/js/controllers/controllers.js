angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
  { title: 'Reggae', id: 1 },
  { title: 'Chill', id: 2 },
  { title: 'Dubstep', id: 3 },
  { title: 'Indie', id: 4 },
  { title: 'Rap', id: 5 },
  { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('HomepageCtrl', function($scope, $http, $rootScope, userData,BASE_URL) {

     url = BASE_URL.base+'/members/69/lists/';

     $http.get(url).success(function(response) {

      var lists = response.shoppingLists;
      userData.addLists(lists);
      $rootScope.lists = lists;
    })
     // Recuperation du nom de liste pour pouvoir le modifier sur le tpl section
})

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

app.controller('CategoriesCtrl',function($scope, $stateParams,$http,BASE_URL){


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

app.controller('ChoiceMode',function(){

})

app.controller('EstimateCtrl',function($rootScope,$scope, $stateParams,$http,BASE_URL,$cordovaGeolocation){


    var geoloc = $cordovaGeolocation;
    var posOptions = {timeout : 10000, enableHighAccuracy : false};


     geoloc.getCurrentPosition(posOptions).
     then(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(lat);
        console.log(lng);
        console.log($rootScope.listId);

        var url = BASE_URL.base+'/lists/'+$rootScope.listId+'/';
        var el = {
          lat: lat,
          lng: lng 
        }

        $http.post(url,JSON.stringify(el)).success(function(response){

            console.log(response);
            $scope.estimate = response;
          
      })

     },function (err)
    {
      console.log("probleme get location")
    } );

     
})












































