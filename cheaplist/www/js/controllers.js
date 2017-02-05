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
  $ionicModal.fromTemplateUrl('templates/modal_login.html', {
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

.controller('HomepageCtrl', function($scope, $http, $rootScope, userData,BASE_URL) {

 url = BASE_URL.base+'/members/69/lists/';

 $http.get(url).success(function(response) {

  var lists = response.shoppingLists;
  //console.log(response);
  userData.addLists(lists);
  $rootScope.lists = lists;

    for(var list of lists){ 
      let qty=0; 
      for(var l of list.listProducts){

        qty += l.productQuantity; 
        
      }

      list.qty = qty; 
     } 
 })
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

           // console.log("section ok go to categories");

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

                  //console.log(response);
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

.controller('CategoriesCtrl',function($scope, $stateParams,$http,BASE_URL){
    //console.log($stateParams.sectionId);
    
    var url = BASE_URL.base+'/sections/'+$stateParams.sectionId+'/categories';
    //http://localhost:8080/cheaplist/sections/1/categories/

    $http.get(url).success(function(response){

        $scope.categories = response;

        //console.log(response);
      });
})

.controller('ProductsCtrl', function($stateParams,$rootScope,$scope,$http,$templateCache,BASE_URL,userData){

    var url = BASE_URL.base+'/categories/'+$stateParams.categoriesId+'/products/';

    this.userdata = userData;

     $http.get(url).success(function(response){

        if(response){
          //console.log(response);
          $scope.products = response;

        }
        else{
          console.log("fail");
        }
      });
     // GESTION DE LA QUANTITE DE PRODUIT DANS UNE LISTE
      $scope.addToList = function(productQuantity,listId,productId,$ionicModal){

          var url2 = BASE_URL.base+'/lists/'+listId+'/frantz';

          var el = {
            idProduct : productId,
            productQuantity : productQuantity
          };
            //console.log(JSON.stringify(el));

            $http.patch(url2, JSON.stringify(el),{headers: {'Content-Type': 'application/json','Accept': 'application/json'} })
            .success( function (response){
                   
                userData.getListById(listId).listProducts = response;

                },function(error){
                  console.log(error);
                })
    };
})

.controller('ShoptTimeCtrl',function($scope,$rootScope, $stateParams,$http,BASE_URL,$ionicModal){


  var url = BASE_URL.base+'/lists/'+$stateParams.listId+'/shoptime/';

  $http.get(url).success(function(response){
    
    response.listId = $stateParams.listId;
    $rootScope.listshoptime= response;

   },function(error){
    console.log(error);
   });

    $scope.checkboxBasket = function(checkbox,idElement){

      var url = BASE_URL.base+'/lists/'+$stateParams.listId+'/element/'+idElement;
     

      var el = {
        isInBasket: checkbox
      }

      $http.patch(url,JSON.stringify(el),{headers: {'Content-Type': 'application/json','Accept': 'application/json'} }).success(function(repsonse){

          console.log(response);

      },function(error){
        console.log(error);
      });

    };

    $scope.setPrice = function(newPrice,idProduct,idShop){
      //var newPrice = $scope.newPrice;
      //console.log(newPrice);

      var url = BASE_URL.base+"/prices/"+idProduct+"/shop/"+idShop;

        var el = {
            price: newPrice
         }

          $http.patch(url,JSON.stringify(el)).success(function(repsonse){

          console.log(response);

          },function(error){
            console.log(error);
          });

    }
})

.controller('selecCategoryCtrl',function(BASE_URL,$http,$scope,$cordovaBarcodeScanner,$rootScope,$location,$stateParams) {

        var url = BASE_URL.base+'/categories/';
      
        $http.get(url).success(function(response){

               response.listId = $stateParams.listId;
               $scope.categories = response;
                 //console.log($scope.categories);
        });

    $scope.scanBarcode = function(cateId,listId) {

      $cordovaBarcodeScanner.scan().then(function(imageData) {
        
        if(typeof imageData !== 'undefined' ){

          var url = BASE_URL.base+'/products';

          var el = {
                idEan : imageData.text,
                idCategory : cateId
                }

          $http.post(url,JSON.stringify(el)).success(function(response){

            response.listId = listId;
            $rootScope.productsAA = response;

          $location.path( "app/checkproduct");

          });
        }
      }, function(error) {
        console.log("An error happened -> " + error);
     });
    };


 // $scope.scanBarcode = function(cateId,listId) {

 //    var response2 =  {
 //        id: 36380,
 //        brand: "Panzani",
 //        name: "Coquillettes Tomates & Épinards",
 //        unitName: "500 g",
 //        url: "https://static.openfoodfacts.org/images/products/303/835/900/2465/front_fr.3.400.jpg"
 //      };
     
 //     response2.listId = listId;
 //      $rootScope.productsAA = response2;

 //       $location.path( "app/checkproduct");
 //    } 


})
.controller('SaveProductCtrl',function(BASE_URL,$stateParams,$http,$scope,$location,$rootScope,$window){

  
  $scope.saveP = function(product,opt){
      

    if(opt == "save"){

       var url = BASE_URL.base+"/lists/"+product.listId+"/frantz/";

      var el = {
            "idProduct":product.id,
            "productQuantity":1
        };
        //console.log(JSON.stringify(el));

         $http.patch(url,JSON.stringify(el),{headers: {'Content-Type': 'application/json','Accept': 'application/json'}}).success(function(response){

          response.listId = product.listId;

           // $scope.listshoptime= "";
           $rootScope.listshoptime= response;

           //console.log($scope);

        $window.history.go(-2);
         

        },function(error){
          console.log(error);
        });
    }
    else{

       console.log("error");
    }  

  }
 
})

.controller('ChoiceMode',function(){
})
.controller('EstimateCtrl',function($rootScope,$scope, $stateParams,$http,BASE_URL,$cordovaGeolocation,$timeout,$ionicLoading,$ionicModal){

    var url = BASE_URL.base+'/lists/'+$rootScope.listId+'/';

    var geoloc = $cordovaGeolocation;
    var posOptions = {timeout : 10000, enableHighAccuracy : false};
  
    geoloc.getCurrentPosition(posOptions).then(function (position) {


        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        var el = {
          lat: lat,
          lng: lng 
        };

        $ionicLoading.show({ template:'Loading....', duration: 3000}).then(function(){

            if(el.lat != null && el.lng != null){

                $http.post(url,JSON.stringify(el)).success(function(response){
                    //$ionicBackdrop.release();
                    $scope.shopList = response;
                   // console.log(response)
                });
            }
          });
      });

     
          // Form data for the login modal
          //$scope.loginData = {}; 

          // Create the login modal that we will use later
          $ionicModal.fromTemplateUrl('templates/modal_Link_shop_to_list.html', {
            scope: $scope
          }).then(function(modal2) {
            $scope.modal2 = modal2;
          });

          // Triggered in the login modal to close it
          $scope.closeEstimate = function() {

            $scope.modal2.hide();
          };

          // Open the login modal
          $scope.estimate = function() {
            $scope.modal2.show();
          };

          // Perform the login action when the user submits the login form
          // $scope.doValidate = function() {
          //   console.log('Doing login', $scope.loginData);

          //   // Simulate a login delay. Remove this and replace with your login
          //   // code if using a login system
          //   $timeout(function() {
          //     $scope.closeEstimate();
          //   }, 1000);
          // };
      

      $scope.LinkShopList = function(listId, shopid){

        console.log(listId, shopid);

        var url= BASE_URL.base+"/lists/"+listId;

        var el={
          "shop": {
            "id": shopid }
          };

          $http.patch(url,JSON.stringify(el),{headers: {'Content-Type': 'application/json','Accept': 'application/json'}}).success(
            function(response){
              
              console.log(response);
              
              $scope.modal2.hide();

              // fermeture du modal
              $location.path( "/#/app/homepage" );


            })
        };
})








































