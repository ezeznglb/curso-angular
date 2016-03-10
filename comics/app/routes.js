(function () {
  angular.module('comics')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'app/components/home/home.view.html'
      })
      .when('/signup', {
        controller: 'SignupController',
        templateUrl: 'app/components/user/signup.view.html'
      });;
  });
})();
