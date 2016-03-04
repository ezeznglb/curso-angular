(function (){
    var app = angular.module('app', ['ngAnimate']);

    /*app.controller('LocaleController', function($scope, $locale) {
        $scope.locale = $locale.id;
    });*/
    /*var LocaleController = function(s, l) {
        s.locale = l.id;
    };
    LocaleController['$inject'] = ['$scope', '$locale'];
    angular.module('app').controller('LocaleController', LocaleController);*/
    var require = function(name) {
        return angular.injector(['ng','app']).get(name);
    };

    app.controller('LocaleController', ['$scope', function($scope){
        var $locale = require('$locale');
        $scope.locale = $locale.id;
    }]);
})();