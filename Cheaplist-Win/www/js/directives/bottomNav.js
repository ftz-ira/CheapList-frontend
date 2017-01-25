'use strict';

app.directive('bottomNav',function(){
	
	return {
		template: '<ion-footer-bar class="bar-assertive"><a  ng-href="#/app/choicemode"><h1 class="title">J\'ai fini ma liste</h1></a></ion-footer-bar>'
	}
})