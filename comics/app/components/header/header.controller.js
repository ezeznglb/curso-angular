(function () {
  angular.module('comics').controller('HeaderController', function ($scope, $location, comicsService, userSession) {
      var buildLinksCollection = function (queryName, values){
          var links = [];
          angular.forEach(values, function (key, value){
              links.push({
                  name: value,
                  link: '#/comics?'+queryName+'='+value
              });
          });
      };
      $scope.isLogged = false;
      $scope.greeting = 'Please login';
      $scope.isAdmin = false;
      $scope.userName = '';
      $scope.editionsLinks = buildLinksCollection('edition', comicsService.getEditions());
      $scope.genresLinks = buildLinksCollection('genre', comicsService.getGenres());
      $scope.charactersLinks = buildLinksCollection('character', comicsService.getCharacters());
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
