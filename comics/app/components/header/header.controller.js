(function () {
  angular.module('comics').controller('HeaderController', function ($scope, $location, userSession) {
      $scope.isLogged = false;
      $scope.greeting = 'Please login';
      $scope.isAdmin = false;
      $scope.userName = '';
    $scope.refreshUser = function() {
        var user = userSession.getCurrentUser();
        $scope.isLogged = !!user;
        if ($scope.isLogged) {
            $scope.greeting = 'Welcome ' + user.lastName + ', ' + user.firstName;
            $scope.userName = user.userName;
        } else {
            $scope.greeting = 'Please login';
        }
    };

    $scope.logout = function(index) {
        userSession.logout();
        $location.url('/redirect/logout');
        $scope.refreshUser();
    };
    
    $scope.$on('userChange', function (event) {
        $scope.refreshUser();
    });
    $scope.refreshUser();
  });
})();
