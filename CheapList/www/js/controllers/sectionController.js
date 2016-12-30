'use strict';

app.controller('section',function($scope){

	$scope.sections = 
	[{
			"name": "produit frais",
			"category":{
				"fromage": "fromage",
				"yahourt": "yahourt",
				"creme fraiche": "toto@creme fraiche.com"
				},
			"description" : " Rayon produit frais",
			"id" : "1",
			"pict": "http://placehold.it/140x100"
		},
		{
			"name": "conserve",
			"category":{
				"boite-f": "boite en fer",
				"boite-v": "boite en verre",
				"boite-b": "Boite bio"
				},
			"description" : " Rayon boites de conserve",
			"id" : "2",
			"pict": "http://placehold.it/140x100"
	}]
})
app.controller('SetListName', function(){
	
})
