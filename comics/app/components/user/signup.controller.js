(function () {
  angular.module('comics').controller('SignupController', function ($scope) {
    $scope.newUser = {};
    $scope.showMessages = false;
    $scope.addUser = function () {
      $scope.newUser.firstName = 'lalala';
      $scope.showMessages = true;
    }
  });
})();
