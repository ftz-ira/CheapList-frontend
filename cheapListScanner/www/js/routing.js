'use strict';

var cacheActive =  false;

app.config(function ($stateProvider){
	
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
});