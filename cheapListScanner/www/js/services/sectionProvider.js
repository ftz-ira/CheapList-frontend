'use strict';
var sections = 
	[{
			"name": "produit frais",
			"category":{
				"fromage": "fromage",
				"yahourt": "yahourt",
				"creme fraiche": "toto@creme fraiche.com"
				},
			"description" : " Rayon produit frais",
			"id" : "1",
			"pict": "http://placehold.it/140x100",
			"img_url":"img/section-img/produits_frais.jpeg"
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
			"pict": "http://placehold.it/140x100",
			"img_url":"img/section-img/epicerie_salee.jpeg"
	}];

app.service('sectionProvider',function($http){

	this.getSections = function(){

		/*var url = 'http://localhost:8080/cheaplist/sections/';

		$http.get(url)
		.success(function(response){

			if(response){

				sections = response

				console.log(response);
			}else{
				console.log("fail");
			}
		})*/

		return sections ;
	}

});
