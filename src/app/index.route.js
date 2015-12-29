(function() {
  'use strict';

  angular
    .module('projekt')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('user', {
        url: '/users',
        templateUrl: 'app/main/users.html', 
        controller: 'MainCtrl'
      })
      .state('profile', {
        url: '/users/:login',
        templateUrl: 'app/main/userprofile.html', 
        controller: 'ProfilCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
