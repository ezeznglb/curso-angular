(function () {
  angular.module('comics').controller('SignupController', function ($scope, $location, usersService) {
    $scope.newUser = {
        isAdmin : false
    };
    $scope.showMessages = false;
    $scope.addUser = function () {
      if (!usersService.addUser($scope.newUser)) {
          console.log('Error creating user');
      }else {
          $location.url('/redirect/register');
      }
      $scope.showMessages = true;
    }
    $scope.clearUser = function () {
        $scope.newUser.firstName = '';
        $scope.newUser.lastName = '';
        $scope.newUser.userName = '';
        $scope.newUser.password = '';
    }
    $scope.clearUser();
  });
})();
