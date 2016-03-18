(function () {
  angular.module('comics').controller('HomeController', function ($scope, $location, collectionService) {
    var queryParams = $location.search();
    var keyParams = Object.keys(queryParams);
    $scope.filterConfig = {};
    $scope.title = "Available comics"; 
    $scope.comics = collectionService.getAll('comics');
    $scope.$watchGroup(['filterBy', 'filterTerm'], function(newValues, oldValues, scope) {
                if (angular.isDefined(newValues[0]) &&
                    angular.isDefined(newValues[1]) &&
                    newValues[0].value !== '' ){
                    $scope.filterConfig[newValues[0].value] = newValues[1];
                    $scope.title = "Available comics filtered by " + $scope.filterBy.label;
                } else if (keyParams.length) {
                    $scope.filterConfig = queryParams;
                    $scope.title = "Available comics filtered by " + $scope.filterBy.label;
                } else {
                    $scope.filterConfig = {};
                    $scope.title = "Available comics";
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
            label: 'Genre',
            value: 'genre'
        },{
            label: 'Characters',
            value: 'characters'
        }];
        
        if (keyParams.length) {
            for (var i = 0; i< $scope.filterOptions.length; i++) {
                if ($scope.filterOptions[i].value === keyParams[0]) {
                    $scope.filterBy = $scope.filterOptions[i];
                    $scope.filterTerm = queryParams[$scope.filterOptions[i].value];
                }
            }
        } else {
            $scope.filterBy = $scope.filterOptions[0];
        }
  });
})();
