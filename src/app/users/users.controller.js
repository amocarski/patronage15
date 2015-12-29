(function() {
'use strict';

  angular
    .module('projekt')
	.controller('MainCtrl', function($scope, $http) {
	    var pendingTask;

	    if ($scope.search === undefined) {
	      fetch();
	    }

	    $scope.change = function() {
	      if (pendingTask) {
	        clearTimeout(pendingTask);
	      }
	      pendingTask = setTimeout(fetch, 800);
	    };

	    function fetch() {
	      $http.get('https://api.github.com/users?since=' + $scope.search)
	        .success(function(data) {
	          $scope.details = data;
	        });
	    }

	    $scope.select = function() {
	      this.setSelectionRange(0, this.value.length);
	    }
	})
	.factory('profilService', function($http) {
	   return {
	     getProfile: function(login, callback) {
	       $http.get('https://api.github.com/users/' + login).success(callback);
	    }
	   }
	})
	.controller('ProfilCtrl', function($scope, $stateParams, profilService) {
	  profilService.getProfile($stateParams.login, function(data, status) {
	     $scope.profile = data;
	  });
	}); 

})();

