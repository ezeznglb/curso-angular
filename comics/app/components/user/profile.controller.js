(function () {
  angular.module('comics').controller('ProfileController', function ($scope, $routeParams,  userSession, usersService) {
      var userName = $routeParams.userName || userSession.getCurrentUser().userName;
    $scope.user = usersService.getUser(userName);
  });
})();
