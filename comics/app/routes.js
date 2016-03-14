(function () {
    angular.module('comics')
      .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'app/components/home/home.view.html',
                resolve: {
                    userLogged: onlyLoggedIn
                }
            })
            //User managment routes
            .when('/user/register', {
                controller: 'SignupController',
                templateUrl: 'app/components/user/signup.view.html'
            })
            .when('/user/login', {
                controller: 'LoginController',
                templateUrl: 'app/components/user/login.view.html'
            })
            .when('/user/profile/:userName', {
                    controller: 'ProfileController',
                    templateUrl: 'app/components/user/profile.view.html',
                    resolve: {
                        userLogged: onlyLoggedIn
                    }
            });
        });

        var onlyLoggedIn = function ($location, $q, userSession) {
            var deferred = $q.defer();
            if (userSession.getCurrentUser()) {
                deferred.resolve();
            } else {
                deferred.reject();
                $location.url('/login');
            }
            return deferred.promise;
        };
})();
