(function () {
    angular.module('comics').factory('userSession', function($sessionStorage, usersService) {
        return {
            login: function(userName, password) {
                var user;
                if (angular.isDefined(userName) && angular.isDefined(password)) {
                    user = usersService.getUser(userName);
                    if (user && user.password == password) {
                        $sessionStorage.currentUser = user;
                    } else {
                        $sessionStorage.currentUser = false;
                    }
                }
                return $sessionStorage.currentUser;
            },
            logout: function() {
                $sessionStorage.currentUser = false;
            },
            getCurrentUser() {
                return $sessionStorage.currentUser;
            }
    };
  });
})();