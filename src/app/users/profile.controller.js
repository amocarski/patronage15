(function() {
'use strict';

  angular
  .module('projekt')
  .controller('ProfileController', ProfileController);

  function ProfileController($stateParams, ProfilService) {
    var vm = this;
    vm.details = [];
    ProfilService.getProfile($stateParams.login, function(data) {
       vm.details = data;
    });
  }

})();
