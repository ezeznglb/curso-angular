(function () {
    angular.module('comics')
        .factory('usersService', function ($http, $localStorage) {
            if (!$localStorage.users) {
                    //Initial data for first run
                    $http.get('app/components/user/users.defaults.json')
                        .success (function(data){
				            $localStorage.users = data;
                        });
            }
            return {
                getUsers: function () {
                    return $localStorage.users;
                },
                getUser: function (userName) {
                    var users = $localStorage.users;
                    for (var i = 0; i < users.length; i++) {
                        if(users[i].userName == userName) {
                            console.log("users.getUser returns " + users[i] );
                            return users[i];
                        }
                    }
                    return false;
                },
                addUser: function (user) {
                    if (this.getUsers(user.userName)) {
                        $localStorage.users.push(user);
                        return user;
                    } else {
                        return false;
                    }
                },
                deleteUser: function (user) {
                    if (this.getUsers(user.userName)) {
                        $localStorage.users.push(user);
                        return user;
                    } else {
                        return false;
                    }
                },
                modifyUser: function (user) {
                }
            }
        });
})();