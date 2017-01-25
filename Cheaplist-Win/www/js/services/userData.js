(function() {
	'use strict'

	function UserData() {
		this.lists = [];

		this.setList = function (list) {
			this.lists.push(list);
		}

		this.getList = function (id) {
			return this.lists[id];
		}

		this.addLists = function (lists) {
			this.lists = lists;
		}

		this.getLists = function () {
			return this.lists;
		}

		this.removeList = function (id) {
			this.lists.splice(id, 1);
		}

		this.getElement = function(listId, productId) {
			var list = this.getListById(listId);

			if(!list) {
				return null;
			}

			var listProduct = list.listProducts;

			for( var element of listProduct ) {
				if(element.id == productId) {
					return element;
				}
			}
			return null;
		}

		this.getListById = function(listId) {

			for( var list of this.lists ) {
				if(list.id == listId) {
					return list;
				}
			}
			return null;
		}

		this.getProductQuantity = function(listId, productId ){
			var list = this.getListById(listId);

			if (!list){
				return 0;
			}

			var listProduct = list.listProducts;

			for( var element of listProduct ) {
				if(element.product.id == productId) {
					return element.productQuantity;
				}
			}
			return 0;
		}
		this.setProductQuantity = function(opt,listId,productId){



			var list = this.getListById(listId);

			if (!list){
				return null;
			}

			var listProduct = list.listProducts;

			for( var element of listProduct ) {
				if(element.product.id == productId) {
					console.log(element.productQuantity)
					return element.productQuantity = element.productQuantity + opt;
				}
			}
			return null;
		}
	}

	app.service('userData', UserData);

})();