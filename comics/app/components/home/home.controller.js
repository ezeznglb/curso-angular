(function () {
  angular.module('comics').controller('HomeController', function ($scope, $location, collectionService) {
    var queryParams = $location.search();
    $scope.filterConfig = {};
    $scope.comics = collectionService.getAll('comics');
    $scope.$watchGroup(['filterBy', 'filterTerm'], function(newValues, oldValues, scope) {
                if (angular.isDefined(newValues[0]) &&
                    angular.isDefined(newValues[1]) &&
                    newValues[0].value !== '' ){
                    $scope.filterConfig[newValues[0].value] = newValues[1];
                } else if (queryParams) {
                    $scope.filterConfig = queryParams;
                } else {
                    $scope.filterConfig = {};
                }
        });
        $scope.filterOptions = [{
            label: 'All',
            value: 'all'
        },{
            label: 'Editions',
            value: 'edition'
        },{
            label: 'Title',
            value: 'title'
        },{
            label: 'Collection',
            value: 'collection'
        },{
            label: 'Recommended',
            value: 'recommended'
        },{
            label: 'Creator',
            value: 'creator'
        },{
            label: 'Advanced',
            value: 'advanced'
        }];
        $scope.filterBy = $scope.filterOptions[0];

  });
})();
