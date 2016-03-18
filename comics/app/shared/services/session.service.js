(function () {
    angular.module('comics').factory('userSession', function($sessionStorage, collectionService) {
        return {
            login: function(userName, password) {
                var user;
                if (angular.isDefined(userName) && angular.isDefined(password)) {
                    user = collectionService.getBy('userName', userName, 'users');
                    if (user && user.password == password) {
                        $sessionStorage.currentUser = user;
                    } else {
                        $sessionStorage.currentUser = false;
                    }
                }
                return $sessionStorage.currentUser;
            },
            isAdmin: function () {
              return $sessionStorage.currentUser.isAdmin;
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
