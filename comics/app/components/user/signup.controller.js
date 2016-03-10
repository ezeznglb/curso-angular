(function () {
  angular.module('comics').controller('SignupController', function ($scope, usersService) {
    $scope.newUser = {};
    $scope.showMessages = false;
    $scope.addUser = function () {
      if (!usersService.addUser($scope.newUser)) {
          console.log('Error creating user');
      }
      $scope.showMessages = true;
    }
  });
})();
