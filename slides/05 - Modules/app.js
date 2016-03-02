(function (){
    var app = angular.module('app', ['ngAnimate']);
    app.controller('ModuleController', function ($scope){
        $scope.showMessage = false;
    });
})();