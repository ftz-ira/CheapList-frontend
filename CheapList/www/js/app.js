'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('cheapList', ['ionic']).run(function($ionicPlatform,$location) {

  $ionicPlatform.ready(function() {
     console.log($ionicPlatform);
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    $location.path('/');
  });
})

app.constant('BASE_URL',{"url" : "http://localhost:8080/cheaplist"})
//app.constant('BASE_URL',{"url" : "http://192.168.0.13:8080/cheaplist"})
//app.constant('BASE_URL',{"url" : "http://192.168.0.56:8080/cheaplist"})
