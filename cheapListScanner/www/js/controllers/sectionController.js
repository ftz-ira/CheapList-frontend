'use strict';

app.controller('sectionList',function($scope,sectionProvider){

	

			$scope.sections = sectionProvider.getSections();

	
})

app.controller('SetListName', function(){
	
})
app.controller('SetList',function(){

})
