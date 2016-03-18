(function () {
  angular.module('comics').controller('HeaderController', function ($scope, $location, collectionService, userSession) {
      var buildLinksCollection = function (queryName){
          var links = [],
          values = [];
          angular.forEach(collectionService.getAll('comics'), function (value, key){
            if(angular.isDefined(value[queryName])) {
              values = addUniqueElements(values, value[queryName]);
            }
          });
          angular.forEach(values, function (value, key){
              links.push({
                  name: value,
                  link: '#/comics?'+queryName+'='+value
              });
          });
          return links;
      },
      addUniqueElements = function (collection, source) {

        var separated = source.split(', ');
          angular.forEach(separated, function(value, key) {
              if (collection.indexOf(value) === -1) {
                  collection.push(value);
              }
          });
          return collection;
      };
      $scope.isLogged = false;
      $scope.greeting = 'Please login';
      $scope.isAdmin = false;
      $scope.userName = '';
      $scope.editionsLinks = buildLinksCollection('edition');
      $scope.genresLinks = buildLinksCollection('genre');
      $scope.charactersLinks = buildLinksCollection('characters');
    $scope.refreshUser = function() {
        var user = userSession.getCurrentUser();
        $scope.isLogged = !!user;
        if ($scope.isLogged) {
            $scope.greeting = 'Welcome ' + user.lastName + ', ' + user.firstName;
            $scope.userName = user.userName;
            $scope.isAdmin = user.isAdmin;
        } else {
            $scope.greeting = 'Please login';
            $scope.isAdmin = false;
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
