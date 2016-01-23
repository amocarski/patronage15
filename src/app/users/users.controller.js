(function() {
'use strict';

  angular
  .module('projekt')
  .controller('UserController', UserController)
  .factory('ProfilService', function($http) {
     return {
       getProfile: function(login, callback) {
         $http.get('https://api.github.com/users/' + login).success(callback);
      }
     }
  })
  .controller('ProfileController', function($stateParams, ProfilService) {
    var vm = this;
    vm.details = [];
    ProfilService.getProfile($stateParams.login, function(data) {
       vm.details = data;
    });
  });

  function UserController($http, $timeout) {
    var pendingTask;
    var vm = this;
    vm.details = [];
    vm.select = select;
    vm.change = change;

    if (angular.isUndefined(vm.search)) {
      fetch();
    }

    function change() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = $timeout(fetch, 800);
    }

    function fetch() {
      $http.get('https://api.github.com/users?since=' + vm.search)
        .success(function(data) {
          vm.details = data;
        });
    }

    function select() {
      vm.setSelectionRange(0, vm.value.length);
    }
  }

})();
