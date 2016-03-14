(function () {
  angular.module('comics').controller('LoginController', function ($scope, $location, userSession) {
    $scope.user = {};
    $scope.showMessages = false;
    $scope.loginError = false;
    $scope.login = function () {
        $scope.loginError = false;
        if (!userSession.login($scope.user.userName,$scope.user.password)) {
            $scope.loginError = true;
        } else {
          $location.url('/');
        }
        $scope.showMessages = true; 
    }
    $scope.register = function () {
        $location.url('/register');
    }
  });
})();
