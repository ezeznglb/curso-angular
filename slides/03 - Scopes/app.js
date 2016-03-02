(function (){
    var app = angular.module('app', []);
    app.controller('NameController', NameController);
    app.controller('RootNameController', RootNameController);
    app.controller('SecondNameController', SecondNameController);
    app.controller('ChildController', ChildController);
    
function NameController($scope) {
  $scope.name = "First";
}
function RootNameController($rootScope) {
  $rootScope.name = "Root Scope";
}
function SecondNameController($scope) {
  $scope.name = "Second";
}
function ChildController($scope) {
  $scope.childName = "Child";
}
})();