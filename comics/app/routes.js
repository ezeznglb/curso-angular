(function () {
    angular.module('comics')
      .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                 redirectTo: "/comics"
            })
            .when('/comics', {
                controller: 'HomeController',
                templateUrl: 'app/components/home/home.view.html',
                resolve: {
                    userLogged: onlyLoggedIn
                }
            })
            .when('/comics/:id', {
                controller: 'DetailController',
                templateUrl: 'app/components/home/detail.view.html',
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
            })
            .when('/admin', {
                    controller: 'AdminController',
                    templateUrl: 'app/components/admin/admin.view.html',
                    resolve: {
                        userLogged: adminLoggedIn
                    }
            })
            .when('/admin/:feature', {
                    controller: 'AdminController',
                    templateUrl: 'app/components/admin/admin.view.html',
                    resolve: {
                        userLogged: adminLoggedIn
                    }
            })
            .when('/redirect/:action', {
                    controller: 'RedirectController',
                    templateUrl: 'app/shared/components/redirect.view.html',
                    resolve: {
                        redirectMesagges: loadRedirectMessages
                    }
            });
        });

        var onlyLoggedIn = function ($location, $q, userSession) {
            var deferred = $q.defer();
            if (userSession.getCurrentUser()) {
              if (userSession.isAdmin()){
                deferred.reject();
                $location.url('/admin');
              } else {
                  deferred.resolve();
              }
            } else {
                deferred.reject();
                $location.url('/user/login');
            }
            return deferred.promise;
        },
        adminLoggedIn = function ($location, $q, userSession) {
            var deferred = $q.defer();
            if (userSession.getCurrentUser() && userSession.isAdmin()) {
                deferred.resolve();
            } else {
                deferred.reject();
                $location.url('/user/login');
            }
            return deferred.promise;
        },
        loadRedirectMessages = function ($http) {
            return $http({
                    method: 'GET',
                    url: 'app/shared/components/redirect.messages.json'
                }).success(function(response, status, headers, conf) {
                    return response;
                });
        };
})();
