(function () {
    angular.module.factory('userSession', function(usersService) {
        var currentUser = false;
        return {
            login: function(userName, password) {
                if (angular.isDefined(userName) && angular.isDefined(password)) {
                    currentUser = usersService.getUser(userName, password);
                }
                return currentUser;
            },
            logout: function() {
                return points;
            },
            getCurrentUser() {
                return currentUser;
            }
    };
  });

})();