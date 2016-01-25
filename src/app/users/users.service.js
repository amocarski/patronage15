(function() {
'use strict';

  angular
  .module('projekt')
  .factory('ProfilService', ProfilService);

  function ProfilService($http) {
     return {
       getProfile: function(login, callback) {
         $http.get('https://api.github.com/users/' + login).success(callback);
      }
    }
  }

})();
