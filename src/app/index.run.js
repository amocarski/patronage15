(function() {
  'use strict';

  angular
    .module('projekt')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
