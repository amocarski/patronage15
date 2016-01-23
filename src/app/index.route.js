(function() {
  'use strict';

  angular
    .module('projekt')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        abstract: true
      })
      .state('main.home', {
        url: '/',
        templateUrl: 'app/main/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.users', {
        url: '/users',
        templateUrl: 'app/main/users.html',
        controller: 'UserController',
        controllerAs: 'user'
      })
      .state('main.profile', {
        url: '/users/:login',
        templateUrl: 'app/main/userprofile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .state('main.about', {
        url: '/about',
        templateUrl: 'app/main/about.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
