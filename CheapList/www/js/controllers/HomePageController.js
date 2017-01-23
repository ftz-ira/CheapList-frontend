angular.module('starter')

.controller('HomepageCtrl', function($scope, $http, $rootScope, userData,BASE_URL) {

     url = BASE_URL.base+'/members/69/lists/';

     $http.get(url).success(function(response) {

      var lists = response.shoppingLists;
      userData.addLists(lists);
      $rootScope.lists = lists;
    })
     // Recuperation du nom de liste pour pouvoir le modifier sur le tpl section
})