'use strict';

app.service('sectionProvider',function($http){

	this.getSections = function(){

		var url = 'http://localhost:8080/cheaplist/sections/';

		$http.get(url)
		.success(function(response){

			if(response){

				sections = response

				console.log(response);
			}else{
				console.log("fail");
			}
		})

		return sections ;
	}

});
