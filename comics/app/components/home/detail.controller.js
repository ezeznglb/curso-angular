(function () {
  angular.module('comics').controller('DetailController', function ($scope, $routeParams, collectionService) {
      var getRating = function (list) {
          var sum = list.reduce(function(a, b) {
              return parseInt(a, 10) + parseInt(b, 10);
          });
          if (list.length) {
            return sum / list.length;
          }
          return 0;
      };
    $scope.comic = collectionService.get($routeParams.id, 'comics');
    $scope.ratingNumber = getRating($scope.comic.rating.split(','));
  });
})();
