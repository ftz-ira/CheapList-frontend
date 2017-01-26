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
  .state('app.sections', {
    url: '/sections/:listId',
    views: {
      'menuContent': {
        templateUrl: 'templates/sections.html',
        controller: 'SectionsCtrl'
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
    .state('app.linkShopList',{ 
      url: '/linkshoplist/:listId/:shopId', 
      'menuContent': { 
        templateUrl: 'templates/homepage.html', 
        controller: 'LinkShopListCtrl' 
      } 
    }) 

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })
  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/app/homepage');
});
