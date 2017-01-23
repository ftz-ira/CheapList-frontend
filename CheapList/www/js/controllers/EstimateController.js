angular.module('starter')

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
