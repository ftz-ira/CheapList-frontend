app.config(function($stateProvider, $urlRouterProvider) {

/*$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});*/


  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.homepage', {
    url: '/homepage',
    views: {
      'menuContent': {
        templateUrl: 'templates/homepage.html',
        controller: 'HomepageCtrl'
      }
    }
  })
  .state('app.categories', {
    url: '/categories/:sectionId',
    views: {
      'menuContent': {
        templateUrl: 'templates/categories.html',
        controller: 'CategoriesCtrl'
      }
    }
  })
  .state('app.products', {
    url: '/products/:categoriesId',
    views: {
      'menuContent': {
        templateUrl: 'templates/products.html',
        controller: 'ProductsCtrl'
      }
    }
  })
  .state('app.shoptime', {
    url: '/shoptime/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/shoptime.html',
        controller: 'ShoptTimeCtrl'
      }
    }
  })
  .state('app.selectCategory', {
    url: '/selecCategory/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/selectCategory.html',
        controller: 'selecCategoryCtrl'
      }
    }
  })

  .state('app.checkProduct', {
    url: '/checkproduct',
    views: {
      'menuContent': {
        templateUrl: 'templates/check_product.html',
        //controller: 'checkProductCtrl'
      }
    }
  })
  .state('app.saveProduct', {
    url: '/saveproduct/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/shoptime.html',
        controller: 'SaveProductCtrl'
      }
    }
  })
  .state('app.cancelProduct', {
    url: '/cancelproduct/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/shoptime.html',
        controller: 'CancelProductCtrl'
      }
    }
  })
  .state('app.sections', {
    url: '/sections/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/sections.html',
        controller: 'SectionsCtrl'
      }
    }
  })
  .state('app.choicemode', {
    url: '/choicemode',
    views: {
      'menuContent': {
        templateUrl: 'templates/choicemode.html',
        controller: 'ChoiceMode'
      }
    }
  })
  .state('app.estimate', {
    url: '/estimate/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/estimate.html',
        controller: 'EstimateCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/app/homepage');

});
