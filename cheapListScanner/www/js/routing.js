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
	$stateProvider.state('scanner',{
		cache: cacheActive,
		url: '/scanner',
		templateUrl: 'js/templates/scanner.html',
		controller: 'ExampleController'
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
	
	$stateProvider.state('list',{
		cache: cacheActive,
		url: '/list/',
		controller: 'listController'
	})
});



















/*'use strict';

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
	 	url: '/section',
	 	templateUrl: 'js/templates/section.html',
	 	controller: 'sectionList',
	 })
	$stateProvider.state('category',{
	 	cache: cacheActive,
	 	url: '/category/:categoryId',
	 	templateUrl: 'js/templates/category.html',
	 	controller: 'category'
	 })
	$stateProvider.state('product',{
	 	cache: cacheActive,
	 	url: '/product',
	 	templateUrl: 'js/templates/product.html',
	 	controller: 'category'
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

	$stateProvider.state('scan',{
	 	cache: cacheActive,
	 	url: '/scan',
	 	templateUrl: 'js/templates/scan.html',
	 	controller: 'category'
	 }) 
});*/