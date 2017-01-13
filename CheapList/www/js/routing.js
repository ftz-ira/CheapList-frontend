'use strict';

var cacheActive =  false;

app.config(function ($stateProvider,  $locationProvider){

	$locationProvider.html5Mode(true).hashPrefix('!');

	$stateProvider.state('homepage',{
	 	cache: cacheActive,
	 	url: '/',
	 	templateUrl: 'js/templates/homepage.html',
	 	controller: 'homepage'
	 })
	$stateProvider.state('section',{
	 	cache: cacheActive,
	 	url: '/section/:listId',
	 	templateUrl: 'js/templates/section.html',
	 	controller: 'sectionList',
	 })
	$stateProvider.state('category',{
	 	cache: cacheActive,
	 	url: '/category/:sectionId',
	 	templateUrl: 'js/templates/category.html',
	 	controller: 'categories'
	 })
	$stateProvider.state('product',{
	 	cache: cacheActive,
	 	url: '/product/:categoryId',
	 	templateUrl: 'js/templates/product.html',
	 	controller: 'getProduct'
	 })

	$stateProvider.state('list',{
		cache: cacheActive,
		url: '/list/',
		controller: 'listController'
	})

	$stateProvider.state('checkshop',{
	 	cache: cacheActive,
	 	url: '/checkshop',
	 	templateUrl: 'js/templates/checkshop.html'
	 	
	 })

	$stateProvider.state('shopgrid',{
	 	cache: cacheActive,
	 	url: '/shopgrid',
	 	templateUrl: 'js/templates/shopgrid.html'
	 })
});