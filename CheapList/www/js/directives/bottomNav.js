'use strict';

app.directive('bottomNav',function(){
	
	return {
		//template: 'item  "{{item.name}}" dans la categorie {{item.category_id}}'
		template: '<ion-footer-bar class="bar-assertive"><h1 class="title">Fin</h1></ion-footer-bar>'
	}
})