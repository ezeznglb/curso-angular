(function () {
  angular.module('comics').controller('RedirectController', function ($scope, $routeParams, $location, $interval, redirectMesagges) {
      var action = $routeParams.action;

      if (redirectMesagges.data[action]) {
          $scope.message = redirectMesagges.data[action];
      }
      $scope.redirect = function () {
              $location.path($scope.message.redirectTo);
      };
      var countDown = $interval(function() {
            $interval.cancel(countDown);
            $scope.redirect();
      }, 10000);
  });
})();