(function () {
 /**
 * Comics App
 * @namespace Modules
 */
  angular.module('comics',['ngRoute', 'ngAnimate','ngMessages', 'ngStorage', 'ui.bootstrap', 'toggle-switch'])
    .config(function($sessionStorageProvider, $localStorageProvider) {
        // Local and session Storage config
        $localStorageProvider.setKeyPrefix('zn-comics-');
        $sessionStorageProvider.setKeyPrefix('zn-comics-');
    });
})();
