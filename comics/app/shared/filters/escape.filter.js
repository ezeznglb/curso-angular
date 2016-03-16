(function () {
    angular.module('comics').filter('escape', function() {
        return function(input) {
            if(input) {
                return window.encodeURIComponent(input); 
            }
            return "";
        }
    });
})();